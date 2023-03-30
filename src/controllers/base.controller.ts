export default class BaseController {
  container: any
  constructor({ container }: { container: any }) {
    this.container = container
  }
}
