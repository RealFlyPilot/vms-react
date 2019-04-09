﻿// Jobrequest()
        Nrequestid int 
         Nclientlocationid int?
         Njobtitlecode int?
        Cjobtitlecode string 
        Cjobreqstatus string 
        Cjobtype string 
        Cemptype string 
         Nfill int?
        Creasoncode string 
        Creasoncomment string 
        Cpriority string 
         Dreqdate DateTime?
         Nrequestor int?
         Nproxyuser int?
        Cfwdresumeid string 
         Dstart DateTime?
         Dend DateTime?
        Cendflag string 
        Cenddesc string 
        Cpaytype string 
         Nhrsperwk decimal?
         Nhrpayratehour decimal?
         Nhrpayratehourmax decimal?
         Nhrbillratehour decimal?
         Nhrbillratehourmax decimal?
        Cpaycurrency string 
        Cpayperiodtype string 
         Nhrpayrateday decimal?
        Cpaybonus string 
        Cpaybonusfreq string 
        Cpaybonusrange string 
         Npayrelocation decimal?
        Cpayexpexc string 
        CbenifitdescP string 
        CbenifitdescUl string 
        CbenifitdescQualif string 
        Cpaysummary string 
        CqualifreqP string 
        CqualifreqUl string 
        CqualifreqQualif string 
        CqualifprefP string 
        CqualifprefUl string 
        CqualifprefQualif string 
         Ntrialperioddays int?
        Cworkeligibilitystatus string 
         Dstarttime DateTime?
         Dendtime DateTime?
         Nlunchbreak decimal?
         Nreporttoid int?
         Nreportlocationid int?
        Creportphone string 
        Creportphoneext string 
        Creportdepartment string 
         Lneedresume bool?
         Dresumedue DateTime?
         Nresumerequired int?
         Lneedsubmital bool?
         Dsubmitaldue DateTime?
         Lneedinterview bool?
         Dinterviewdue DateTime?
         Lneedbackground bool?
         Lneeddrugtest bool?
         Lneedtravel bool?
        Ctravelpercent string 
        Ctravelsummary string 
         Lneeddresscode bool?
         Lneedcreditcheck bool?
         Lneeddmvcheck bool?
         Lneedovertime bool?
         Lexempt bool?
         Lnonexempt bool?
        Cworklocaddress1 string 
        Cworklocaddress2 string 
        Cworkloccity string 
        Cworklocstate string 
        Cworkloczipcode string 
        Cworkloccountry string 
         Nclientpaypolicyid int?
        Ccomments string 
         Linternalreq bool?
         Lvenodrmanagment bool?
         Ldraftrequest bool?
         Lactive bool?
        Chireorgtype string 
        Cclassification string 
        Cdistribute string 
         Ldirecthire bool?
         Lcontract bool?
         Ltemp bool?
         Ltemptoperm bool?
        Csummary string 
         Lworkday1 bool?
         Lworkday2 bool?
         Lworkday3 bool?
         Lworkday4 bool?
         Lworkday5 bool?
         Lworkday6 bool?
         Lworkday7 bool?
         Ntotalreghours decimal?
         Nfulltimehoursweek decimal?
        Cshiftdiff string 
        Ctemplenght string 
        Ctempsummary string 
        Covertimesummary string 
        CessfunctionP string 
        CessfunctionUi string 
        CessfunctionQualif string 
        CworkenvP string 
        CworkenvUi string 
        CworkenvQualif string 
        Chowtoapply string 
        Chowtoapplyinfo string 
        Chowtoapplysummary string 
         Nlinkedjobrequestid int?
         Nestimatedcost decimal?
         Ncreatedby int?
        Cpreferredemployee string 
         Nmarkup decimal?
         Nexpense decimal?
        Cexpensecomment string 
         Ninitailbalance decimal?
         Nremainbalance decimal?
         Nspentamount decimal?
         Nbuyingmanagerid int?
         LDner bool?
         LDnem bool?
         Ninclusivebill decimal?
        Capprovalcomment string 
        Crequestsource string 
         Napprovalneed int?
         Nprojectdefid int?
        Cprojectname string 
        Creviewfrequency string 
         Npreferbillrate decimal?
        Cworklocationname string 
         Dapproved DateTime?
        Cclientrefnumber string 
         Limplementation bool?
         Lshiftpremium bool?
         Lopenbidjob bool?
        Creasoncodeother string 
         Djobrelease DateTime?
         Nothrsperwk decimal?
         Ndthrsperwk decimal?
         Nmarketrate decimal?
         Nreqoriginalrate decimal?
         Ldeliverablebasedproject bool?
         Lonhold bool?
         Nawrpayrate decimal?
         Nsowid int?
         Nreporttoid2 int?
         Dopenbidjob DateTime?
         Lpunchoutassignment bool?
         Lpunchoutjob bool?
         Nprevailingpayrate decimal?
         Lenableprevailingpayrate bool?
         Lproposalaccepted bool?
         Npaymenttermid int?
         Lnonbillworkerservice bool?
         Nadditionaltimecardspend decimal?
         Ntotalestimatedcost decimal?
        Cprojectbilltype string 
        Cprojectsourcetype string 
         Nparentjobid int?
        Cduplicatedstatus string 
         DendFlexibilityearly DateTime?
         DendFlexibilitylate DateTime?
         Nsalary decimal?
         Dsubmitted DateTime?
         Lpayrollservice bool?
         Lbypassproposalacceptreject bool?
        Csource string 
        WorkLocComments string 
         SourcingFlag int?
         SecondHrBillRateHour decimal?
         SecondHrBillRateHourMax decimal?
         ThirdHrBillRateHour decimal?
         ThirdHrBillRateHourMax decimal?
         MinEstimatedCost decimal?
         MinTotalEstimatedCost decimal?
         NewScheduleFlag bool?
         InterviewDuration int?
         LocationApproveFlag bool?
         SecondHrPayRateHour decimal?
         SecondHrPayRateHourMax decimal?
         ThirdHrPayRateHour decimal?
         ThirdHrPayRateHourMax decimal?
         SecondOtHrPerWk decimal?
         SecondDtHrPerWk decimal?
         ThirdOtHrPerWk decimal?
         ThirdDtHrPerWk decimal?



// Jobscreening
         Nrequestscreeningid int 
          Nrequestid int?
          Nscreeningid int?
         Ccomments string 
          Lrequired bool?
          Lselected bool?
          Lrequirebeforesubmit bool?
          Lrequireattachment bool?
          Lrequirereferenceid bool?
          Nmodifiedbywho int?
          Nmodifiedby int?
          Dmodified DateTime?
          Ncreatedbywho int?
          Ncreatedby int?
          Dcreated DateTime?
          AuditBeforeStart bool?

   


// Job Posting Client Partner (partial class Jobpostingclientpartner)
        Njobpostingclientpartnerid int 
        Nrequestid int 
        Nclientpartnerid int 
        Cjobpostingstatus string 
        bool Lactive 
         Nmodifiedby int?
         Dmodified DateTime?
         Ncreatedby int?
         Dcreated DateTime?
         Dactivation DateTime?
         Dexpiration DateTime?
         Lupdated bool?
         Dupdated DateTime?
         Ldeleted bool?
         Ddeleted DateTime?
         Ntried int?
