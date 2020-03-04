<template>
  <div>
    <div class="main" id="main" v-if="songs">
      <SongCard v-for="song of songs" :key="song.title" v-bind:song="song" />
    </div>
    <div v-else class="no-songs-found">No songs found</div>
  </div>
</template>
<style scoped lang="scss">
body {
  background-color: rgb(20, 20, 30);
}

p {
  font-family: "Lucida Console";
}

.main {
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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

    min-height: 5em;
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

    min-height: 5em;
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

.pulse {
  animation: pulse 2s infinite;
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
</style>
<script>
import SongCard from "@/components/SongCard";
export default {
  name: "OurFavorites",
  components: {
    SongCard
  },
  methods: {},
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Nemic | Favorites";
      }
    }
  },
  data: function() {
    return {
      songs: [
        {
          title: "Shelter",
          artist: { name: "Porter Robinson, Madeon" },
          album: {
            cover_xl:
              "https://images.genius.com/024c26eb7e8fc29793590c2598e80fec.1000x563x1.png"
          },
          //  "https://www.partyscene.nl/ckfinder/userfiles/images/porter%20robinson.jpg",
          preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-18d664998c9e464b3d07112880d7d83c-5.mp3"
        },
        {
          title: "Heroes Get Remembered, Legends Never Die",
          artist: { name: "Four Year Strong" },
          album: {
            cover_xl:
              "https://m.media-amazon.com/images/I/71PwsZzQNfL._SS500_.jpg"
          },
          preview:
            "https://cdns-preview-c.dzcdn.net/stream/c-c5d1139caf1e12e78317405411cac1ae-4.mp3"
        },
        {
          title: "Carissa",
          artist: { name: "DESERT STAR" },
          album: {
            cover_xl:
              "https://vignette.wikia.nocookie.net/monstercat/images/9/94/DESERT_STAR_-_Carissa.jpg/revision/latest?cb=20190715125141"
          },
          preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-68d40d0ef6b4f2011eed5bb3efa29ae6-3.mp3"
        },
        {
          title: "Knuckles",
          artist: { name: "Moose Blood" },
          album: {
            cover_xl:
              "https://lastfm-img2.akamaized.net/i/u/ar0/6cf77ad68909c705962b7b6c384fd497"
          },
          preview:
            "https://cdns-preview-3.dzcdn.net/stream/c-344ddc8c50f6648215d0dc6c9470ba67-5.mp3"
        },
        {
          title: "Baby Blue",
          artist: { name: "Grayscale" },
          album: {
            cover_xl:
              "https://i.scdn.co/image/ab67616d00001e0207cc7f4b0ead2e9ad77c38e3"
          },
          preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-175ff907e35af96308762cddd4833cb8-4.mp3"
        },
        {
          title: "Ark",
          artist: { name: "Rob Gasser, Raider" },
          album: {
            cover_xl:
              "https://i1.sndcdn.com/artworks-000076468282-yxxmou-t500x500.jpg"
          },
          preview:
            "https://cdns-preview-b.dzcdn.net/stream/c-bc55fcf112df4483d61de7f615826e48-2.mp3"
        }
      ]
    };
  }
};
</script>