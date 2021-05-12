/**
 * MIT License
 *
 * Copyright (c) 2021 Iván Szkiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { group } from "k6";

export { options } from "./expect.js";
import { describe } from "./expect.js";
import YAML from "k6/x/yaml";

const sample = open("./testdata/sample.yaml");
const items = open("./testdata/items.yaml");

const object = `
foo: bar
sizes:
- small
- medium
- large
`;

const array = `
- small
- medium
- large
`;

export default function () {
  describe("parse", (t) => {
    group("object", () => {
      const obj = YAML.parse(object);
      t.expect(obj.foo).as("foo").toEqual("bar");
      t.expect(obj.sizes[0]).as("first item").toEqual("small");
    });

    group("array", () => {
      const arr = YAML.parse(array);
      t.expect(arr.length).as("length").toEqual(3);
      t.expect(arr[0]).as("first item").toEqual("small");
    });
  });

  describe("stringify", (t) => {
    const text = `sizes:
  - small
  - medium
  - large
`;

    const obj = { sizes: ["small", "medium", "large"] };
    const str = YAML.stringify(obj);
    t.expect(str).as("text").toEqual(text);
  });

  describe("sample", (t) => {
    const obj = YAML.parse(sample);
    t.expect(obj.receipt).as("receipt").toEqual("Oz-Ware Purchase Invoice");
    t.expect(obj["ship-to"].state).as("ship-to.state").toEqual("KS");
    t.expect(obj.items[0].price).as("items[0].price").toEqual(1.47);
    t.expect(obj.date.toString()).as("date").toEqual("2012-08-06 00:00:00 +0000 UTC");
  });

  describe("items", (t) => {
    const arr = YAML.parse(items);
    t.expect(arr.length).as("length").toEqual(2);
    t.expect(arr[0].price).as("items[0].price").toEqual(1.47);
  });
}
