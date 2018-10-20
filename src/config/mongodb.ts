import { IConfig } from '@ycs/core/lib/mongodb';

export const development: IConfig = {
  uri:
    'mongodb://ycnodeutils:ycnodeutils@cluster0-shard-00-00-llejq.mongodb.net:27017,cluster0-shard-00-01-llejq.mongodb.net:27017,cluster0-shard-00-02-llejq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  options: {
    useMongoClient: true,
  },
  promise: global.Promise,
};

export const production: IConfig = {
  uri:
    process.env.MONGODB_URI ||
    'mongodb://ycnodeutils:ycnodeutils@cluster0-shard-00-00-llejq.mongodb.net:27017,cluster0-shard-00-01-llejq.mongodb.net:27017,cluster0-shard-00-02-llejq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  options: {
    useMongoClient: true,
  },
  promise: global.Promise,
};
