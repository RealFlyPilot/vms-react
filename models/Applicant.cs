using System;
using System.Collections.Generic;

namespace VmsModels.Models
{
    public partial class Applicant
    {
        public Applicant()
        {
            Applicantdocument = new HashSet<Applicantdocument>();
            Applicantlicense = new HashSet<Applicantlicense>();
            Applicantreference = new HashSet<Applicantreference>();
            Applicantscheduletemplate = new HashSet<Applicantscheduletemplate>();
            Applicantscreening = new HashSet<Applicantscreening>();
            Applicantskill = new HashSet<Applicantskill>();
            Assignment = new HashSet<Assignment>();
            JobSpecifyCandidate = new HashSet<JobSpecifyCandidate>();
            Timecardheader = new HashSet<Timecardheader>();
        }

        public int Napplicantid { get; set; }
        public string Cuserid { get; set; }
        public string Cfname { get; set; }
        public string Cmname { get; set; }
        public string Clname { get; set; }
        public string Caddress { get; set; }
        public string Caddress2 { get; set; }
        public string Ccity { get; set; }
        public string Cstate { get; set; }
        public string Czipcode { get; set; }
        public string Ccountry { get; set; }
        public string Ctel { get; set; }
        public string Cfax { get; set; }
        public string Cpager { get; set; }
        public string Cemail { get; set; }
        public string Cssn { get; set; }
        public string Cgovermentid { get; set; }
        public DateTime? Ddob { get; set; }
        public string Clanguage { get; set; }
        public decimal? Ndesirerateperhour { get; set; }
        public decimal? Ndesirerateperhourmax { get; set; }
        public DateTime? Dcreated { get; set; }
        public DateTime? Dmodified { get; set; }
        public int Nvendorlocationid { get; set; }
        public bool? Lactive { get; set; }
        public string Ccomments { get; set; }
        public int? Nmodifiedby { get; set; }
        public int? Ncreatedby { get; set; }
        public bool? Lfirsttimelogin { get; set; }
        public decimal? Nworkhourhistory { get; set; }
        public string Cemptype { get; set; }
        public DateTime? Dlastpasswordupdate { get; set; }
        public DateTime? D1480reset { get; set; }
        public bool? Lpunchlogin { get; set; }
        public bool? Lisvendorcontact { get; set; }
        public decimal? Ntotalworkmonths { get; set; }
        public decimal? Ntotalworkdays { get; set; }
        public decimal? Ntotalworkhours { get; set; }
        public string Ccellphone { get; set; }
        public string Cemergencycontactname { get; set; }
        public string Cemergencycontacttel { get; set; }
        public string Ccurrency { get; set; }
        public int? Ndefaultlanguageid { get; set; }
        public int? Ndefaulttimezoneid { get; set; }
        public bool? Lformeremployee { get; set; }
        public bool? Lformercontractor { get; set; }
        public string Cidentificationnumber { get; set; }
        public DateTime? Dformeremployeelastdate { get; set; }
        public DateTime? Dformercontractorlastdate { get; set; }
        public bool? Lnossn { get; set; }
        public bool? Lpopupmessage { get; set; }
        public bool? Lupdatesbillingrate { get; set; }
        public bool? LacaEnablebilling { get; set; }
        public DateTime? DacaBenefiteligible { get; set; }
        public bool? LacaBenefiteligible { get; set; }
        public DateTime? DacaBenefiteligibleupdated { get; set; }
        public bool? LacaSendsurveyemail { get; set; }
        public byte[] Cencryptedssn { get; set; }
        public int? Nglobalworkstatusid { get; set; }
        public decimal? NtotalworkhoursReg { get; set; }
        public decimal? NtotalworkhoursOt { get; set; }
        public decimal? NtotalworkhoursDt { get; set; }
        public DateTime? Daccepttermsconditions { get; set; }
        public int? Ncreatedbywho { get; set; }
        public int? Nmodifiedbywho { get; set; }
        public DateTime? Dlasttimelogin { get; set; }
        public string Cssouserid { get; set; }
        public bool? Llocked { get; set; }
        public bool? Lsso { get; set; }
        public int? Nglobalpayincscheduleid { get; set; }
        public DateTime? Dadjustedpayincschedulestartdate { get; set; }
        public string Cpasswordtype { get; set; }
        public DateTime? Dlocked { get; set; }
        public int? Npasswordattempt { get; set; }
        public byte[] Cpassword { get; set; }
        public byte[] Coldpassword1 { get; set; }
        public byte[] Coldpassword2 { get; set; }
        public byte[] Coldpassword3 { get; set; }
        public byte[] Coldpassword4 { get; set; }
        public byte[] Coldpassword5 { get; set; }

        public Vendorlocation Nvendorlocation { get; set; }
        public ICollection<Applicantdocument> Applicantdocument { get; set; }
        public ICollection<Applicantlicense> Applicantlicense { get; set; }
        public ICollection<Applicantreference> Applicantreference { get; set; }
        public ICollection<Applicantscheduletemplate> Applicantscheduletemplate { get; set; }
        public ICollection<Applicantscreening> Applicantscreening { get; set; }
        public ICollection<Applicantskill> Applicantskill { get; set; }
        public ICollection<Assignment> Assignment { get; set; }
        public ICollection<JobSpecifyCandidate> JobSpecifyCandidate { get; set; }
        public ICollection<Timecardheader> Timecardheader { get; set; }
    }
}
