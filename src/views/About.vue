<template>
  <div class="about">
    <img src="@/assets/Logo_Nemic/Logo_Nemic-39.png" style="height: 10em; margin-top: 1em;" />
    <h1>
      <span class="nemic">Nemic</span> enables you to explore Deezer
    </h1>
    <!-- <hr /> -->
    <p>
      Search
      <em>
        <a href="https://www.deezer.com/" target="_blank">Deezer</a>
      </em>, listen to the song-previews and save
      <em @click="scrollToBottom">
        <router-link to="/your-favorites">Your Favorites</router-link>
      </em>.
      <br />While you're at it, take a look at
      <em @click="scrollToBottom">
        <router-link to="/our-favorites">Our Favorites</router-link>
      </em> too.
    </p>
    <!-- <hr /> -->
    <p>
      This is an Open-Source Application.
      <br />The code can be found
      <em>
        <a href="https://github.com/Nergy101/nemic">here</a>
      </em>
    </p>
  </div>
</template>
<style lang="scss" scoped>
h1,
h2,
p {
  color: white;
  font-family: "Lucida Console";
}
em {
  border-bottom: 1px solid var(--nemic-color);
}

.nemic {
  color: var(--nemic-color);
}

.router-link-exact-active {
  color: var(--nemic-color);
}

.about {
  background-color: inherit;
  margin-bottom: 80vh;
}
</style>
<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Nemic | About";
      }
    }
  },
  methods: {
    scrollToBottom: function() {
      var elmnt = document.getElementById("nav");
      elmnt.scrollIntoView(true);
    }
  }
};
</script>
