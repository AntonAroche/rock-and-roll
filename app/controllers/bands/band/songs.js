import Controller from "@ember/controller";
import { empty } from "@ember/object/computed";

export default Controller.extend({
  isAddingSong: false,
  newSongName: "",

  isAddButtonDisabled: empty("newSongName"),

  actions: {
    addSong() {
      this.set("isAddingSong", true);
    },

    async saveSong(event) {
      event.preventDefault();
      let newSong = this.store.createRecord("song", {
        title: this.newSongTitle,
        band: this.model
      });
      await newSong.save();

      this.set("newSongName", "")
    },

    cancelAddSong() {
      this.set("isAddingSong", false)
    },

    updateRating(song, rating) {
      song.set("rating", song.rating == rating ? 0 : rating);
      song.save();
    }
  }
});
