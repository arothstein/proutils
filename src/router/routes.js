const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/Index.vue") },
      {
        path: "/ip-subnet-calculator",
        component: () => import("../pages/IpSubnetCalcPage.vue")
      },
      {
        path: "/passphrase-generator",
        component: () => import("../pages/PassphraseGeneratorPage.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("../pages/Error404.vue")
  }
];

export default routes;
