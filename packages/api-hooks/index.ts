// So we don't have to have react-query be a dependency of
// the apps that use @our-scene/api-hooks
// also, if we update react-query in the package, we dont have to update
// react query in each of the apps
export * from '@tanstack/react-query'
export * from './resources/events'
