import BaseService from './base.service'

export default class AppService extends BaseService {
  constructor({ container }: { container: any }) {
    super({ container })
  }

  async getHello() {
    return 'Hello'
  }
}
