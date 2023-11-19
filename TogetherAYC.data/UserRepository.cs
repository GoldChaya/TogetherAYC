using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TogetherAYC.data
{
    public class UserRepository
    {
        private readonly string _connectionString;

        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void Donate(Donation donation)
        {
            using var context = new TogetherContext(_connectionString);
            context.Donations.Add(donation);
            context.SaveChanges();
        }
        public List<Donation> GetDonationsById(int userId)
        {
            using var context = new TogetherContext(_connectionString);
            return context.Donations.Where(b => b.UserId == userId).ToList();
        }
    }
}
