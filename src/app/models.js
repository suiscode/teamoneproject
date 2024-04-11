// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   emailVerified: {
//     type: Boolean,
//   },
//   image: {
//     type: String,
//   },
// });

// const reviewSchema = new Schema({
//   car: {
//     type: Schema.Types.ObjectId,
//     ref: "Car",
//     required: true,
//   },
//   starRating: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 5,
//   },
//   comment: {
//     type: String,
//   },
// });

// const carSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   img: {
//     type: [String],
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   salePrice: {
//     type: Number,
//   },
//   gasoline: {
//     type: String,
//     required: true,
//   },
//   steering: {
//     type: String,
//     enum: ["manual", "auto"],
//     required: true,
//   },
//   capacity: {
//     type: Number,
//     required: true,
//   },
//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],
// });

// const CarCategorySchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   cars: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Car",
//     },
//   ],
// });

// export const CarCategory =
//   mongoose.models.CarCategory ||
//   mongoose.model("CarCategory", carCategorySchema);
// export const Review =
//   mongoose.models.Review || mongoose.model("Review", reviewSchema);
// export const Car = mongoose.models.Car || mongoose.model("Car", carSchema);
// export const User = mongoose.models.User || mongoose.model("User", userSchema);
