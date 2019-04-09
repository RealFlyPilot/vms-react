// eslint-disable
// this is an auto generated file. This will be overwritten

export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
export const getWorker = `query GetWorker($id: ID!) {
  getWorker(id: $id) {
    id
    name
    email
    clientId
    vendorId
  }
}
`;
export const listWorkers = `query ListWorkers(
  $filter: ModelWorkerFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      clientId
      vendorId
    }
    nextToken
  }
}
`;
export const getAdmin = `query GetAdmin($id: ID!) {
  getAdmin(id: $id) {
    adminuserid
    clientid
    userid
    fname
    name
    active
    levelid
    locationid
    firsttimelogin
    systemutility
    timecardadjustment
    email
    created
    createdby
    modified
    modifiedby
    lastpasswordupdate
    roleid
    defaulttimezoneid
    defaultlanguageid
    comments
    lasttimelogin
    passwordtype
    locked
    passwordattempt
    password
    oldpassword1
    oldpassword2
    oldpassword3
    oldpassword4
    oldpassword5
  }
}
`;
export const listAdmins = `query ListAdmins(
  $filter: ModelAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      adminuserid
      clientid
      userid
      fname
      name
      active
      levelid
      locationid
      firsttimelogin
      systemutility
      timecardadjustment
      email
      created
      createdby
      modified
      modifiedby
      lastpasswordupdate
      roleid
      defaulttimezoneid
      defaultlanguageid
      comments
      lasttimelogin
      passwordtype
      locked
      passwordattempt
      password
      oldpassword1
      oldpassword2
      oldpassword3
      oldpassword4
      oldpassword5
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
    }
    nextToken
  }
}
`;
export const getClient = `query GetClient($id: ID!) {
  getClient(id: $id) {
    clientuserid
    clientlocationid
    userid
    fname
    lname
    title
    email
    tel
    telext
    fax
    ttdnumber
    url
    address
    address2
    city
    state
    zipcode
    country
    levelid
    levelcode
    accessgroup
    active
    created
    modified
    esignature
    vendorlisting
    createdby
    modifiedby
    firsttimelogin
    vendorselectoption
    approveinsidetimecard
    approvalmethod
    changeapproval
    hidevendornamehiringproccess
    blockemailfromvendor
    hidebillrate
    hidepayrate
    disablebillrate
    disablepayrate
    lastpasswordupdate
    hideassgbill
    hideassgpay
    hideassginclusive
    hidejobestimate
    hidemarkup
    disablemarkup
    popupmessage
    selfregister
    emailperschedule
    getemail1
    getemail2
    getemail3
    reportbasedonhirearchy
    hierarchyreporttoid
    organizationcode
    denytimecardaprroval
    disablespecialbill
    disableworkdaysrequest
    enableskilljobtitlesearch
    disableassignmentextension
    disableassignmentratechange
    notallowcreatejob
    reportscheduling
    accepttermsconditions
    disabledirectsend
    clientadmin
    worklocationcode
    blocksystememail
    allowzerobillreq
    showassignmentudf
    notallowmodifytimecard
    notallowmodifyexpense
    disablemodifytcproxy
    disablemodifyjobproxy
    disablemodifyassignmentproxy
    hideresubmitorder
    hidereplacement
    openbidadmin
    hideduplicatejob
    disableprojectdirectengage
    disablemodifysbprofile
    showjobtitleadvancesearch
    hidejobexempt
    defaultlanguageid
    defaulttimezoneid
    onepagereqcreation
    reqapprovalbymobile
    contractadditionaluser
    showclassificationrecommendation
    ssouserid
    displayallvendorlocation
    enablecreateproject
    enablecreatesow
    vendorselectoptionProject
    displayallvendorlocationProject
    onepagereqcreationnobill
    timecardapprovaltype
    changeapprovalProject
    hidejobexpense
    hidejobadditionaltimecardspend
    hideassgexpense
    hideassgadditionaltimecardspend
    hideassgestimate
    lasttimelogin
    passwordtype
    locked
    passwordattempt
  }
}
`;
export const listClients = `query ListClients(
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      clientuserid
      clientlocationid
      userid
      fname
      lname
      title
      email
      tel
      telext
      fax
      ttdnumber
      url
      address
      address2
      city
      state
      zipcode
      country
      levelid
      levelcode
      accessgroup
      active
      created
      modified
      esignature
      vendorlisting
      createdby
      modifiedby
      firsttimelogin
      vendorselectoption
      approveinsidetimecard
      approvalmethod
      changeapproval
      hidevendornamehiringproccess
      blockemailfromvendor
      hidebillrate
      hidepayrate
      disablebillrate
      disablepayrate
      lastpasswordupdate
      hideassgbill
      hideassgpay
      hideassginclusive
      hidejobestimate
      hidemarkup
      disablemarkup
      popupmessage
      selfregister
      emailperschedule
      getemail1
      getemail2
      getemail3
      reportbasedonhirearchy
      hierarchyreporttoid
      organizationcode
      denytimecardaprroval
      disablespecialbill
      disableworkdaysrequest
      enableskilljobtitlesearch
      disableassignmentextension
      disableassignmentratechange
      notallowcreatejob
      reportscheduling
      accepttermsconditions
      disabledirectsend
      clientadmin
      worklocationcode
      blocksystememail
      allowzerobillreq
      showassignmentudf
      notallowmodifytimecard
      notallowmodifyexpense
      disablemodifytcproxy
      disablemodifyjobproxy
      disablemodifyassignmentproxy
      hideresubmitorder
      hidereplacement
      openbidadmin
      hideduplicatejob
      disableprojectdirectengage
      disablemodifysbprofile
      showjobtitleadvancesearch
      hidejobexempt
      defaultlanguageid
      defaulttimezoneid
      onepagereqcreation
      reqapprovalbymobile
      contractadditionaluser
      showclassificationrecommendation
      ssouserid
      displayallvendorlocation
      enablecreateproject
      enablecreatesow
      vendorselectoptionProject
      displayallvendorlocationProject
      onepagereqcreationnobill
      timecardapprovaltype
      changeapprovalProject
      hidejobexpense
      hidejobadditionaltimecardspend
      hideassgexpense
      hideassgadditionaltimecardspend
      hideassgestimate
      lasttimelogin
      passwordtype
      locked
      passwordattempt
    }
    nextToken
  }
}
`;
