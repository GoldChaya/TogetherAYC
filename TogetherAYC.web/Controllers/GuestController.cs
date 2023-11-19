using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TogetherAYC.data;
using TogetherAYC.web.ViewModels;

namespace TogetherAYC.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private readonly string _connectionString;
        public GuestController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Constr");
        }
        [HttpPost]
        [Route("Signup")]
        public void Signup(SignupViewModel user)
        {
            var repo = new GuestRepository(_connectionString);
            repo.AddUser(user, user.Password);
        }
        [HttpPost]
        [Route("login")]
        public User Login(LoginViewModel loginViewModel)
        {
            var repo = new GuestRepository(_connectionString);
            var user = repo.Login(loginViewModel.Email, loginViewModel.Password);
            if (user == null)
            {
                return null;
            }
            var claims = new List<Claim>
            { new Claim("user", loginViewModel.Email )
            };
            HttpContext.SignInAsync(new ClaimsPrincipal(
                new ClaimsIdentity(claims, "Cookies", "user", "role"))).Wait();

            return user;
        }
        [HttpGet]
        [Route("getcurrentuser")]
        public User GetCurrentUser()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return null;
            }

            var repo = new GuestRepository(_connectionString);
            return repo.GetByEmail(User.Identity.Name);
        }
    }
}
