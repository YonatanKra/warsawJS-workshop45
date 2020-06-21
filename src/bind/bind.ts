export default function bind(boundFunction: Function, ctx: any, ...restArguments) {
    return function(...actualArguments) {
        return boundFunction.call(ctx, ...actualArguments, ...restArguments);
    }
}
