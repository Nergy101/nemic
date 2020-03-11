<template>
  <div>
    <div class="searchbar">
      <input type="text" placeholder="Search Deezer..." v-model="query" @keyup.enter="search" />
      <input type="number" v-model="limit" @keyup.enter="search" />
      <button @click="search">Explore!</button>
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
body {
  overflow: hidden;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(89, 248, 176, 1);
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

.searchbar {
  display: flex;
  justify-content: center;
  margin-top: 1em;
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
  border: 1px solid rgb(235, 64, 52);
  background-color: rgb(20, 20, 30);
  color: rgb(235, 64, 52);
  text-align: center;
  &::placeholder {
    color: rgb(235, 64, 52);
  }
  &[type="number"] {
    margin-left: 1em;
    margin-right: 1em;
    max-width: 3rem;
  }
}

button {
  border: 1px solid rgb(235, 64, 52);
  background-color: rgb(20, 20, 30);
  outline: none;
  padding: 0.5rem;
  border-radius: 2em;
  color: rgb(235, 64, 52);
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
  }
}

/* Bigger screens */
@media screen and (min-device-width: 1024px) {
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
    animation: fadein 1.5s;
  }

  .card:hover {
    height: 20em;
    animation: pulse 2s infinite;
  }
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
  data: function() {
    return {
      query: "",
      songs: [],
      limit: 10
    };
  },
  methods: {
    search: function() {
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
    searchAlbum({albumTitle}) {
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