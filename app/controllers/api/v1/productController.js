const productService = require("../../../services/productService");
const { User } = require("../../../models");

module.exports = {
  create(req, res) {
    req.body.id_user = req.user.id;

    productService
      .create(req.body)
      .then((product) => {
        res.status(201).json({
          status: "OK",
          data: product,
        });
      })
      .catch((err) => {
        res.status(401).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  list(req, res) {
    productService
      .list({
        where: { status: 'available' },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],

      })
      .then((data, count) => {
        res.status(200).json({
          status: "OK",
          data: {
            product: data
          },
          meta: { total: count },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  show(req, res) {
    productService
      .get(req.params.id)
      .then((post) => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  // filter(req, res) {
  //   productService
  //     .filter(req.params.category)
  //     .then((post) => {
  //       res.status(200).json({
  //         status: "OK",
  //         data: post,
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(422).json({
  //         status: "FAIL",
  //         message: err.message,
  //       });
  //     });
  // },

  update(req, res) {
    req.body.id_user = req.user.id;
    productService
      .update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({
          status: "OK",
          message: "Data berhasil diperbarui",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  updateStatusSold(req, res) {
    req.body.id_user = req.user.id;
    const status = { status: 'sold' }
    productService
      .updateStatusSold(req.params.id, status)
      .then(() => {
        res.status(200).json({
          status: "OK",
          message: "Data berhasil diperbarui",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  // deleted(req, res) {
  //   productService
  //     .deleted(req.params.id, { isDeleted: true, deletedBy: req.user.user_email })
  //     .then(() => {
  //       res.status(200).json({
  //         deletedBy: req.user.user_email,
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(422).json({
  //         status: "FAIL",
  //         message: err.message,
  //       });
  //     });
  // },



};
