import Controller from './controller';
import Util from './model';

export default Util.routes('/api/utils', {
  path: '/ip',
  methods: ['get'],
  controller: Controller.ip,
  tags: ['Util'],
  summary: 'Get your ip address',
  description: 'Get your ip address',
  consumes: ['application/json', 'application/xml'],
  produces: ['application/json', 'application/xml'],
  parameters: [],
  responses: {
    200: {
      description: 'Successful operation',
      schema: Util.docSchema.resultWithOptions({
        extras: {
          ip: {
            type: 'string',
          },
        },
      }),
    },
    '4xx': Util.docSchema.response4xx,
    '5xx': Util.docSchema.response5xx,
  },
});
