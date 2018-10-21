import { IContext } from '@ycs/core/lib/context';
import { paginate, patchUpdates, show } from '@ycs/core/lib/db';
import { Boom, handleError } from '@ycs/core/lib/errors';
import { response } from '@ycs/core/lib/response';
import { Address6 } from 'ip-address';

class Controller {
  // Gets a list of Utils
  public ip6 = async (ctx: IContext) => {
    try {
      response(ctx, 200, new Address6(ctx.request.ip));
    } catch (e) {
      handleError(ctx, e);
    }
  };

  public ip4 = async (ctx: IContext) => {
    try {
      response(ctx, 200, new Address6(ctx.request.ip).to4());
    } catch (e) {
      handleError(ctx, e);
    }
  };
}

export default new Controller();
