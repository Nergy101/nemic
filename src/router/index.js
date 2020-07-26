import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/explore",
    name: "Explore",
    title: 'Explore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Explore.vue")
  },
  {
    path: "/our-favorites",
    name: "OurFavorites",
    title: 'Our Favorites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OurFavorites.vue")
  },
  {
    path: "/your-playlists",
    name: "YourPlaylists",
    title: 'Your Playlists',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/YourPlaylists.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    redirect: { name: 'Explore' }
  },
  {
    path: "*",
    redirect: { name: 'Explore' }
  },
  {
  path: "/index.html",
  redirect: { name: 'Explore' }
}
];

const router = new VueRouter({
  //base: '/nemic',
  // mode: 'history',
  routes
});

export default router;
