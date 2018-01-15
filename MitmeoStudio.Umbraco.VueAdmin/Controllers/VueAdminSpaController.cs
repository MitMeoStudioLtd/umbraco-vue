using System.IO;
using System.Web.Mvc;

namespace MitmeoStudio.Umbraco.VueAdmin.Controllers
{
    public class VueAdminSpaController : Controller
    {
        public ActionResult Index()
        {

            var projectPath = new DirectoryInfo(Server.MapPath("~"));
            var indexPath = Path.Combine(projectPath.FullName, "App_Plugins", "VueAdmin", "index.html");


            if (System.IO.File.Exists(indexPath))
            {
                return Content(System.IO.File.ReadAllText(indexPath));
            }
            else
            {
                return Content($"Could not find the template {indexPath}");
            }
        }
    }
}
