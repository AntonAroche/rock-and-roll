import Controller from "@ember/controller";
import Band from "rarwe/models/band";
import { empty } from "@ember/object/computed";

export default Controller.extend({
  isAddingBand: false,
  newBandName: "",

  isAddButtonDisabled: empty("newBandName"),

  actions: {
    addBand() {
      this.set("isAddingBand", true);
    },

    saveBand(event) {
      event.preventDefault();
      let newBand = Band.create({ name: this.newBandName });
      this.model.pushObject(newBand);
      this.setProperties({
        newBandName: "",
        isAddingBand: false
      });
      this.transitionToRoute("bands.band.songs", newBand);
    },

    cancelAddBand() {
      this.set("isAddingBand", false);
    }
  }
});
