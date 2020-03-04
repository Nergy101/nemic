<template>
  <div
    :id="song.id"
    :data-preview="song.preview"
    class="card background"
    :style="{ 'background-image': 'url(' + song.album.cover_xl + ')' }"
  >
    <div ref="header" class="header" :title=" song.title.length >= 22 ? song.title : undefined">
      <p
        class="card-title"
      >{{ song.title.length >= 22 ? song.title.substring(0, 21) + "...": song.title }}</p>
    </div>
    <div ref="sub" class="sub-header">
      <p class="card-artist">{{song.artist.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SongCard",
  props: {
    song: Object
  },
  mounted: function() {
    const sound = new Audio();
    sound.src = this.song.preview;
    sound.volume = 0.1;
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
  methods: {}
};
</script>
<style lang="scss" scoped>
p {
  font-family: "Lucida Console";
}

/* Headers */
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.sub-header {
  background-color: rgba(0, 0, 0, 0.5);
  padding-bottom: 0.2rem;
}

.main {
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
/* Card */
.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-title {
  margin: 0;
  text-align: center;
}

.card-artist {
  margin: 0;
  text-align: center;
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
</style>