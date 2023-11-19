using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TogetherAYC.data
{
    public class Donation
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Merit { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public User User { get; set; }

    }
}
