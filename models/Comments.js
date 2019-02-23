import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Comments", CommentsSchema);
export default model;