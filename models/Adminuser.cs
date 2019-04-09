using System;
using System.Collections.Generic;

namespace VmsModels.Models
{
    public partial class Adminuser
    {
        public int Nadminuserid { get; set; }
        public int? Nclientid { get; set; }
        public string Cuserid { get; set; }
        public string Cfname { get; set; }
        public string Clname { get; set; }
        public bool Lactive { get; set; }
        public int? Nlevelid { get; set; }
        public int? Nlocationid { get; set; }
        public bool Lfirsttimelogin { get; set; }
        public bool? Lsystemutility { get; set; }
        public bool? Ltimecardadjustment { get; set; }
        public string Cemail { get; set; }
        public DateTime? Dcreated { get; set; }
        public int? Ncreatedby { get; set; }
        public DateTime? Dmodified { get; set; }
        public int? Nmodifiedby { get; set; }
        public DateTime? Dlastpasswordupdate { get; set; }
        public int? Nroleid { get; set; }
        public int? Ndefaulttimezoneid { get; set; }
        public int? Ndefaultlanguageid { get; set; }
        public string Ccomments { get; set; }
        public DateTime? Dlasttimelogin { get; set; }
        public string Cpasswordtype { get; set; }
        public bool? Llocked { get; set; }
        public DateTime? Dlocked { get; set; }
        public int? Npasswordattempt { get; set; }
        public byte[] Cpassword { get; set; }
        public byte[] Coldpassword1 { get; set; }
        public byte[] Coldpassword2 { get; set; }
        public byte[] Coldpassword3 { get; set; }
        public byte[] Coldpassword4 { get; set; }
        public byte[] Coldpassword5 { get; set; }

        public Client Nclient { get; set; }
        public Role Nrole { get; set; }
    }
}
