
//  Client - Client-Table.csv

            Adminuser = new HashSet<Adminuser>();
            Billingadminuser = new HashSet<Billingadminuser>();
            ClientDesc = new HashSet<ClientDesc>();
            Clientlocation = new HashSet<Clientlocation>();
            Clientpaycode = new HashSet<Clientpaycode>();
            Clientpaypolicy = new HashSet<Clientpaypolicy>();
            Invoicemap = new HashSet<Invoicemap>();
            Ratehierarchy = new HashSet<Ratehierarchy>();
            Userlevel = new HashSet<Userlevel>();
        }

        public int Nclientid { get; set; }
        public string Caddress { get; set; }
        public string Caddress2 { get; set; }
        public string Ccity { get; set; }
        public string Cstate { get; set; }
        public string Czipcode { get; set; }
        public string Ccountry { get; set; }
        public string Ctel { get; set; }
        public string Ctel2 { get; set; }
        public string Cfax { get; set; }
        public string Cfax2 { get; set; }
        public string Ccontact { get; set; }
        public string Cemail { get; set; }
        public string Curl { get; set; }
        public DateTime? Dcreated { get; set; }
        public DateTime? Dmodified { get; set; }
        public bool? Lactive { get; set; }
        public string Caccountno { get; set; }
        public string Cgroupno { get; set; }
        public bool? Lskillmatch { get; set; }
        public bool? Ltesting { get; set; }
        public bool? Lrefcheck { get; set; }
        public bool? Lresumesubmit { get; set; }
        public bool? Ldrugcheck { get; set; }
        public bool? Lbackcheck { get; set; }
        public string Cdepartment { get; set; }
        public string Clocation { get; set; }
        public bool? Lesignature { get; set; }
        public int? Ncreatedby { get; set; }
        public int? Nmodifiedby { get; set; }
        public string Ccontact1place { get; set; }
        public string Ccontact1name { get; set; }
        public string Ccontact1tel { get; set; }
        public string Ccontact1tel2 { get; set; }
        public string Ccontact1email { get; set; }
        public string Ccontact2place { get; set; }
        public string Ccontact2name { get; set; }
        public string Ccontact2tel { get; set; }
        public string Ccontact2tel2 { get; set; }
        public string Ccontact2email { get; set; }
        public string Ccontact3place { get; set; }
        public string Ccontact3name { get; set; }
        public string Ccontact3tel { get; set; }
        public string Ccontact3tel2 { get; set; }
        public string Ccontact3email { get; set; }
        public bool? Lsendagemail { get; set; }
        public string Cagemail { get; set; }
        public bool? Lpasswordrule { get; set; }
        public short? Npasswordchangeperiod { get; set; }
        public bool? Lpopupmessagecontrol { get; set; }
        public decimal? Nagile1discount { get; set; }
        public DateTime? Ddiscountstart { get; set; }
        public DateTime? Ddiscountend { get; set; }
        public bool? Lcalriusinvoice { get; set; }
        public int? Ntimecardentryweek { get; set; }
        public string Cinternalofficenumber { get; set; }
        public bool? Ldisplaytimecardtomanager { get; set; }
        public string Cagile1for { get; set; }
        public string Clink1 { get; set; }
        public string Clink2 { get; set; }
        public bool? Lneedbilltocontact { get; set; }
        public decimal? NearlypaydiscountMarkfordelete { get; set; }
        public bool? Ldeductmngfeefromvendor { get; set; }
        public bool? Lsendassgendemail15and30 { get; set; }
        public string Cmailsendfrom { get; set; }
        public bool? Lprojectwork { get; set; }
        public bool? Lapplicantreturnpolicy { get; set; }
        public int? Napplicantreturnpolicy { get; set; }
        public bool? Lapplicantlookupbyssn { get; set; }
        public int? Ndisableuseraccount { get; set; }
        public bool? Lshowpreferredbillrate { get; set; }
        public bool? Lvalidatedner { get; set; }
        public bool? Lhidevendoracceptjob { get; set; }
        public bool? Lhidevendorrejectjob { get; set; }
        public bool? Ldonotcomparepaybillrate { get; set; }
        public bool? Lallowassignmentdiscount { get; set; }
        public bool? Lmsp { get; set; }
        public string Cspecialbillvalidation { get; set; }
        public string Cspecialbillwebservicevalidationurl { get; set; }
        public string Cspecialbillreturnurl { get; set; }
        public bool? Lprimarytimecardapproval { get; set; }
        public bool? Lworklocationdrivenjob { get; set; }
        public int? Nchargecodevalidation { get; set; }
        public bool? Lallowupdatecatalogitem { get; set; }
        public decimal? Nremainingpercentnotify { get; set; }
        public bool? Lhidejobfulfillmentoption { get; set; }
        public int? Ntenurecumulativehour { get; set; }
        public bool? Lapplicantduplicatesubmittalcheck { get; set; }
        public int? Ntimecardudfsource { get; set; }
        public bool? Lapplyjobtitleadditionalrate { get; set; }
        public bool? Lshowpayrollservicerate { get; set; }
        public bool? Lpopulatesbrelationship { get; set; }
        public int? Nvalidateassignmentscreening { get; set; }
        public int? Ndefaultlanguageid { get; set; }
        public string Cindustrycode { get; set; }
        public DateTime? Dbiweeklybillingenddate { get; set; }
        public int? Ntimecarddualapprovaltype { get; set; }
        public bool? Lenableicc { get; set; }
        public bool? Lupdateassignmentstartdatebytimecardfirstdate { get; set; }
        public string Cpasswordtype { get; set; }
        public int? Ndefaulttimezoneid { get; set; }
        public bool? Lexportenableinadmin { get; set; }
        public bool? Lexportonhold { get; set; }
        public string Cexportonholdby { get; set; }
        public DateTime? Dexportonholdcreated { get; set; }
        public string Cexportonholdcomment { get; set; }

        public ICollection<Adminuser> Adminuser { get; set; }
        public ICollection<Billingadminuser> Billingadminuser { get; set; }
        public ICollection<ClientDesc> ClientDesc { get; set; }
        public ICollection<Clientlocation> Clientlocation { get; set; }
        public ICollection<Clientpaycode> Clientpaycode { get; set; }
        public ICollection<Clientpaypolicy> Clientpaypolicy { get; set; }
        public ICollection<Invoicemap> Invoicemap { get; set; }
        public ICollection<Ratehierarchy> Ratehierarchy { get; set; }
        public ICollection<Userlevel> Userlevel { get; set; }
    }
}
