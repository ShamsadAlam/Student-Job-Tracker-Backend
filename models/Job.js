import mongoose, { Schema } from "mongoose";

const JobSchema = new Schema(
  {
    company: String,
    role: String,
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
    },
    appliedDate: Date,
    link: String,
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", JobSchema);
