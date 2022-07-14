const offerRepository = require('../repositories/offerRepository');

module.exports = {
  create(requestBody) {
    return offerRepository.create(requestBody);
  },

  async list(args) {
    try {
      const offer = await offerRepository.findAll(args);
      // const offerCount = await offerRepository.getTotalOffer(args);

      return {
        data: offer,
        // count: offerCount,
      };
    } catch (ex) {
      console.err(ex);
      throw ex;
    }
  },

  get(id) {
    return offerRepository.find(id);
  },

  getOne(key) {
    return offerRepository.findOne(key);
  },
};
