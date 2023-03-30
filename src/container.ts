import { createContainer, asClass, Lifetime, asValue } from 'awilix'
import { InjectionMode } from 'awilix/lib/injection-mode'

const modulesToLoad: any = [
  ['controllers/*.controller.ts'],
  ['services/*.service.ts']
]

const opts = {
  injectionMode: InjectionMode.PROXY
}
const result = createContainer(opts)
  .loadModules(modulesToLoad, {
    cwd: __dirname,
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SCOPED,
      register: asClass
    }
  })
  .register({
    container: { resolve: (c: any) => c }
  })

export default result
