import Controller from './controller';
import Wechat from './model';

export default Wechat.routes('/api/wechat', {
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
});
