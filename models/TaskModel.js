import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    deadline: String,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Task', TaskSchema);
