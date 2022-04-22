import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schema = new Schema(
  {
    question: {
      type: String,
      required: true,
      maxlength: 200,
    },
    answer: {
      type: String,
      required: true,
      maxlength: 200,
    },
    categories: {
      type: Array,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Cards', schema);
