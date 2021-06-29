There is two packages in the "packages" folder
package "foobar" export "FoobarUtil"
package "other" import FoobarUtil from "foobar"

Error in other/src/index.ts
```
TS2459: Module '"foobar"' declares 'FoobarUtil' locally, but it is not exported.
```

