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
            RouteTable.Routes.MapRoute(
                name: "VueAdminRoute",
                url: "App_Plugins/VueAdmin",
                defaults: new
                {
                    controller = "VueAdminSpa",
                    action = "Index"
                },
                namespaces: new string[] { "MitmeoStudio.Umbraco.VueAdmin.Controllers" }
            );
        }
    }
}
