var fileId = null;
var apiKey = null;

var converter = null;
var result = null;

document.addEventListener("DOMContentLoaded", init);
  
function init() {

	apiKey = localStorage.getItem("figma_api_key");

	document.querySelector('#apiKey').value = apiKey;
	document.querySelector('#start-key').value = apiKey;
	oninputchange('apiKey', setApiKey);

	fileId = localStorage.getItem("figma_fileid");

	document.querySelector('#figmaFile').value = fileId;
	document.querySelector('#start-file').value = fileId;
	oninputchange('figmaFile', setFile);

	//setup grid item
	var gridItem = document.querySelector('#currentFile');
	gridItem.style.display = null;

	var isValidApiKey = apiKey && apiKey.length >= 30 && apiKey.length < 50;
	var isValidFile = fileId && fileId.length >= 20;

	if (!isValidApiKey || !isValidFile) {
		document.getElementById("start").style.display = null;
		oninputchange("start-key", setApiKey);
		oninputchange("start-file", setFile);
		return;
	}

	document.getElementById("description").innerText = "Initializing...";

	loadFigmaJSON(onJSONLoaded);
}

function onJSONLoaded(json) {
	document.body.classList.add("file-loaded");

	converter = new FigmaConverter(json);
	converter.svgUrls = JSON.parse(localStorage.getItem("figma_svg_urls_" + fileId)) || {};
	converter.imgUrls = JSON.parse(localStorage.getItem("figma_img_urls_" + fileId)) || null;

  var title = document.querySelector('#currentFile .title');
  var lastMod = document.querySelector('#lastModified');
	var thumb = document.querySelector('#currentFile .thumbnail');

  title.innerHTML = json.name;
  lastMod.innerHTML = "Updated " +humanDateDiff(Date.parse(json.lastModified));
	thumb.style.backgroundImage = "url(" +json.thumbnailUrl + ")";

  var pages = json.document.children;

  var pageSelect = document.getElementById("page");
  var select = document.getElementById("chooser");

  pages.forEach(page => {
  	var option = document.createElement("option");
  	option.text = page.name;
  	option.value = page.id;
  	pageSelect.add(option);
  });

  pageSelect.onchange = function () {
  	localStorage.setItem("figma_page", pageSelect.value);

    var components = pages.find(p => p.id == pageSelect.value).children;
    select.innerHTML = "";

    components.forEach(component => {

      if (component.type != "COMPONENT" && component.type != "INSTANCE" && component.type != "FRAME")
        return;

      if (component.name.indexOf("_hover") != -1)
        return;

      var option = document.createElement("option");
      option.text = component.name;
      option.value = component.id;
      select.add(option);
  });

  	//select default component here
    select.value = localStorage.getItem("figma_component") || components[0].id;

    if (select.selectedIndex == -1)
      select.selectedIndex = 0;

    select.onchange();
	};

  select.onchange = function () {
    localStorage.setItem("figma_component", select.value);

    var container = document.getElementById("container");

    const refimg = document.getElementById("refimg");
    refimg.src = placeholder;
    refimg.removeAttribute("width");
    refimg.removeAttribute("height");
    refimg.style.width = null;
    refimg.style.height = null;

    showRefLoading = window.setTimeout(function () {
    	refimg.style = null;
    }, 100);

    container.innerHTML = '';
    document.getElementById("description").innerText = '';

    requestAnimationFrame(function () {

    	const checksums = JSON.parse(localStorage.getItem("figma_ref_img_checksums_" + fileId) || "{}");

    	var images = converter.getSVGInfos(pageSelect.selectedIndex);

    	if (images.length > 50)
    		images = converter.getSVGInfos(pageSelect.selectedIndex, select.selectedIndex);

    	images = images.filter(n => {
    		return !(checksums.hasOwnProperty(n.id)) || checksums[n.id] != n.checksum;
    	});

    	if (images.length) {
    		document.getElementById("description").innerText = "Loading " + images.length + " SVG's from Figma ...";
    	}

    	getNodeSVGs(images, () => {
    		getImages(fileId, () => {

    			clearTimeout(showRefLoading);

    			result = figma2HTML(json, pageSelect.selectedIndex, select.value);
    			container.innerHTML = '';
    			container.appendChild(result.wrapper);

    			resize();
    		});
    	});
    });
	};

	//select default page here
  pageSelect.value = localStorage.getItem("figma_page") || pages[0].id;

  if (pageSelect.selectedIndex == -1)
  	pageSelect.selectedIndex = 0;

  pageSelect.onchange();
}

function setApiKey() {
	if (this.value.length > 30) { //valid api key?
		localStorage.setItem("figma_api_key", this.value);
		document.location.reload();
	}
}

function setFile() {

	var fileId = decodeURIComponent(this.value);

	if (fileId && fileId.length > 20) {

		//extract id from url
		const match = fileId.match(/[a-z0-9]{20,30}/i);

		if (match && match[0])
			fileId = match[0];
		else
			return;

		this.value = fileId;

		localStorage.setItem("figma_fileid", fileId);
		localStorage.removeItem("figma_page");
		localStorage.removeItem("figma_component");

		if(apiKey)
			document.location.reload();
	}
}

function showCode() {
	const container = document.getElementById("codeEditor");

	container.innerHTML = '';

	const editor = monaco.editor.create(container, {
		language: "html",
		model: null,
		lineNumbers: "off",
		//wordWrap: "off",
		//wrappingIndent: "indent",
		//wordWrapBreakAfterCharacters: ' ',
		roundedSelection: false,
		scrollBeyondLastLine: false,
		readOnly: false,
		theme: "vs-dark",
		minimap: { enabled: false },
		scrollbar: {
			useShadows: false,
			vertical: 'auto',
			horizontal: 'auto',
		},
		renderIndentGuides: false,
		renderLineHighlight: "none",
		overviewRulerLanes: 0,
		contextmenu: false,
		automaticLayout: true,
	});

	var model = monaco.editor.createModel(result.source, "html");
	model.updateOptions({ tabSize: 2 });
	editor.setModel(model)

	setTimeout(() => {

	/*
		editor.getAction("editor.action.formatDocument").run().then(() => {
			editor.updateOptions({
				readOnly: true,
			});
		});
	*/

	}, 1000);
}

function humanDateDiff(date) {
	var diffSeconds = Math.floor((Date.now() - date) / 1000);

	if (diffSeconds <= 30)
		return "Just now";

	if(diffSeconds < 120)
		return "Recently";

	var diffMinutes = Math.floor(diffSeconds / 60);

	if (diffMinutes < 60)
		return diffMinutes + " minutes ago";

	var diffHours = Math.floor(diffMinutes / 60);

	if (diffHours == 1)
		return "1 hour ago";

	if (diffHours < 24)
		return diffHours + " hours ago";

	var diffDays = Math.floor(diffHours / 24);

	if (diffDays < 30)
		return diffDays + " days ago";

	var diffMonths = Math.floor(diffDays / 30);

	if (diffMonths < 12)
		return diffMonths + " months ago";

	return "more than a year ago";
}

function figma2HTML(figJSON, pIndex, componentId) {
  var page = figJSON.document.children[pIndex];

  var components = page.children;

  var wrapper = document.createElement("div");
  wrapper.id = "figma-component";

  var node = components.find(c => c.id == componentId);

  wrapper.style.width = node.absoluteBoundingBox.width + "px";
  wrapper.style.height = node.absoluteBoundingBox.height + "px";

  wrapper.setAttribute("data-width", node.absoluteBoundingBox.width);
  wrapper.setAttribute("data-height", node.absoluteBoundingBox.height);

  var desc =
    node.id in figJSON.components
      ? figJSON.components[node.id].description
      : "";

  document.getElementById("description").innerText = desc;

	//update ref image
	//hint: if ref image is null, figma api failed to generate the SVG
  const url = converter.getSVGUrl(node.id);

  const img = document.getElementById("refimg");
  img.width = node.absoluteBoundingBox.width;
  img.height = node.absoluteBoundingBox.height;
  img.style.width = null;
  img.style.height = null;

  img.onload = () => {
  	img.removeAttribute("width");
  	img.removeAttribute("height");

  	img.style.background = "none";

  	//to make the transition work
  	img.style.width = img.width;
  	img.style.height = img.height;

  	//shadowhack
    var effects = node.effects;

    if ((!effects || node.effects.length == 0) && node.children.length && !node.clipsContent)
      effects = node.children[0].effects;

    if (effects && effects.length) {
      var shadowSize = getShadowSize(effects);
      const offsetX = -shadowSize.l;
      const offsetY = -shadowSize.t;
      img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  };

  img.style.transform = null;
  img.src = url == "null" ? placeholder : url;

	//generate control dom
  const result = converter.getHTML(page, componentId);

  var codepenHead = "";

	//add google webfonts
  for(family in converter.fonts) {
  	var link = document.createElement('link');
  	link.rel = "stylesheet";
  	const weights = converter.fonts[family].join(',');
  	link.href = "https://fonts.googleapis.com/css?family=" + family + ":" + weights;
  	document.body.appendChild(link);
  	codepenHead += link.outerHTML + "\n";
  }

	//fill codepen form
  const codepenData = {
  	title: "Figma2HTML",
		description: "Figma to HTML!",
  	editors: "1100",
  	layout: "left",
  	html: result.html,
  	css: result.css,
  	css_external: 'https://ui-kit.co/figma2html/dist/codepen.css?v=1',
  	head: '<link rel="stylesheet" type="text/css" href="https://ui-kit.co/figma2html/dist/layout.css?v=2">' + codepenHead,
  }
  document.querySelector('input[name=data]').value = JSON.stringify(codepenData);

  //find appropriate hover node
  for (var i = 0; i < components.length; i++) {
    const cn = components[i].name;
    if (cn.indexOf(node.name) != 0 || cn.indexOf("_hover") == -1) continue;

    const hoverNode = components[i];

    var hoverStyles = extractHoverStyles(hoverNode);

    if (hoverStyles) {
      const selector = "#" + toId(node.id) + ":hover";

      var css = "";

      for (id in hoverStyles) {
        css +=
          selector + " #" + toId(id) + " {\n " + hoverStyles[id] + "\n}\n\n";
      }

      const style = document.createElement("style");
      style.appendChild(document.createTextNode(css));

      document.head.appendChild(style);
    }

    break;
  }

  wrapper.appendChild(result.dom);

	const combinedSource = result.html + "\n\n\n" + "<!-- ———————      CSS      ——————— -->\n<style>\n" + result.css + "\n</style>"; // + "<script>" + result.js + "</script>";

  return { wrapper: wrapper, source: combinedSource };
}

const placeholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

function extractHoverStyles(node) {
  var ret = {};
  _extractStyles(node, ret);
  return ret;
}

function _extractStyles(node, ret) {
  const id = node.id.substr(node.id.lastIndexOf(";") + 1);
  //const selector = '#' + toId(node.id.substr(node.id.lastIndexOf(';') + 1));

  var styles = [];

  if (node.type == "RECTANGLE") {
    const bgs = [];
    node.fills &&
      node.fills.forEach(fill => {
        if (fill.visible === false) return;

        const col = makeColor(fill.color, fill.opacity);
        bgs.unshift("linear-gradient(" + col + ", " + col + ")");
      });

    bgs.length &&
      styles.push("background-image: " + bgs.join(",") + " !important;");
  }

  if (styles.length) ret[id] = styles;

  node.children &&
    node.children.forEach(function (child) {
      //skip invisible childen
      if (child.visible === false) return;

      _extractStyles(child, ret);
    });
}

function loadFigmaJSON(callback) {

	document.getElementById("description").innerText = "Loading Figma file...";

  var url = "https://api.figma.com/v1/files/" + fileId;

  figma_api(url, json => {
  	if (json.err) {
  		document.getElementById("description").innerText = "Error getting Figma file: " + json.err;
  		return;
  	}

  	callback(json);
  });
}

function reload() {

	navigator.serviceWorker.controller.postMessage("clear-figma-cache");

	localStorage.removeItem("figma_img_urls_" + fileId);

	document.location.reload();
}

function figma_api(url, callback) {
	fetch(url, {
		headers: {
			"X-Figma-Token": apiKey,
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    callback(json);
  })
  .catch(function (error) {
  	console.error(error);
  });
}

function getNodeSVGs(nodes, callback) {

	if (!nodes.length) {
		callback();
		return;
	}

	const maxSVGs = 50;

	if(nodes.length > maxSVGs)
		console.error("too many svg parts", nodes);

	const _nodes = nodes.map(n => n.id).slice(0, maxSVGs);

	const ids = _nodes.join(',');

  console.log("downloading " + _nodes.length + " svg nodes " + ids);

  var url = "https://api.figma.com/v1/images/" + fileId + "?ids=" + ids + "&format=svg";

  figma_api(url, json => {

  	console.log("downloading svg nodes finished " + ids);

  	const checksums = JSON.parse(localStorage.getItem("figma_ref_img_checksums_" + fileId) || "{}");

  	for (var id in json.images) {
  		converter.svgUrls[id] = json.images[id];
  		checksums[id] = nodes.find(n => n.id == id).checksum;
  	}

		localStorage.setItem("figma_svg_urls_" + fileId, JSON.stringify(converter.svgUrls));

		localStorage.setItem("figma_ref_img_checksums_" + fileId, JSON.stringify(checksums));

		callback();
  });
}

function getImages(fileId, callback) {

	if (converter.imgUrls != null) {
		callback();
		return;
	}

	var url = "https://api.figma.com/v1/files/" + fileId + "/images";

	figma_api(url, json => {

		converter.imgUrls = json.meta.images;

		localStorage.setItem("figma_img_urls_" + fileId, JSON.stringify(converter.imgUrls));

		callback();
	});
}

function oninputchange(id, handler) {
	const elm = document.getElementById(id);
	var defer = null;
	elm.onchange =
	elm.onkeypress =
	elm.onpaste =
	elm.oninput = function () {
		window.clearTimeout(defer);
		defer = window.setTimeout(function () {
			handler.call(elm);
		}, 100);
	};
}
