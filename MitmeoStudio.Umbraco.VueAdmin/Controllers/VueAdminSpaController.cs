using Newtonsoft.Json.Linq;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
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

        public FileResult ExportUmbraco()
        {
            var json = new JObject();
            json.Add("URL", JToken.Parse($"\"{GetHostAddress()}\""));
            foreach(var key in Request.Cookies.AllKeys)
            {
                if (key.StartsWith("UMB"))
                {
                    json.Add(key, JToken.Parse($"\"{Request.Cookies[key].Value}\""));
                }
            }

            var byteArray = Encoding.ASCII.GetBytes(json.ToString());
            var stream = new MemoryStream(byteArray);
            return File(stream, "text/plain", "umbraco.json");
        }

        private string GetHostAddress()
        {
            var host = Request.Url.Host;
            if (host == "localhost")
            {
                var ip = Dns.GetHostEntry(Dns.GetHostName()).AddressList
                    .Select(x => x.ToString())
                    .FirstOrDefault(x => x.Count(c => c == '.') == 3);
                host = ip;
            }
            var url = $"{Request.Url.Scheme}://{host}";

            if (Request.Url.Port != 80)
            {
                url += $":{Request.Url.Port}";
            }

            return url;
        }
    }
}
