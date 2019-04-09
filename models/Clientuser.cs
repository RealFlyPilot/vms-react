using System;
using System.Collections.Generic;

namespace VmsModels.Models
{
    public partial class Clientuser
    {
        public Clientuser()
        {
            Assignment = new HashSet<Assignment>();
            ClientAvailableSlot = new HashSet<ClientAvailableSlot>();
            Clientapprovallevel = new HashSet<Clientapprovallevel>();
            ClientproxyapproverNproxyapproverNavigation = new HashSet<Clientproxyapprover>();
            ClientproxyapproverNproxyoriginalNavigation = new HashSet<Clientproxyapprover>();
            Clientusercommandchain = new HashSet<Clientusercommandchain>();
            Clientuserdualapprover = new HashSet<Clientuserdualapprover>();
            Clientusergroup = new HashSet<Clientusergroup>();
            Clientusermodule = new HashSet<Clientusermodule>();
            Clientuserreport = new HashSet<Clientuserreport>();
            ClientuserreporthierarchyNclientuser = new HashSet<Clientuserreporthierarchy>();
            ClientuserreporthierarchyNhierarchyreportto = new HashSet<Clientuserreporthierarchy>();
            Clientuserreqlocation = new HashSet<Clientuserreqlocation>();
            Clientusersbcode = new HashSet<Clientusersbcode>();
            DraftJobRequest = new HashSet<DraftJobRequest>();
            DraftSowProject = new HashSet<DraftSowProject>();
            Jobapprovals = new HashSet<Jobapprovals>();
            JobrequestNcreatedbyNavigation = new HashSet<Jobrequest>();
            JobrequestNproxyuserNavigation = new HashSet<Jobrequest>();
            JobrequestNreportto = new HashSet<Jobrequest>();
            JobrequestNreporttoid2Navigation = new HashSet<Jobrequest>();
            JobrequestNrequestorNavigation = new HashSet<Jobrequest>();
            Jobrequestmessages = new HashSet<Jobrequestmessages>();
            Reportfavorits = new HashSet<Reportfavorits>();
            UserSearchCriteria = new HashSet<UserSearchCriteria>();
        }

        public int Nclientuserid { get; set; }
        public int? Nclientlocationid { get; set; }
        public string Cuserid { get; set; }
        public string Cfname { get; set; }
        public string Clname { get; set; }
        public string Ctitle { get; set; }
        public string Cemail { get; set; }
        public string Ctel { get; set; }
        public string Ctelext { get; set; }
        public string Cfax { get; set; }
        public string Cttdnumber { get; set; }
        public string Curl { get; set; }
        public string Caddress { get; set; }
        public string Caddress2 { get; set; }
        public string Ccity { get; set; }
        public string Cstate { get; set; }
        public string Czipcode { get; set; }
        public string Ccountry { get; set; }
        public int? Nlevelid { get; set; }
        public string Clevelcode { get; set; }
        public string Caccessgroup { get; set; }
        public bool? Lactive { get; set; }
        public DateTime? Dcreated { get; set; }
        public DateTime? Dmodified { get; set; }
        public string Cesignature { get; set; }
        public bool? Lvendorlisting { get; set; }
        public int? Ncreatedby { get; set; }
        public int? Nmodifiedby { get; set; }
        public bool? Lfirsttimelogin { get; set; }
        public short? Nvendorselectoption { get; set; }
        public bool? Lapproveinsidetimecard { get; set; }
        public int? Napprovalmethod { get; set; }
        public bool? Lchangeapproval { get; set; }
        public bool? Lhidevendornamehiringproccess { get; set; }
        public bool? Lblockemailfromvendor { get; set; }
        public bool? Lhidebillrate { get; set; }
        public bool? Lhidepayrate { get; set; }
        public bool? Ldisablebillrate { get; set; }
        public bool? Ldisablepayrate { get; set; }
        public DateTime? Dlastpasswordupdate { get; set; }
        public bool? Lhideassgbill { get; set; }
        public bool? Lhideassgpay { get; set; }
        public bool? Lhideassginclusive { get; set; }
        public bool? Lhidejobestimate { get; set; }
        public bool? Lhidemarkup { get; set; }
        public bool? Ldisablemarkup { get; set; }
        public bool? Lpopupmessage { get; set; }
        public bool? Lbillcontact { get; set; }
        public int? Nbillcontactid { get; set; }
        public bool? Lselfregister { get; set; }
        public bool? Lemailperschedule { get; set; }
        public DateTime? Dgetemail1 { get; set; }
        public DateTime? Dgetemail2 { get; set; }
        public DateTime? Dgetemail3 { get; set; }
        public bool? Lreportbasedonhirearchy { get; set; }
        public int? Nhierarchyreporttoid { get; set; }
        public string Corganizationcode { get; set; }
        public bool? Ldenytimecardaprroval { get; set; }
        public bool? Ldisablespecialbill { get; set; }
        public bool? Ldisableworkdaysrequest { get; set; }
        public bool? Lenableskilljobtitlesearch { get; set; }
        public bool? Ldisableassignmentextension { get; set; }
        public bool? Ldisableassignmentratechange { get; set; }
        public bool? Lnotallowcreatejob { get; set; }
        public bool? Lreportscheduling { get; set; }
        public DateTime? Daccepttermsconditions { get; set; }
        public bool? Ldisabledirectsend { get; set; }
        public bool? Llocked { get; set; }
        public bool? Lclientadmin { get; set; }
        public bool? Lworklocationcode { get; set; }
        public string Csbstring { get; set; }
        public bool? Lblocksystememail { get; set; }
        public bool? Lallowzerobillreq { get; set; }
        public bool? Lshowassignmentudf { get; set; }
        public bool? Lnotallowmodifytimecard { get; set; }
        public bool? Lnotallowmodifyexpense { get; set; }
        public bool? Ldisablemodifytcproxy { get; set; }
        public bool? Ldisablemodifyjobproxy { get; set; }
        public bool? Ldisablemodifyassignmentproxy { get; set; }
        public bool? Lhideresubmitorder { get; set; }
        public bool? Lhidereplacement { get; set; }
        public bool? Lsso { get; set; }
        public bool? Lopenbidadmin { get; set; }
        public bool? Lhideduplicatejob { get; set; }
        public bool? Ldisableprojectdirectengage { get; set; }
        public bool? Ldisablemodifysbprofile { get; set; }
        public bool? Lshowjobtitleadvancesearch { get; set; }
        public bool? Lhidejobexempt { get; set; }
        public int? Ndefaultlanguageid { get; set; }
        public bool? Lallowmodifyjobinfo { get; set; }
        public int? Ndefaulttimezoneid { get; set; }
        public bool? Lnotallowtcapproval { get; set; }
        public bool? Lonepagereqcreation { get; set; }
        public bool? Lreqapprovalbymobile { get; set; }
        public bool? Lcontractadditionaluser { get; set; }
        public bool? Lshowclassificationrecommendation { get; set; }
        public string Cssouserid { get; set; }
        public bool? Ldisplayallvendorlocation { get; set; }
        public bool? Lenablecreateproject { get; set; }
        public bool? Lenablecreatesow { get; set; }
        public short? NvendorselectoptionProject { get; set; }
        public bool? LdisplayallvendorlocationProject { get; set; }
        public bool? Lonepagereqcreationnobill { get; set; }
        public int? Ntimecardapprovaltype { get; set; }
        public bool? LchangeapprovalProject { get; set; }
        public bool? Lhidejobexpense { get; set; }
        public bool? Lhidejobadditionaltimecardspend { get; set; }
        public bool? Lhideassgexpense { get; set; }
        public bool? Lhideassgadditionaltimecardspend { get; set; }
        public bool? Lhideassgestimate { get; set; }
        public DateTime? Dlasttimelogin { get; set; }
        public string Cpasswordtype { get; set; }
        public DateTime? Dlocked { get; set; }
        public int? Npasswordattempt { get; set; }
        public byte[] Cpassword { get; set; }
        public byte[] Coldpassword1 { get; set; }
        public byte[] Coldpassword2 { get; set; }
        public byte[] Coldpassword3 { get; set; }
        public byte[] Coldpassword4 { get; set; }
        public byte[] Coldpassword5 { get; set; }
        public bool? Lhidenegotiaterate { get; set; }
        public bool? Liccapprovaluser { get; set; }
        public bool? LshowclassificationrecommendationNonbill { get; set; }
        public bool? LshowclassificationrecommendationSow { get; set; }
        public bool? LshowclassificationrecommendationProject { get; set; }
        public int? Nmodifiedbywho { get; set; }
        public int? Ncreatedbywho { get; set; }

        public Clientlocation Nclientlocation { get; set; }
        public Globaltimezone Ndefaulttimezone { get; set; }
        public ChartClientUserWidgetPipeline ChartClientUserWidgetPipeline { get; set; }
        public ICollection<Assignment> Assignment { get; set; }
        public ICollection<ClientAvailableSlot> ClientAvailableSlot { get; set; }
        public ICollection<Clientapprovallevel> Clientapprovallevel { get; set; }
        public ICollection<Clientproxyapprover> ClientproxyapproverNproxyapproverNavigation { get; set; }
        public ICollection<Clientproxyapprover> ClientproxyapproverNproxyoriginalNavigation { get; set; }
        public ICollection<Clientusercommandchain> Clientusercommandchain { get; set; }
        public ICollection<Clientuserdualapprover> Clientuserdualapprover { get; set; }
        public ICollection<Clientusergroup> Clientusergroup { get; set; }
        public ICollection<Clientusermodule> Clientusermodule { get; set; }
        public ICollection<Clientuserreport> Clientuserreport { get; set; }
        public ICollection<Clientuserreporthierarchy> ClientuserreporthierarchyNclientuser { get; set; }
        public ICollection<Clientuserreporthierarchy> ClientuserreporthierarchyNhierarchyreportto { get; set; }
        public ICollection<Clientuserreqlocation> Clientuserreqlocation { get; set; }
        public ICollection<Clientusersbcode> Clientusersbcode { get; set; }
        public ICollection<DraftJobRequest> DraftJobRequest { get; set; }
        public ICollection<DraftSowProject> DraftSowProject { get; set; }
        public ICollection<Jobapprovals> Jobapprovals { get; set; }
        public ICollection<Jobrequest> JobrequestNcreatedbyNavigation { get; set; }
        public ICollection<Jobrequest> JobrequestNproxyuserNavigation { get; set; }
        public ICollection<Jobrequest> JobrequestNreportto { get; set; }
        public ICollection<Jobrequest> JobrequestNreporttoid2Navigation { get; set; }
        public ICollection<Jobrequest> JobrequestNrequestorNavigation { get; set; }
        public ICollection<Jobrequestmessages> Jobrequestmessages { get; set; }
        public ICollection<Reportfavorits> Reportfavorits { get; set; }
        public ICollection<UserSearchCriteria> UserSearchCriteria { get; set; }
    }
}
