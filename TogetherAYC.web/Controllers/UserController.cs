using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TogetherAYC.data;

namespace TogetherAYC.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly string _connectionString;

        public UserController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        private User GetCurrentUser()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return null;
            }

            var repo = new GuestRepository(_connectionString);
            return repo.GetByEmail(User.Identity.Name);
        }
        [HttpPost]
        [Route("logout")]
        public void logout()
        {
            HttpContext.SignOutAsync().Wait();
        }
        [HttpPost]
        [Route("Donate")]
        public void Donate(Donation donation)
        {
            var user = GetCurrentUser();
            donation.UserId = user.Id;
            var repo = new UserRepository(_connectionString);
            repo.Donate(donation);
        }
        [HttpGet]
        [Route("mydonations")]
        public List<Donation> MyDonations()
        {
            var user = GetCurrentUser();
            var UserRepo = new UserRepository(_connectionString);
            return UserRepo.GetDonationsById(user.Id);
        }
    }
}
