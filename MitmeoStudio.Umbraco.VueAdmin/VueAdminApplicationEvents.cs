using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Routing;
using Umbraco.Core;

namespace MitmeoStudio.Umbraco.VueAdmin
{
    public class VueAdminApplicationEvents : IApplicationEventHandler
    {
        public void OnApplicationInitialized(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext) { }
        public void OnApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext) { }

        public void OnApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            //TODO: This the origins from web.config
            //For dev, enable CORS
            var corsAttr = new EnableCorsAttribute("http://localhost:4000", "*", "*")
            {
                SupportsCredentials = true
            };

            GlobalConfiguration.Configuration.EnableCors(corsAttr);

            RouteTable.Routes.MapRoute(
                name: "VueAdminSpaRoute",
                url: "App_Plugins/VueAdmin/app",
                defaults: new
                {
                    controller = "VueAdminSpa",
                    action = "Index"
                },
                namespaces: new string[] { "MitmeoStudio.Umbraco.VueAdmin.Controllers" }
            );

            RouteTable.Routes.MapRoute(
                name: "VueAdminActionsRoute",
                url: "VueAdmin/{action}",
                defaults: new
                {
                    controller = "VueAdminSpa"
                },
                namespaces: new string[] { "MitmeoStudio.Umbraco.VueAdmin.Controllers" }
            );

            GlobalConfiguration.Configuration.EnsureInitialized();
        }
    }
}
