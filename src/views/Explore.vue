<template>
  <div class="main-explore">
    <div class="searchbar">
      <input
        type="text"
        placeholder="Song, Artist or Album..."
        v-model="query"
        @keyup.enter="search"
      />
      <div class="tooltip">
        <input type="number" v-model="limit" @keyup.enter="search" />
        <span class="tooltiptext">Amount</span>
      </div>
      <button @click="search">Explore!</button>
    </div>
    <div v-if="!songs.length" class="quote">
      <p>"Exploration is really the essence of the human spirit" - Frank Borman</p>
    </div>
    <div class="main">
      <SongCard
        v-for="song of songs"
        :key="song.id"
        id
        v-bind:song="song"
        @albumClicked="searchAlbum"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.searchbar {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
}

.quote {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 80vh;
}

.main-explore {
  // margin-bottom: 50vh;
}

@keyframes input-pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 #59cfcf;
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

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 #59cfcf; //rgba(89, 248, 176, 1);
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

p {
  font-family: "Lucida Console";
  margin-block-start: 0;
  margin-block-end: 0;
}

input {
  outline: none;
  max-width: 33.3333%;
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid #59cfcf;
  background-color: rgb(20, 20, 30);
  color: #59cfcf;
  text-align: center;
  &:focus {
    animation: input-pulse 2s infinite;
  }
  &:hover {
    animation: input-pulse 2s infinite;
  }
  &::placeholder {
    color: #59cfcf;
  }
  &[type="number"] {
    margin-left: 1em;
    margin-right: 1em;
    max-width: 3rem;
  }
}

button {
  border: 1px solid #59cfcf;
  background-color: rgb(20, 20, 30);
  outline: none;
  padding: 0.5rem;
  border-radius: 2em;
  color: #59cfcf;
}

button:hover {
  animation: input-pulse 2s infinite;
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
    flex-basis: 22.5%;

    margin-bottom: 2em;
    margin-right: 1.25%;
    margin-left: 1.25%;

    min-height: 5em;
    max-height: 25em;
    height: 15em;

    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.25);
    transition: height 1s ease-in-out;
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

// Tooltip
.tooltip {
  position: relative;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 1em;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltip .tooltiptext {
  opacity: 0;
  transition: opacity 1s;
}

.tooltip:hover .tooltiptext {
  opacity: 1;
}
</style>
<script>
import axios from "axios";
import SongCard from "@/components/SongCard";
export default {
  name: "Explore",
  components: {
    SongCard
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Nemic | Explore";
      }
    }
  },
  data: function() {
    return {
      query: "",
      songs: [],
      limit: 10
    };
  },
  methods: {
    search: function() {
      if (this.query == "") {
        // dont do call with empty query
        this.songs = [];
        localStorage.searchResults = [];
        return;
      }
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track/autocomplete?limit=" +
            this.limit +
            "&q=" +
            this.query
        )
        .then(res => {
          this.songs = res.data.data;
          localStorage.searchResults = JSON.stringify(this.songs);
          localStorage.query = this.query;
        });
    },
    searchAlbum({ albumTitle }) {
      this.query = albumTitle;
      this.limit = 10;
      this.search();
    }
  },
  mounted() {
    if (localStorage.searchResults) {
      this.songs = JSON.parse(localStorage.searchResults);
      this.query = localStorage.query;
    }
  }
};
</script>
