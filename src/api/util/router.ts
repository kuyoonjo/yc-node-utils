import Controller from './controller';
import Util from './model';

export default Util.routes(
  '/api/utils',
  {
    path: '/ip/6',
    methods: ['get'],
    controller: Controller.ip6,
    tags: ['Util'],
    summary: 'Get your ip address in ipv6 format',
    description: 'Get your ip address in ipv6 format',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Util.docSchema.resultWithOptions({
          extras: {
            valid: {
              type: 'boolean',
            },
            address: {
              type: 'string',
            },
            groups: {
              type: 'number',
            },
            v4: {
              type: 'boolean',
            },
            subnet: {
              type: 'string',
            },
            subnetMask: {
              type: 'number',
            },
            addressMinusSuffix: {
              type: 'string',
            },
            parsedAddress: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        }),
      },
      '4xx': Util.docSchema.response4xx,
      '5xx': Util.docSchema.response5xx,
    },
  },
  {
    path: '/ip/4',
    methods: ['get'],
    controller: Controller.ip4,
    tags: ['Util'],
    summary: 'Get your ip address in ipv4 format',
    description: 'Get your ip address in ipv4 format',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Util.docSchema.resultWithOptions({
          extras: {
            valid: {
              type: 'boolean',
            },
            address: {
              type: 'string',
            },
            groups: {
              type: 'number',
            },
            v4: {
              type: 'boolean',
            },
            subnet: {
              type: 'string',
            },
            subnetMask: {
              type: 'number',
            },
            addressMinusSuffix: {
              type: 'string',
            },
            parsedAddress: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        }),
      },
      '4xx': Util.docSchema.response4xx,
      '5xx': Util.docSchema.response5xx,
    },
  }
);
