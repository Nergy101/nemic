<template>
  <div id="app">
    <div class="welcome">
      <h1>Listen at Nemic</h1>
    </div>
    <div class="nav">
      <div class="nav-item explore">
        <router-link to="/explore">Explore</router-link>
      </div>
      <div class="nav-item our-favorites">
        <router-link to="/our-favorites">Our Favorites</router-link>
      </div>
      <div class="nav-item your-favorites">
        <router-link to="/your-favorites">Your Favorites</router-link>
      </div>
      <div class="nav-item about">
        <router-link to="/about">About Nemic</router-link>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/our-favorites">Our Favorites</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: rgb(20, 20, 30);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: inherit;
}

.welcome {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://www.jakpost.travel/wimages/large/8-88366_vinyl-music-background-hd.png);
  font-family: "Lucida Sans Unicode";
  color: rgb(235, 64, 52);

  display: flex;
  justify-content: flex-start;
  font-size: 26px;
  border-bottom: 1px solid rgb(1, 1, 1, 0.5);
  padding: 1em;
}

.nav {
  font-family: "Lucida Sans Unicode";
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  background-color: rgb(1, 1, 1, 0.2);
  color: white;
  align-items: center;
}

.nav-item {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1em;
  padding-right: 1em;
  border-right: 1px solid rgb(1, 1, 1, 0.5);
  transition: background-color 0.3s ease-in;
}

.router-link-exact-active {
  border-bottom: 1px solid rgb(235, 64, 52);
}

.nav-item:hover {
  color: black;
}

.explore:hover {
  background-color: rgb(89, 207, 207);
}

.your-favorites:hover {
  background-color: rgb(207, 89, 89);
}

.our-favorites:hover {
  background-color: rgb(89, 207, 134);
}

.about:hover {
  background-color: rgb(89, 106, 207);
}

.nav-item:last-of-type {
  /* border-right: none; */
  border-right: 1px solid rgb(1, 1, 1, 0.5);
}

.nav-item:first-of-type {
  /* border-right: none; */
  border-left: 1px solid rgb(1, 1, 1, 0.5);
}
</style>
