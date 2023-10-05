import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
        {
        order_ID: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        payment_ID: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        product_ID: {
            type: String,
            required: true,
            trim: true,
        },
        order_Status: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        prod_pic_URL: {
            type: String,
            default: "na"
        },
       order_created: {
            type: Date,
            default: Date.now
        }    
    },
    { timestamps: true }
    );

  export const Order = mongoose.model("order", orderSchema);