const userRepository = require('../repositories/userRepository');

module.exports = {
  create(requestBody) {
    return userRepository.create(requestBody);
  },

  update(id, requestBody) {
    return userRepository.update(id, requestBody);
  },

  updateWishlist(id, requestBody) {
    return userRepository.updateWishlist(id, requestBody);
  },

  get(id) {
    return userRepository.find(id);
  },

  getOne(key) {
    return userRepository.findOne(key);
  },

};
