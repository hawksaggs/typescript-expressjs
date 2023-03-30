import BaseController from './base.controller'

export default class AppController extends BaseController {
  constructor({ container }: any) {
    super({ container })
  }

  async hello(req: any, res: any) {
    const hello = await this.container.resolve('appService').getHello()
    return res.send(hello)
  }
}
