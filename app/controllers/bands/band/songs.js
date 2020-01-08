import Controller from "@ember/controller";
import { empty } from "@ember/object/computed";
import Song from "rarwe/models/song";

export default Controller.extend({
  isAddingSong: false,
  newSongName: "",

  isAddButtonDisabled: empty("newSongName"),

  actions: {
    addSong() {
      this.set("isAddingSong", true);
    },

    saveSong(event) {
      event.preventDefault();
      let newSong = Song.create({ title: this.newSongName });
      this.model.songs.pushObject(newSong);
      this.set("newSongName", "");
    },

    cancelAddSong() {
      this.set("isAddingSong", false);
    }
  }
});