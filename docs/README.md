# xk6-yaml

xk6-yaml enables k6 tests to comfortably encode and decode YAML values.

## Usage

Import an entire module's contents:
```JavaScript
import * as YAML from "k6/x/yaml";
```

Import a single export from a module:
```JavaScript
import { parse } from "k6/x/yaml";
```

## Table of contents

### Functions

- [parse](README.md#parse)
- [stringify](README.md#stringify)

## Functions

### parse

▸ **parse**(`text`: *string*): *any*

The parse() method parses a YAML string, constructing the JavaScript object or array described by the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | *string* | The string to parse as JSON |

**Returns:** *any*

The Object or Array corresponding to the given YAML text.

___

### stringify

▸ **stringify**(`value`: *any*): *string*

The stringify() method converts a JavaScript object or value to a YAML string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | *any* | The value to convert to a YAML string |

**Returns:** *string*

A YAML string representing the given value
