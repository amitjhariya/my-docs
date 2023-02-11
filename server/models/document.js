import {Schema,model} from "mongoose";

const documentSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

documentSchema.index({ title: 'text' });

const Document = new model('Document', documentSchema);

export default Document