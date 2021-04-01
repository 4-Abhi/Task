const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    rewards_percentage: {
      type: Number,
      min: 1,
      max: 10,
      default: 0,
    },
  },
  {
    timestamps: {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    },
  }
);

module.exports = mongoose.model("project", ProjectSchema);
