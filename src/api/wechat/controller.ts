import { IContext } from '@ycs/core/lib/context';
import { paginate, patchUpdates, show } from '@ycs/core/lib/db';
import { Boom, handleError } from '@ycs/core/lib/errors';
import { response } from '@ycs/core/lib/response';
import Wechat from './model';
import { Wechatpay, IOrderParams } from '@ycnt/wechatpay';

class Controller {
  // Gets a list of Wechats
  public pay = async (ctx: IContext) => {
    try {
      const wechatpay = new Wechatpay({
        appid: ctx.request.fields.appid,
        mch_id: ctx.request.fields.mch_id,
        apiKey: ctx.request.fields.apiKey, // 微信商户平台API密钥
        pfx: new Buffer(''),
      });
      const orderParams: IOrderParams = {
        body: ctx.request.fields.body, // 商品或支付单简要描述
        out_trade_no: ctx.request.fields.out_trade_no, // 商户系统内部的订单号,32个字符内、可包含字母
        total_fee: ctx.request.fields.total_fee, // 价格单位为分
        spbill_create_ip: ctx.request.fields.spbill_create_ip, // 客户IP地址
        notify_url: ctx.request.fields.notify_url, // 回调通知接口URL
        trade_type: ctx.request.fields.trade_type, // APP, JSAPI, NATIVE etc.
      };

      const order = await wechatpay.createUnifiedOrder(orderParams);
      const payment = wechatpay.configForPayment(order);
      response(ctx, 200, payment);
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Gets a single Wechat from the DB
  public show = async (ctx: IContext) => {
    try {
      const entity = await show(Wechat, ctx);
      if (!entity) throw Boom.notFound();
      response(
        ctx,
        200,
        entity.toJSON({
          virtuals: true,
        })
      );
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Creates a new Wechat in the DB
  public create = async (ctx: IContext) => {
    try {
      if (!ctx.request.fields) throw Boom.badData('Empty body');
      delete ctx.request.fields._id;
      const entity = await Wechat.create(ctx.request.fields);
      response(ctx, 201, entity);
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Updates an existing Wechat in the DB
  public update = async (ctx: IContext) => {
    try {
      delete ctx.request.fields._id;
      const entity = await Wechat.findById(ctx.params.id).exec();
      if (!entity) throw Boom.notFound();
      patchUpdates(entity, ctx.request.fields);
      await entity.save();
      response(ctx, 200, entity);
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Deletes a Wechat from the DB
  public destroy = async (ctx: IContext) => {
    try {
      const entity = await Wechat.findById(ctx.params.id).exec();
      if (!entity) throw Boom.notFound();
      await entity.remove();
      response(ctx, 204);
    } catch (e) {
      handleError(ctx, e);
    }
  };
}

export default new Controller();
