import { IContext } from '@ycs/core/lib/context';
import { paginate, patchUpdates, show } from '@ycs/core/lib/db';
import { Boom, handleError } from '@ycs/core/lib/errors';
import { response } from '@ycs/core/lib/response';
import Util from './model';

class Controller {
  // Gets a list of Utils
  public ip = async (ctx: IContext) => {
    try {
      response(ctx, 200, {
        ip: ctx.request.ip,
      });
    } catch (e) {
      handleError(ctx, e);
    }
  };
}

export default new Controller();
