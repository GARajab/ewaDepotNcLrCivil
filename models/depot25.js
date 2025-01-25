import mongoose, { model, Schema } from "mongoose"

const depot25Schema = new Schema(
  {
    Sch_Ref: {
      type: String, // Corrected type
      required: true,
    },
    BLK: {
      type: String,
      required: true,
    },
    STATUS: {
      type: String,
      required: true,
    },
    passed_date: {
      type: Date,
      required: true,
    },
    AREA: {
      type: String,
      required: true,
    },
    TYPE: {
      type: String,
      required: true,
    },
    Rcvd_Date: {
      type: Date,
      required: true,
    },
    REMARKS: {
      type: String,
      required: true,
    },
    labCost: {
      type: Number,
      required: true,
      min: 0, // Corrected from minimum to min
    },
    matCost: {
      type: Number,
      required: true,
      min: 0, // Corrected from minimum to min
    },
    totalCost: {
      type: Number,
      required: true,
      min: 0, // Corrected from minimum to min
    },
    wayleave_date: {
      type: Date,
      required: true,
    },
    GIS_Date: {
      type: Date,
      required: true,
    },
    In_Design_date: {
      type: Date,
      required: true,
    },
    Plan_Eng_Name: {
      type: String,
      required: true,
    },
    Tech_Name: {
      type: String,
      required: true,
    },
    Plan_Eng_Details: {
      type: String,
      required: true,
    },
    Tech_Details: {
      type: String,
      required: true,
    },
    Cable_Length: {
      type: Number,
      required: true,
      min: 0, // Corrected from minimum to min
    },
  },
  {
    timestamps: true, // Optional: if you want automatic timestamps
  }
)

const Depot25 = mongoose.model("Depot25", depot24Schema) // Corrected from schemeSchema to depot24Schema
export default Depot25
