export default function ({ store, redirect, route, app }) {
  const locale = app.i18n.locale;
  const shopPage = /^\/shop\/((?:[^\/]+?))(?:\/(?=$))?$/i;
  const adminPage = route.path === "/admin";
  if (shopPage.test(route.path)) {
    const path = route.path.split("/");
    return redirect("/product/" + path.slice(-1)[0]);
  }
  if (adminPage) {
    return redirect(`/${locale}/admin`);
  }
}
