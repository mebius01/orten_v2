export default function ({ store, redirect, route, app }) {
  const locale = app.i18n.locale;
  const shopPageSlash = /^\/shop\/((?:[^\/]+?))(?:\/(?=$))?$/i;
  const adminPage = route.path === "/admin";
  const shop =
    route.path === `/shop/` ||
    route.path === `/${locale}/shop/` ||
    route.path === `/${locale}/shop`;
  route.path === `/product/` || route.path === `/${locale}/product/`;

  if (shop) {
    return redirect(`/${locale}/product`);
  }
  if (shopPageSlash.test(route.path)) {
    const path = route.path.split("/");
    return redirect(`/${locale}/product/${path.slice(-2, -1)[0]}`);
  }

  if (adminPage) {
    return redirect(`/${locale}/admin`);
  }
  // console.log(route);

  if (route.path === `/${locale}/product` || route.path === `/${locale}/service`) {
    store.dispatch("commodity/SEND_MIN", route.query.min_price);
    store.dispatch("commodity/SEND_MAX", route.query.max_price);
    store.dispatch("commodity/SEND_FORMAT", route.query.format_fild);
    store.dispatch("commodity/SEND_COLOR", route.query.color_fild);
    store.dispatch("commodity/SEND_SEARCH", route.query.search);
    store.dispatch("commodity/SEND_AVA", route.query.available);
    store.dispatch("commodity/SEND_PAGE", route.query.page);
    store.dispatch("commodity/SEND_CATEGORY", route.query.category);
    // store.dispatch("commodity/SEND_DATA");
  }
}
