## Design Considerations

### Immutability

The library supports immutability in all its inner functions.  Hence, all the manipulations done on arrays and objects will return a new array/object.

### Prototypical "this"

The library does not make use of "this". Instead, it uses internal "bind" and "call" which explicitly define the context values.