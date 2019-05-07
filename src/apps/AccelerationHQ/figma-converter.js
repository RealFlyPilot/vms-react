var IS_DEBUG = document.location.hostname == 'localhost';
var FigmaConverter = /** @class */ (function () {
    function FigmaConverter(json) {
        this.svgUrls = [];
        this.imgUrls = [];
        this.fonts = {};
        this.json = json;
    }
    FigmaConverter.prototype.getHTML = function (page, componentId) {
        this.fonts = {};
        var node = page.children.find(function (c) { return c.id == componentId; });
        var dom = this.toHTML(node, page);
        var clone = dom.cloneNode(true);
        if (clone.classList.contains("frame")) {
            clone.style.width = "100%";
            clone.style.height = "100%";
        }
        //skip artboard style and container
        //if (clone.classList.contains("frame"))
        //	clone = <HTMLElement> clone.firstElementChild;
        var css = this.extractCSS(clone);
        var markup = '<!-- ' + node.name + ' -->' + "\n" + formatHTML(clone.outerHTML);
        var js = '/* todo */';
        return {
            html: markup,
            css: css,
            dom: dom,
            js: js,
        };
    };
    FigmaConverter.prototype.extractCSS = function (elm, indent) {
        if (indent === void 0) { indent = 0; }
        var style = elm.getAttribute("style");
        var tab = "\t";
        var ind = tab.repeat(indent);
        var ind_ = tab.repeat(indent + 1);
        var css = "";
        var name = elm.getAttribute("data-name");
        if (style && style.trim() != "" && elm.id) {
            css += "\n";
            if (name)
                css += ind + "/* " + elm.getAttribute("data-name") + " */\n";
            css += ind + "#" + elm.id + " {\n" + ind_ + style.replace(/; /g, ";\n" + ind_) + "\n" + ind + "}";
        }
        if (elm.id)
            elm.removeAttribute("style");
        elm.removeAttribute("data-name");
        for (var i = 0; i < elm.children.length; i++) {
            var childCSS = this.extractCSS(elm.children[i], indent + 1);
            if (!childCSS.length)
                continue;
            css += "\n " + childCSS;
        }
        return css;
    };
    //translates any figma node into html-dom recursively
    FigmaConverter.prototype.toHTML = function (node, parent) {
        var _this = this;
        var elm = null;
        var skipChildren = false;
        try {
            var box = node.absoluteBoundingBox;
            var isButton = node.name.toLowerCase().indexOf("button") == 0;
            if (node.type == "COMPONENT" || node.type == "INSTANCE") {
                // choose proper html tag
                if (isButton) {
                    // button Components
                    elm = document.createElement("a");
                    elm.classList.add("button");
                    elm.href = "#";
                }
                else {
                    elm = document.createElement("div");
                }
                if (node.type == "INSTANCE")
                    elm.classList.add("component");
                //determine size
                elm.style.width = box.width + "px";
                elm.style.height = box.height + "px";
                elm.style.background = makeColor(node.backgroundColor);
                if (node.background)
                    node.background.forEach(function (bg) { if (bg.visible && bg.color)
                        elm.style.background = makeColor(bg.color); });
            }
            else if (node.type == "RECTANGLE") {
                //determine size
                elm = document.createElement("div");
                var style = elm.style;
                node.fills.forEach(function (fill) { return _this.applyFill(elm, fill); });
                style.borderRadius = node.cornerRadius + "px";
                if (node.rectangleCornerRadii) {
                    var r = node.rectangleCornerRadii;
                    style.borderRadius = r[0] + "px " + r[1] + "px " + r[2] + "px " + r[3] + "px ";
                }
                // stroke
                if (node.strokes && node.strokes.length)
                    elm.style.boxShadow = makeStroke(node.strokes[0].color, node.strokeWeight);
            }
            else if (node.type == "TEXT") {
                if (isButton) {
                    elm = document.createElement("a");
                    elm.classList.add("button");
                    elm.href = "#";
                }
                else {
                    elm = document.createElement("div");
                }
                var content = node.characters;
                if (node.characterStyleOverrides.length) {
                    elm.classList.add("subsets");
                    elm.style.alignItems = "normal";
                    var groups = [];
                    var cs = node.characterStyleOverrides;
                    var current = cs[0];
                    var end = 1;
                    for (var start = 0; end <= content.length; end++) {
                        if (current != cs[end] || end == content.length) {
                            var txt = content.substring(start, end);
                            var span = document.createElement("span");
                            span.innerHTML = this.prepareText(txt);
                            span.id = toId(node.id + '-' + current);
                            span.setAttribute("data-name", node.name + " Subset");
                            var style = node.styleOverrideTable[current];
                            //const inherit = 'inheritFillStyleId' in style ? node.style : {};
                            var inherit = node.style;
                            //create clone and inherit
                            var props = Object.assign({}, style);
                            for (var k in inherit)
                                props[k] = props[k] || inherit[k];
                            span.style.fontFamily = props.fontFamily;
                            span.style.fontSize = props.fontSize + "px";
                            span.style.fontWeight = props.fontWeight;
                            span.style.lineHeight = props.lineHeightPx + "px";
                            span.style.letterSpacing = props.letterSpacing + "px";
                            span.style.alignItems = "normal"; //todo
                            if (props.fills && props.fills.length)
                                span.style.color = getFillColor(props.fills[0]);
                            this.addFont(props.fontFamily, props.fontWeight);
                            elm.appendChild(span);
                            current = cs[end];
                            start = end;
                        }
                    }
                }
                else {
                    elm.innerHTML = this.prepareText(content);
                    elm.style.fontFamily = node.style.fontFamily;
                    elm.style.fontSize = node.style.fontSize + "px";
                    elm.style.fontWeight = node.style.fontWeight;
                    elm.style.letterSpacing = node.style.letterSpacing + "px";
                    this.addFont(node.style.fontFamily, node.style.fontWeight);
                }
                var fill = getFill(node.fills);
                elm.style.color = getFillColor(fill);
                if (node.opacity)
                    elm.style.opacity = node.opacity;
                elm.style.verticalAlign = "middle";
                //elm.style.textAlign = "left";
                //console.log(node.style.textAlignHorizontal)
                if (node.style.textAlignHorizontal == "LEFT") {
                    elm.style.justifyContent = "flex-start";
                }
                else if (node.style.textAlignHorizontal == "RIGHT") {
                    elm.style.justifyContent = "flex-end";
                }
                else if (node.style.textAlignHorizontal == "CENTER") {
                    elm.style.textAlign = "center";
                    elm.style.justifyContent = "center";
                }
                //determine size & position
                elm.style.width = box.width + "px";
                //hack: vertical alignment
                if (node.style.textAlignVertical == "TOP") {
                    //magic: calculate vertical offset
                    var offset = -0.5 *
                        (node.style.lineHeightPercent * 0.01 * node.style.fontSize -
                            node.style.fontSize);
                    elm.style.transform = "translate(0, " + offset + "px)";
                }
                else if (node.style.textAlignVertical == "CENTER") {
                    elm.style.alignItems = "center";
                }
                //line height in percentage (broken?)
                //elm.style.lineHeight = round(node.style.lineHeightPercent) + "%";
                elm.style.lineHeight = node.style.lineHeightPx + "px";
                elm.style.height = box.height + "px";
                /* Unavailable attributes
                p.style.textTransform
                */
                //visualize baseline
                //elm.style.backgroundImage = "linear-gradient(#0ff 1px, transparent 1px)";
                //elm.style.backgroundSize = "25px " + node.style.lineHeightPx + "px";
            }
            else if (node.type == "VECTOR" && "isMask" in node) {
                //clip mask
                //todo: parent.style.overflow = "hidden";
                return null;
            }
            else if (node.type == "ELLIPSE") {
                elm = document.createElement("div");
                elm.className = "svg-wrapper";
                elm.style.width = box.width + "px";
                elm.style.height = box.height + "px";
                var radiusX = box.width * 0.5;
                var radiusY = box.height * 0.5;
                var strokeStyle = node.strokes.length ? "stroke:" + makeColor(node.strokes[0].color, node.strokes[0].opacity) + ";stroke-width:" + node.strokeWeight : "";
                var fillStyle = "none";
                if (node.fills.length) {
                    var fill = getFill(node.fills);
                    if (fill)
                        fillStyle = getFillColor(fill);
                }
                var svg = "<svg height=\"" + box.height + "\" width=\"" + box.width + "\">\n\t\t\t<ellipse cx=\"" + radiusX + "\" cy=\"" + radiusY + "\" rx=\"" + radiusX + "\" ry=\"" + radiusY + "\" style=\"fill:" + fillStyle + ";" + strokeStyle + "\" /></svg>";
                elm.innerHTML = svg;
            }
            else if (isVector(node)) {
                elm = this.getSVG(node);
                //opacity is already premultiplied into svg
                //if (node.opacity)
                //	elm.style.opacity = node.opacity;
                //hack: only apply fills on empty svgs
                if (elm.classList.contains("empty"))
                    node.fills.forEach(function (fill) { return _this.applyFill(elm, fill); });
                //determine original size (shadow hack)
                elm.onload = function () {
                    var _i = new Image();
                    _i.src = elm.src;
                    _i.onload = function () {
                        elm.style.width = null;
                        elm.style.height = null;
                        if (_i.width != box.width || _i.height != box.height) {
                            var size = getShadowSize(node.effects);
                            if (size.l != 0 || size.r != 0 || size.t != 0 || size.b != 0) {
                                var offsetX = -size.l;
                                var offsetY = -size.t;
                                elm.width = _i.width;
                                elm.height = _i.height;
                                elm.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
                            }
                            else if (_i.width > box.width || _i.height > box.height) {
                                //svgs with strokes are larger than their bounding box
                                elm.width = _i.width;
                                elm.height = _i.height;
                                var offsetX = -0.5 * node.strokeWeight;
                                var offsetY = 0.5 * node.strokeWeight;
                                elm.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
                            }
                        }
                    };
                };
                skipChildren = true;
            }
            else if (node.type == "FRAME") {
                elm = document.createElement("div");
                elm.style.width = box.width + "px";
                elm.style.height = box.height + "px";
                elm.style.overflow = node.clipsContent ? "hidden" : "visible";
                elm.style.background = makeColor(node.backgroundColor);
                if (node.background)
                    node.background.forEach(function (bg) { if (bg.visible && bg.color)
                        elm.style.background = makeColor(bg.color); });
            }
            else if (node.type == "GROUP") {
                elm = document.createElement("div");
                //styles are applied below
            }
            else {
                console.log("node " + node.type + " not yet supported");
                elm = document.createElement("div");
                elm.innerHTML = "??";
                skipChildren = true;
            }
            //Shadows, do not apply to vectors (they already have the ds rendered)
            if (node.effects && getFirstEffect(node.effects) && !isVector(node))
                elm.style.boxShadow = makeShadow(getFirstEffect(node.effects));
            applyConstraints(node, elm, parent);
            elm.id = toId(node.id);
            elm.setAttribute("data-name", node.name);
            elm.classList.add(node.type.toLowerCase());
            if (node.clipsContent)
                elm.style.overflow = "hidden";
            if (node.type == "GROUP") {
                elm.removeAttribute("style");
                elm.className = "group";
                elm.style.background = makeColor(node.backgroundColor);
            }
            else if (node.type == "FRAME") {
                elm.classList.remove("left", "top");
            }
            //traverse all children
            if (node.children && !skipChildren) {
                node.children.forEach(function (child) {
                    //skip invisible childen
                    if (child.visible === false)
                        return;
                    var comment = document.createComment(' ' + child.name + ' ');
                    elm.appendChild(comment);
                    //add node content
                    if (IS_DEBUG) {
                        var refJSON = document.createComment('\n' + JSON.stringify(child, function (key, val) {
                            if (key == 'children')
                                return undefined;
                            if (Array.isArray(val) && val.length == 0)
                                return undefined;
                            return val;
                        }, 2) + '\n');
                        elm.appendChild(refJSON);
                    }
                    var result = _this.toHTML(child, node.type == "GROUP" ? parent : node);
                    result && elm.appendChild(result);
                });
            }
            //hack: apply dropshadow to firstChild svg
            if (elm.childElementCount == 1 &&
                elm.firstChild.tagName == "IMG" &&
                elm.style.boxShadow) {
                elm.firstChild.style.filter = makeFilterShadow(getFirstEffect(node.effects));
                elm.style.boxShadow = null;
            }
        }
        catch (e) {
            elm = document.createElement("div");
            elm.innerHTML = "error converting node " + node.id + " (" + node.name + ")";
            console.error(e);
        }
        return elm;
    };
    FigmaConverter.prototype.prepareText = function (val) {
        return val.replace(/\n/g, "<br />").replace(/(?<=\s)\s/g, '&nbsp;');
    };
    FigmaConverter.prototype.addFont = function (family, weight) {
        if (family && !(family in this.fonts))
            this.fonts[family] = [];
        if (this.fonts[family].indexOf(weight) == -1)
            this.fonts[family].push(weight);
    };
    FigmaConverter.prototype.getSVG = function (node) {
        var box = node.absoluteBoundingBox;
        var placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        var img = document.createElement("img");
        img.src = this.svgUrls[node.id] || placeholder;
        if (!this.svgUrls[node.id])
            img.classList.add("empty");
        img.width = box.width;
        img.height = box.height;
        return img;
    };
    FigmaConverter.prototype.getSVGInfos = function (pageIndex, compIndex) {
        if (compIndex === void 0) { compIndex = undefined; }
        var page = this.json.document.children[pageIndex];
        var components = compIndex ? [page.children[compIndex]] : page.children;
        var ret = components.map(function (comp) { return { id: comp.id, checksum: hash(JSON.stringify(comp)) }; });
        var node = compIndex ? page.children[compIndex] : page;
        Array.prototype.push.apply(ret, this.getAllSVGNodes(node));
        return ret;
    };
    FigmaConverter.prototype.getAllSVGNodes = function (node) {
        if (this.isSVG(node))
            return [{ id: node.id, checksum: hash(JSON.stringify(node)) }];
        var ret = [];
        for (var _i = 0, _a = node.children || []; _i < _a.length; _i++) {
            var child = _a[_i];
            Array.prototype.push.apply(ret, this.getAllSVGNodes(child));
        }
        return ret;
    };
    FigmaConverter.prototype.isSVG = function (node) {
        if (!isVector(node))
            return false;
        if (node.type == "VECTOR" && node.strokeWeight == 0 && node.fills.length == 0)
            return false;
        return !(node.visible === false);
    };
    FigmaConverter.prototype.getComponentIds = function (pageId) {
        var page = this.json.document.children[pageId];
        return page.children.map(function (c) { return c.id; });
    };
    FigmaConverter.prototype.getSVGUrl = function (id) {
        return this.svgUrls[id];
    };
    FigmaConverter.prototype.applyFill = function (elm, fill) {
        if (!fill || ('visible' in fill && !fill.visible))
            return;
        if ('opacity' in fill && fill.opacity == 0)
            return;
        elm.style.background = getFillColor(fill);
        if (fill.type == "IMAGE") {
            elm.style.backgroundImage = "url('" + this.imgUrls[fill.imageRef] + "')";
            elm.style.backgroundSize = fill.scaleMode == "FILL" ? "cover" : (fill.scaleMode == "FIT" ? "contain" : null);
            elm.style.backgroundRepeat = fill.scaleMode == "TILE" ? "repeat" : "no-repeat";
            //determine image size
            if (fill.scaleMode == "TILE") {
                var image = new Image();
                image.onload = function () {
                    elm.style.backgroundSize = (fill.scalingFactor * image.width) + "px " + (fill.scalingFactor * image.height) + "px";
                };
                image.src = this.imgUrls[fill.imageRef];
            }
            else if (fill.scaleMode == "STRETCH") {
                var image = new Image();
                image.onload = function () {
                    var m1 = fill.imageTransform[0];
                    var m2 = fill.imageTransform[1];
                    elm.style.backgroundPosition = (m2[2] * elm.offsetWidth) + "px " + (m1[2] * elm.offsetHeight) + "px";
                    elm.style.backgroundSize = (m2[1] * elm.offsetWidth) + "px " + (m1[0] * elm.offsetHeight) + "px";
                };
                image.src = this.imgUrls[fill.imageRef];
            }
            else {
                elm.style.backgroundPosition = "center center";
            }
        }
    };
    return FigmaConverter;
}());
function applyConstraints(node, elm, parent) {
    var box = node.absoluteBoundingBox;
    var parentBox = parent.absoluteBoundingBox || box;
    var center = {
        x: box.x + 0.5 * box.width,
        y: box.y + 0.5 * box.height
    };
    var parentCenter = {
        x: parentBox.x + 0.5 * parentBox.width,
        y: parentBox.y + 0.5 * parentBox.height
    };
    //make position relative
    var left = box.x - parentBox.x;
    var top = box.y - parentBox.y;
    var right = parentBox.x + parentBox.width - (box.x + box.width);
    var bottom = parentBox.y + parentBox.height - (box.y + box.height);
    //use inline classes
    if (node.constraints.horizontal == node.constraints.vertical) {
        elm.classList.add(node.constraints.horizontal.toLowerCase());
    }
    else if (node.constraints.horizontal == "SCALE") {
        elm.classList.add("h-" + node.constraints.horizontal.toLowerCase());
        elm.classList.add(node.constraints.vertical.toLowerCase());
    }
    else if (node.constraints.vertical == "SCALE") {
        elm.classList.add("v-" + node.constraints.vertical.toLowerCase());
        elm.classList.add(node.constraints.horizontal.toLowerCase());
    }
    else {
        elm.classList.add(node.constraints.horizontal.toLowerCase());
        elm.classList.add(node.constraints.vertical.toLowerCase());
    }
    //Horizontal Constraints
    if (node.constraints.horizontal == "RIGHT") {
        elm.style.right = right ? right + "px" : null;
        elm.style.width = box.width + "px";
    }
    else if (node.constraints.horizontal == "LEFT") {
        elm.style.left = left ? left + "px" : null;
        elm.style.width = box.width + "px";
    }
    else if (node.constraints.horizontal == "LEFT_RIGHT") {
        elm.style.left = left ? left + "px" : null;
        elm.style.right = right ? right + "px" : null;
        elm.style.width = null;
    }
    else if (node.constraints.horizontal == "CENTER") {
        var offset = center.x - parentCenter.x;
        elm.style.left = "calc(50% - " + box.width + "px/2 + " + offset + "px)";
        elm.style.width = box.width + "px";
    }
    else if (node.constraints.horizontal == "SCALE") {
        var leftPercentage = left / parentBox.width * 100;
        var rightPercentage = right / parentBox.width * 100;
        elm.style.left = leftPercentage ? leftPercentage + "%" : null;
        elm.style.right = rightPercentage ? rightPercentage + "%" : null;
        elm.style.width = null;
    }
    //Vertical Constraints
    if (node.constraints.vertical == "TOP") {
        elm.style.top = top ? top + "px" : null;
        elm.style.height = box.height + "px";
    }
    else if (node.constraints.vertical == "BOTTOM") {
        elm.style.bottom = bottom ? bottom + "px" : null;
        elm.style.height = box.height + "px";
    }
    else if (node.constraints.vertical == "TOP_BOTTOM") {
        elm.style.top = top ? top + "px" : null;
        elm.style.bottom = bottom ? bottom + "px" : null;
    }
    else if (node.constraints.vertical == "CENTER") {
        var offset = center.y - parentCenter.y;
        elm.style.top = "calc(50% - " + box.height + "px/2 + " + offset + "px)";
        elm.style.height = box.height + "px";
    }
    else if (node.constraints.vertical == "SCALE") {
        var topPercentage = roundPercentage(top / parentBox.height * 100);
        var bottomPercentage = roundPercentage(bottom / parentBox.height * 100);
        elm.style.top = topPercentage ? topPercentage + "%" : null;
        elm.style.bottom = bottomPercentage ? bottomPercentage + "%" : null;
        elm.style.height = null;
    }
}
function isVector(node) {
    var vecTypes = [
        "VECTOR",
        "BOOLEAN_OPERATION",
        "STAR",
        "LINE",
        "REGULAR_POLYGON"
    ];
    //check myself
    if (vecTypes.indexOf(node.type) == -1)
        return false;
    //check all children
    for (var i = 0; node.children && i < node.children.length; i++) {
        if (!this.isVector(node.children[i]))
            return false;
    }
    return true;
}
function getFirstEffect(effects) {
    for (var i = 0; i < effects.length; i++) {
        if (effects[i].visible !== false)
            return effects[i];
    }
    return null;
}
//find last fill that is visible
function getFill(fills) {
    var lastFill = null;
    for (var i = 0; fills && i < fills.length; i++) {
        if (fills[i].visible === false)
            continue;
        lastFill = fills[i];
    }
    return lastFill;
}
function getFillColor(fill) {
    if (fill.color)
        return makeColor(fill.color, fill.opacity);
    if (fill.gradientStops)
        return makeColor(fill.gradientStops[0].color);
}
function getShadowSize(effects) {
    var ret = { l: 0, r: 0, t: 0, b: 0 };
    for (var i = 0; effects && i < effects.length; i++) {
        var shadow = effects[i];
        if (shadow.visible === false)
            continue;
        var r = Math.max(0, shadow.offset.x + shadow.radius);
        var l = Math.max(0, -shadow.offset.x + shadow.radius);
        var t = Math.max(0, -shadow.offset.y + shadow.radius);
        var b = Math.max(0, shadow.offset.y + shadow.radius);
        ret.r = Math.max(ret.r, r);
        ret.l = Math.max(ret.l, l);
        ret.t = Math.max(ret.t, t);
        ret.b = Math.max(ret.b, b);
    }
    return ret;
}
//returns rgba(10, 200, 300, 0.5)
function makeColor(col, alpha) {
    if (alpha === void 0) { alpha = undefined; }
    console.assert(col.r != undefined);
    //round to an int, see https://stackoverflow.com/a/12837315
    var r = (col.r * 255) | 0;
    var g = (col.g * 255) | 0;
    var b = (col.b * 255) | 0;
    var a = alpha || col.a;
    if (a == 0)
        return null;
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
function makeStroke(col, strokewidth) {
    var color = makeColor(col);
    return color + " 0 0 0 " + strokewidth + "px inset";
}
//rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
function makeShadow(effect) {
    if (!effect.color)
        return null;
    var color = makeColor(effect.color);
    return color + " " + effect.offset.x + "px " + effect.offset.y + "px " + effect.radius + "px 0px";
}
function makeFilterShadow(effect) {
    var color = makeColor(effect.color);
    return "drop-shadow(" + effect.offset.x + "px " + effect.offset.y + "px " + effect.radius + "px " + color + ")";
}
function toClass(val) {
    return val
        .replace(/[\s/()]/g, " ")
        .replace(/\s+/, " ")
        .toLowerCase();
}
function toId(val) {
    return 'n' + val.replace(/[:]/g, "_").replace(/[;]/g, "-");
}
function roundPercentage(val) {
    return Math.round(val * 100) / 100;
}
function hash(s) {
    for (var i = 0, h = 1; i < s.length; i++)
        h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
    return (h ^ h >>> 7) >>> 0;
}
;
function formatHTML(code) {
    //var code = code.replace(/(\<\!-- .*? --\>)/g, "\n\$1\n").trim();
    var tab = "\t";
    var whitespace = tab.repeat(1);
    var currentIndent = 0;
    var char = null;
    var nextChar = null;
    var stripWhiteSpaces = true;
    var stripEmptyLines = true;
    var tag = null;
    var hasInner = {};
    var result = "";
    for (var pos = 0; pos <= code.length; pos++) {
        char = code.substr(pos, 1);
        nextChar = code.substr(pos + 1, 1);
        // If opening tag, add newline character and indention
        if (char === "<" && nextChar !== "/") {
            tag = code.substr(pos + 1, 10).match(/[a-z!-]+/i)[0];
            hasInner[currentIndent - 1] = true;
            hasInner[currentIndent] = false;
            if (["br"].indexOf(tag) == -1)
                result += "\n" + whitespace.repeat(currentIndent);
            if (["!--", "br"].indexOf(tag) == -1)
                currentIndent++;
        }
        else if (char === "<" && nextChar === "/") {
            // if Closing tag, add newline and indention
            if (--currentIndent < 0)
                currentIndent = 0;
            var closingTag = code.substr(pos + 2, 10).match(/[a-z]+/i)[0];
            if (["span", "br", "ellipse"].indexOf(closingTag) == -1 && hasInner[currentIndent])
                result += "\n" + whitespace.repeat(currentIndent);
        }
        else if (stripWhiteSpaces === true && char === " " && nextChar === " ")
            // remove multiple whitespaces
            char = "";
        else if (stripEmptyLines === true && char === "\n") {
            // remove empty lines
            //debugger;
            if (code.substr(pos, code.substr(pos).indexOf("<")).trim() === "")
                char = "";
        }
        result += char;
    }
    return result.trim();
}
//# sourceMappingURL=FigmaConverter.js.map