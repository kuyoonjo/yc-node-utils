import { Model, Schema } from '@ycs/core/lib/db';

const schema = new Schema({}, { timestamps: {} });

export default Model({
  name: 'wechat',
  auth: false,
  schema,
});
