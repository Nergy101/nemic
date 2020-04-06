<template>
  <div
    :id="song.id"
    :data-preview="song.preview"
    class="card background"
    :style="{ 'background-image': 'url(' + song.album.cover_xl + ')' }"
  >
    <div class="tooltip">
      <div ref="header" class="header">
        <div class="card-title">
          <p>{{ song.title.length > 10 ? song.title.substring(0, 10) + "...": song.title }}</p>
        </div>
        <div class="heart">
          <font-awesome-icon
            v-if="!this.isFavorited"
            :icon="['far', 'heart']"
            :style="{'color': 'rgba(255,255,255,0.5)'}"
            transform="shrink-5 left-4"
            size="2x"
            @click="onFavorited()"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'heart']"
            :style="{'color': 'rgba(255,0,0,0.5)'}"
            size="2x"
            @click="onUnFavorited()"
          />
        </div>
      </div>
      <span class="tooltiptext">{{ song.title }}</span>
    </div>
    <div ref="sub" class="sub-header">
      <p class="card-artist" @click="albumClicked">{{song.artist.name}} / {{song.album.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SongCard",
  props: {
    song: Object
  },
  data: function() {
    return {
      isFavorited: false
    };
  },
  mounted: function() {
    // Get Favorited State
    const favoritedSongs = JSON.parse(localStorage.getItem("favoritedSongs"));
    const thisSong = favoritedSongs.filter(song => song.id === this.song.id);
    if (thisSong.length) {
      this.isFavorited = true;
    }

    // Add Song Preview
    const sound = new Audio();
    sound.src = this.song.preview;
    sound.volume = 0.5;

    sound.addEventListener("ended", function() {
      // replay if ended
      sound.currentTime = 0;
      sound.play();
    });

    this.$el.addEventListener("mouseover", () => {
      // play song preview on card-click
      sound.play();
    });

    this.$el.addEventListener("mouseout", () => {
      // pause song on mouse-out
      sound.pause();
    });
  },
  methods: {
    albumClicked: function(event) {
      this.$emit("albumClicked", { albumTitle: event.target.innerText });
    },
    saveFavorited: function(favoritedSongs) {
      localStorage.favoritedSongs = JSON.stringify(favoritedSongs);
    },
    onFavorited: function() {
      this.isFavorited = !this.isFavorited;
      let songs = JSON.parse(localStorage.getItem("favoritedSongs"));
      songs.push(this.song);
      this.saveFavorited(songs);
    },
    onUnFavorited: function() {
      this.isFavorited = !this.isFavorited;
      let songs = localStorage.getItem("favoritedSongs");

      if (songs) {
        songs = JSON.parse(songs);
        const filteredSongs = songs.filter(song => {
          return song.id !== this.song.id;
        });

        this.saveFavorited(filteredSongs);
      }

      // $emit('unfavorited', this.song) // TODO
    }
  }
};
</script>
<style lang="scss" scoped>
/* Card */
.main {
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

p {
  font-family: "Lucida Console";
}

.header {
  display: flex;
  justify-content: center;
  cursor: pointer;

  margin: 0;
  padding: 0;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.sub-header {
  display: flex;
  justify-content: center;

  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  padding-bottom: 0.2rem;
}

.card-title {
  margin: 0;
  padding: 0;
  text-align: center;
  word-wrap: break-word;
}

.heart {
  margin-left: 1rem;
}

.card-artist {
  margin: 0;
  text-align: center;
  overflow: hidden;
  // white-space: nowrap;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.card-title {
  word-wrap: break-word;
  text-align: center;
  font-weight: bold;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 1.2rem;
  margin: 0.2rem;
  border: none;
}

.card-artist {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 0.7rem;
  padding: 0.2rem;
  border: none;
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
  border-radius: 6px;

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