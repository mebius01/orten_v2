export default function ({ store, redirect, route, app }) {
  const locale = app.i18n.locale;
  const shopPageSlash = /^\/shop\/((?:[^\/]+?))(?:\/(?=$))?$/i;
  const shopPageNoSlash = /^\/shop\/((?:[^\/]+?))(?:\/(?=$))?$/i;
  const adminPage = route.path === "/admin";
  const shop = route.path === "/shop";
  if (shop) {
    return redirect(`/product`);
  }
  if (shopPageSlash.test(route.path)) {
    const path = route.path.split("/");
    // console.log(path.slice(-2, -1)[0]);
    return redirect("/product/" + path.slice(-2, -1)[0]);
  }
  // if (shopPageNoSlash.test(route.path)) {
  //   const path = route.path.split("/");
  //   return redirect("/product/" + path.slice(-1)[0]);
  // }
  if (adminPage) {
    return redirect(`/${locale}/admin`);
  }
}
