<template>
  <div>
    <div class="main" id="main" v-if="songs">
      <SongCard v-for="song of songs" :key="song.title" v-bind:song="song" />
    </div>
    <div v-else class="no-songs-found">No songs found</div>
  </div>
</template>
<style scoped lang="scss">
p {
  font-family: "Lucida Console";
  margin-block-start: 0;
  margin-block-end: 0;
}

.main {
  margin-top: 2em;
  margin-bottom: 30vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
    flex-basis: 22.5%;
    margin-right: 1.15%;
    margin-left: 1.15%;
    border: 1px solid rgba(89, 248, 176, 1);
  }
  .card:hover {
    height: 20em;
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
        document.title = "Nemic | Our Favorites";
      }
    }
  },
  data: function() {
    return {
      songs: [
        {
          id: 1,
          title: "Shelter",
          artist: { name: "Porter Robinson, Madeon" },
          album: {
            cover_xl:
              "https://images.genius.com/024c26eb7e8fc29793590c2598e80fec.1000x563x1.png",
            title: "Shelter"
          },
          //  "https://www.partyscene.nl/ckfinder/userfiles/images/porter%20robinson.jpg",
          preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-18d664998c9e464b3d07112880d7d83c-5.mp3"
        },
        {
          id: 2,
          title: "Heroes Get Remembered, Legends Never Die",
          artist: { name: "Four Year Strong" },
          album: {
            cover_xl:
              "https://m.media-amazon.com/images/I/71PwsZzQNfL._SS500_.jpg",
            title: "Rise or Die Trying"
          },
          preview:
            "https://cdns-preview-c.dzcdn.net/stream/c-c5d1139caf1e12e78317405411cac1ae-4.mp3"
        },
        {
          id: 3,
          title: "Carissa",
          artist: { name: "DESERT STAR" },
          album: {
            cover_xl:
              "https://vignette.wikia.nocookie.net/monstercat/images/9/94/DESERT_STAR_-_Carissa.jpg/revision/latest?cb=20190715125141",
            title: "Carissa"
          },
          preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-68d40d0ef6b4f2011eed5bb3efa29ae6-3.mp3"
        },
        {
          id: 4,
          title: "Knuckles",
          artist: { name: "Moose Blood" },
          album: {
            cover_xl:
              "https://lastfm-img2.akamaized.net/i/u/ar0/6cf77ad68909c705962b7b6c384fd497",
            title: "Knuckles"
          },
          preview:
            "https://cdns-preview-3.dzcdn.net/stream/c-344ddc8c50f6648215d0dc6c9470ba67-5.mp3"
        },
        {
          id: 5,
          title: "Baby Blue",
          artist: { name: "Grayscale" },
          album: {
            cover_xl:
              "https://i.scdn.co/image/ab67616d00001e0207cc7f4b0ead2e9ad77c38e3",
            title: "Nella Vita"
          },
          preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-175ff907e35af96308762cddd4833cb8-4.mp3"
        },
        {
          id: 6,
          title: "Ark",
          artist: { name: "Rob Gasser, Raider" },
          album: {
            cover_xl:
              "https://i1.sndcdn.com/artworks-000076468282-yxxmou-t500x500.jpg",
            title: "Ark"
          },
          preview:
            "https://cdns-preview-b.dzcdn.net/stream/c-bc55fcf112df4483d61de7f615826e48-2.mp3"
        }
      ]
    };
  }
};
</script>
