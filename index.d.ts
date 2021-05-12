/**
 * xk6-yaml enables k6 tests to comfortably encode and decode YAML values.
 *
 * ## Usage
 *
 * Import an entire module's contents:
 * ```JavaScript
 * import * as YAML from "k6/x/yaml";
 * ```
 *
 * Import a single export from a module:
 * ```JavaScript
 * import { parse } from "k6/x/yaml";
 * ```
 */

/**
 * The parse() method parses a YAML string, constructing the JavaScript object or array described by the string.
 *
 * @param text The string to parse as JSON
 * @returns The Object or Array corresponding to the given YAML text.
 */
export declare function parse(text: string): any;

/**
 * The stringify() method converts a JavaScript object or value to a YAML string.
 *
 * @param value The value to convert to a YAML string
 * @returns A YAML string representing the given value
 */
export declare function stringify(value: any): string;
