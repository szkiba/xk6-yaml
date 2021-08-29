# xk6-yaml

A k6 extension enables k6 tests to comfortably encode and decode YAML values.

The underlying implementation is https://github.com/go-yaml/yaml

Built for [k6](https://go.k6.io/k6) using [xk6](https://github.com/grafana/xk6).

## Usage

Import an entire module's contents:
```JavaScript
import * as YAML from "k6/x/yaml";
```

Import a single export from a module:
```JavaScript
import { parse } from "k6/x/yaml";
```

## API

Functions:

- [parse](docs/README.md#parse)
- [stringify](docs/README.md#stringify)

For complete API documentation click [here](docs/README.md)!

## Build

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git

Then:

1. Install `xk6`:
  ```bash
  $ go install go.k6.io/xk6/cmd/xk6@latest
  ```

2. Build the binary:
  ```bash
  $ xk6 build --with github.com/szkiba/xk6-yaml@latest
  ```
