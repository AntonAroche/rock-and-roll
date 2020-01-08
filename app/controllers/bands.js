import Controller from "@ember/controller";
import Band from 'rarwe/models/band';

export default Controller.extend({
  isAddingBand: false,
  newBandName: '',

  actions: {
    addBand() {
      this.set("isAddingBand", true);
    },

    saveBand() {
        let newBand = Band.create({name: this.newBandName});
        this.model.pushObject(newBand);
        this.set('newBandName', '');
    },

    cancelAddBand() {
        this.set("isAddingBand", false);
    }
  }
});