"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      trim: true,
    },
  },
  { collection: "brands", timestamps: true }
);
exports.BrandSchema = BrandSchema;

{
  data.id = data._id;
  data.createds = data.createdAt.toLocalDateString("tr-tr");
}
