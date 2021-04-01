const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    pool_rewards: {
      type: Number,
      default: 10,
    },

    suggested_user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },

    referral_user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
    ],
    project_transaction: {
      project: {
        type: mongoose.Schema.ObjectId,
        ref: "project",
      },
      date: {
        type: Date,
      },
      transcation_amount: Number,
    },

    account_blance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    },
  }
);
userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "referral_user",
    ref: "user",
  });
  next();
});

// userSchema.pre("save", function (next) {
//   // if (!this.isModified("referral_user")) return next();
//   console.log("thisssssss", this.referral_user);

//   next();
// });

module.exports = mongoose.model("user", userSchema);
