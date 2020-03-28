<template>
  <div class="main">
    <SongCard v-for="song of songs" :key="song.id" id v-bind:song="song" />

    <div v-if="!songs.length">
      <p>
        Uh-oh!
        <br />You don't have any favorites yet.
        <br />Try adding some when you go
        <em>
          <router-link to="/explore">explore!</router-link>
        </em>
      </p>
    </div>
  </div>
</template>

<script>
import SongCard from "@/components/SongCard";
export default {
  name: "YourFavorites",
  components: {
    SongCard
  },
    watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Nemic | Your Favorites";
      }
    }
  },
  data: function() {
    return {
      songs: JSON.parse(localStorage.getItem("favoritedSongs"))
    };
  }
};
</script>
<style scoped lang="scss">
p {
  color: white;
  font-family: "Lucida Console";
  margin-block-start: 0;
  margin-block-end: 0;
}

em {
  color:rgb(235, 64, 52);
  border-bottom: 1px solid rgb(235, 64, 52);
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgb(207, 89, 89);;
  }

  40% {
    transform: scale(1);
    box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(78, 251, 174, 0);
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.main {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1em;
}

/* Headers */
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 0.2rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
/* Footer */
.sub-header {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  padding-bottom: 0.2rem;
}

.no-songs-found {
  margin-top: 2em;
  font-family: "Lucida Sans Unicode";
  color: rgb(235, 64, 52);
  font-size: 28px;
}

/*  Background */
.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Card */
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Smaller screens */
@media only screen and (min-device-width: 320px) {
  .card {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;

    margin-bottom: 2em;
    margin-right: 2em;
    margin-left: 2em;

    min-height: 10em;
    max-height: 20em;
    height: 10em;

    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.25);
    transition: height 0.5s ease-in-out;
  }
  .card:hover {
    height: 15em;
    animation: pulse 2s infinite;
  }
}

/* Tablets */
@media only screen and (min-device-width: 768px) {
  .card {
    display: flex;
    flex-direction: column;
    flex-basis: 45%;

    margin-bottom: 2em;
    margin-right: 2.5%;
    margin-left: 2.5%;

    min-height: 10em;
    max-height: 25em;
    height: 15em;

    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.25);
    transition: height 0.5s ease-in-out;
  }
  .card:hover {
    height: 20em;
    animation: pulse 2s infinite;
    /* We need this for the absolutely-positioned pseudo */
    position: relative;

    .card::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      bottom: 2em;
      top: 2em;
      z-index: -1;
    }
  }
}

/* Bigger screens */
@media screen and (min-width: 1024px) {
  .card {
    display: flex;
    flex-direction: column;
    flex-basis: 45%;

    margin-bottom: 2em;
    margin-right: 2.5%;
    margin-left: 2.5%;

    min-height: 5em;
    max-height: 30em;
    height: 25em;

    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.25);
    transition: height 1s ease-in-out;
    animation: fadein 1.5s;
  }

  .card:hover {
    height: 30em;
    animation: pulse 2s infinite;
    /* We need this for the absolutely-positioned pseudo */
    position: relative;

    .card::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      bottom: 2em;
      top: 2em;
      z-index: -1;
    }
  }
}
</style>
