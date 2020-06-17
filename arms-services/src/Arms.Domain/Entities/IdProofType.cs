<<<<<<< HEAD
﻿using Hrms.Core.Domains.Entities;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace Arms.Domain.Entities
{
    public class IdProofType:Entity
    {
        public int Id { get; set; }
        public string Code { get; set; }

        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }      
        public string ModifiedBy { get; set; }
    }
}
=======
﻿using System;
using System.Collections.Generic;
using Hrms.Core.Domains.Entities;

namespace Arms.Domain.Entities
{
    public partial class IdProofType : Entity
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string ModifiedBy { get; set; }

        
    }
}

        
>>>>>>> 3cf9cb49801a41b097d786510f638d824d5f88fb
