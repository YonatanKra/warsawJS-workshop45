export function apply(appliedFunction, ctx, ...args) {
    return appliedFunction.call(ctx, ...args);
}