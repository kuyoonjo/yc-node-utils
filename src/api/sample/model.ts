import { Model, Schema } from '@ycs/core/lib/db';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: String,
  },
  { timestamps: {} }
);

export default Model({
  name: 'sample',
  auth: false,
  schema,
});
