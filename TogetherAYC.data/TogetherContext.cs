using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TogetherAYC.data
{
    public class TogetherContext :DbContext
    {
        private readonly string _connectionString;

        public TogetherContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Donation> Donations { get; set; }
    }
}
