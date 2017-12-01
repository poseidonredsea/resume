using System.Web.Optimization;

namespace Website
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            BundleTable.EnableOptimizations = true;
            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                        "~/Scripts/lib/jquery-{version}.js",
                        "~/Scripts/lib/bootstrap.min.js",
                        "~/Scripts/lib/wow.min.js",
                        "~/Scripts/lib/respond.min.js"
                        ));
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                       "~/Scripts/app/App.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/lib/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/lib/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                         "~/Content/bootstrap.min.css",
                         "~/Content/animate.min.css",
                         "~/Content/site.min.css"));
        }
    }
}
