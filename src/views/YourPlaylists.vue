<template>
  <div class="main">
    <div class="song-list">
      <SongCard v-for="song of songs" :key="song.id" id v-bind:song="song" />
    </div>
    <div class="sidebar">
      <span class="playlist-title"> Playlists</span>
      <ul class="playlist-list">
        <li class="playlist-entry selected" id="favo" @click="selectPlaylist">
          Favorites
        </li>
        <li class="playlist-entry" id="b" @click="selectPlaylist">
          abracadabra
        </li>
        <li class="playlist-entry" id="c" @click="selectPlaylist">
          🤘 metal favorites 🤘
        </li>
        <li class="playlist-entry" id="d" @click="selectPlaylist">
          toepasselijk geruis voor nachtelijke escapades
        </li>
      </ul>
    </div>

    <div v-if="!songs.length" class="no-songs-found">
      <p>
        Uh-oh!
        <br />You don't have any favorites yet. <br />Try adding some when you
        go
        <em @click="scrollToBottom">
          <router-link to="/explore">explore!</router-link>
        </em>
      </p>
    </div>
  </div>
</template>

<script>
import SongCard from "@/components/SongCard";
export default {
  name: "YourPlayLists",
  components: {
    SongCard,
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Nemic | Your Playlists";
      },
    },
  },
  methods: {
    scrollToBottom: function() {
      var elmnt = document.getElementById("nav");
      elmnt.scrollIntoView(true);
    },
    selectPlaylist: function(ev) {
      try {
        this.selectedPlaylist.classList.remove("selected");
      } catch {
        document
          .getElementsByClassName("selected")[0]
          .classList.remove("selected");
      } finally {
        this.selectedPlaylist = ev.target;
        ev.target.classList.add("selected");
      }
    },
  },
  created: function() {console.log(JSON.stringify(this.songs[0]))},
  data: function() {
    return {
      songs: JSON.parse(localStorage.getItem("favoritedSongs")),
      selectedPlaylist: {},
    };
  },
};
</script>
<style scoped lang="scss">
p {
  // color: white;
  font-family: "Lucida Console";
  margin-block-start: 0;
  margin-block-end: 0;
  color: #2c3e50;
  font-size: 1em;
}

em {
  color: var(--nemic-color);
  border-bottom: 1px solid var(--nemic-color);
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgb(207, 89, 89);
  }

  40% {
    transform: scale(1);
    box-shadow: 0 0 0 0.5rem rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(78, 251, 174, 0);
  }
}

.main {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 2em;
  margin-bottom: 40em;
}

.song-list {
  display: flex;
  flex-basis: 75%;
  flex-wrap: wrap;
}

.sidebar {
  display: flex;
  flex-direction: column;
  color: white;
  padding-left: 1em;
  border-left: solid rgb(207, 89, 89) 1px;
}

.playlist-title {
  font-family: "Lucida Console";
  color: rgb(207, 89, 89);
  padding-bottom: 1em;
}

.playlist-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.playlist-entry {
  font-family: "Lucida Console";
  margin: 0;
  padding: 0.2em;
  border-bottom: solid 1px rgb(207, 89, 89);
  margin-top: 1em;
  cursor: pointer;
  border-radius: 1em;
  background-color: inherit;
  &:hover {
    border-top: 1px solid rgb(207, 89, 89);
  }
}

.selected {
  color: rgb(20, 20, 30);
  background-color: rgb(207, 89, 89);
  transition: color 0.3s ease-in;
  transition: background-color 0.3s linear;
  -webkit-transition: background-color 0.3s linear;
  -ms-transition: background-color 0.3s linear;
  transition: background-color 0.3s linear;
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
  margin-bottom: 1em;
  font-family: "Lucida Sans Unicode";
  color: var(--nemic-color);
  font-size: 28px;
}

/*  Background */
.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Smaller screens */
@media only screen and (min-device-width: 320px) {
  .card {
    flex-basis: 100%;
  }
  .card:hover {
    height: 15em;
    animation: pulse 2s infinite;
  }
}

/* Tablets */
@media only screen and (min-device-width: 768px) {
  .card {
    flex-basis: 45%;
    margin-right: 2.5%;
    margin-left: 2.5%;
  }
  .card:hover {
    height: 20em;
    animation: pulse 2s infinite;
  }
}

/* Bigger screens */
@media screen and (min-width: 1024px) {
  .card {
    flex-basis: 32.01%;
    margin-right: 0.5%;
    margin-left: 0.5%;
    border: 1px solid rgba(207, 89, 89, 1);
  }

  .card:hover {
    height: 30em;
    animation: pulse 2s infinite;
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
