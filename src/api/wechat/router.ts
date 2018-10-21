import Controller from './controller';
import Wechat from './model';

export default Wechat.routes(
  '/api/wechat',
  {
    path: '/pay',
    methods: ['post'],
    controller: Controller.pay,
    tags: ['Wechat'],
    summary: 'Make a wechat payment',
    description: 'Make a wechat payment',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      Wechat.docSchema.bodyWithOptions({
        select: '',
        extras: {
          appid: {
            type: 'string',
          },
          mch_id: {
            type: 'string',
          },
          apiKey: {
            type: 'string',
          },
          body: {
            type: 'string',
          },
          out_trade_no: {
            type: 'string',
          },
          total_fee: {
            type: 'number',
          },
          spbill_create_ip: {
            type: 'string',
          },
          notify_url: {
            type: 'string',
          },
          trade_type: {
            type: 'string',
          },
        },
      }),
    ],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Wechat.docSchema.paginateResult,
      },
      '4xx': Wechat.docSchema.response4xx,
      '5xx': Wechat.docSchema.response5xx,
    },
  },
  {
    path: '/',
    methods: ['post'],
    controller: Controller.create,
    tags: ['Wechat'],
    summary: 'Create a Wechat',
    description: 'Create a Wechat',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      Wechat.docSchema.bodyWithOptions({
        exclude: '__auth __v _id createdAt updatedAt',
      }),
    ],
    responses: {
      201: {
        description: 'Successful operation',
        schema: Wechat.docSchema.result,
      },
      '4xx': Wechat.docSchema.response4xx,
      '5xx': Wechat.docSchema.response5xx,
    },
  },
  {
    path: '/:id',
    methods: ['get'],
    controller: Controller.show,
    tags: ['Wechat'],
    summary: 'Retrieve a Wechat',
    description: 'Retrieve a Wechat',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [Wechat.docSchema.showOptions, Wechat.docSchema.paramId],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Wechat.docSchema.result,
      },
      '4xx': Wechat.docSchema.response4xx,
      '5xx': Wechat.docSchema.response5xx,
    },
  },
  {
    path: '/:id',
    methods: ['put', 'patch'],
    controller: Controller.update,
    tags: ['Wechat'],
    summary: 'Modify a Wechat',
    description: 'Modify a Wechat',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      Wechat.docSchema.paramId,
      Wechat.docSchema.bodyWithOptions({
        exclude: '__auth __v _id createdAt updatedAt',
      }),
    ],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Wechat.docSchema.result,
      },
      '4xx': Wechat.docSchema.response4xx,
      '5xx': Wechat.docSchema.response5xx,
    },
  },
  {
    path: '/:id',
    methods: ['delete'],
    controller: Controller.destroy,
    tags: ['Wechat'],
    summary: 'Delete a Wechat',
    description: 'Delete a Wechat',
    produces: ['text/plain'],
    parameters: [Wechat.docSchema.paramId],
    responses: {
      204: {
        description: 'Successful operation',
      },
      '4xx': Wechat.docSchema.response4xx,
      '5xx': Wechat.docSchema.response5xx,
    },
  }
);
