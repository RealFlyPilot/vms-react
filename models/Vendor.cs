using System;
using System.Collections.Generic;

namespace VmsModels.Models
{
    public partial class Vendor
    {
        public Vendor()
        {
            VendorDesc = new HashSet<VendorDesc>();
            Vendorlocation = new HashSet<Vendorlocation>();
        }

        public int Nvendorid { get; set; }
        public string Cvendoraddress { get; set; }
        public string Cvendorcity { get; set; }
        public string Cvendorstate { get; set; }
        public string Cvendorzipcode { get; set; }
        public string Cvendorcountry { get; set; }
        public string Cvendortel { get; set; }
        public string Cvendorfax { get; set; }
        public string Cvendorttdnumber { get; set; }
        public string Cvendorcontact { get; set; }
        public string Cvendoremail { get; set; }
        public string Cvendorurl { get; set; }
        public DateTime? Dcreated { get; set; }
        public DateTime? Dmodified { get; set; }
        public bool? Lactive { get; set; }
        public int? Nmodifiedby { get; set; }
        public int? Ncreatedby { get; set; }
        public bool? Ldiversitysupplier { get; set; }
        public bool? Ldiversityhubzone { get; set; }
        public string Cdiversitycertstate { get; set; }
        public string Cdiversitygender { get; set; }
        public string Cdiversitybusinessclass { get; set; }
        public string Cdiversitysubclass { get; set; }
        public bool? Ldiversitycertified { get; set; }
        public string Cdiversitycertagency { get; set; }
        public string Cdiversitycertagencyother { get; set; }
        public DateTime? Ddiversitycertified { get; set; }
        public DateTime? Ddiversityexpiration { get; set; }
        public string Cdiversitysuppliercontact { get; set; }
        public string Cdiversitysupplierphone { get; set; }
        public string Cdiversitysupplieremail { get; set; }
        public string Cdiversityvmscontact { get; set; }
        public string Cdiversityvmsphone { get; set; }
        public string Cdiversityvmsemail { get; set; }
        public DateTime? Dstarttenurediscount { get; set; }

        public ICollection<VendorDesc> VendorDesc { get; set; }
        public ICollection<Vendorlocation> Vendorlocation { get; set; }
    }
}
