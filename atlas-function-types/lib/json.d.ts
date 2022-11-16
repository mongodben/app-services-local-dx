/**
 * The JSON global module provides JSON methods to serialize and deserialize
 * standard JavaScript objects.
 */
export type JSON = {
  /**
   * Parses the provided JSON string and converts it to a JavaScript object.
   * @param jsonString A serialized string representation of a standard JSON object.
   * @returns JavaScript object representation of the JSON string.
   * @example
   * The following function converts a serialized JSON string into an equivalent JavaScript object:
   *
   * ```js
   * exports = function() {
   *   const jsonString = `{
   *     "answer": 42,
   *     "submittedAt": "2020-03-02T16:50:24.475Z"
   *   }`;
   *   return JSON.parse(jsonString);
   * }
   * ```
   * Output:
   *
   * ```js
   * {
   *   "answer": 42,
   *   "submittedAt": "2020-03-02T16:50:24.475Z"
   * }
   * ```
   */
  parse: (jsonString: string) => any;
  /**
   * Serializes the provided JavaScript object to a JSON string.
   * @param json A standard JavaScript Object.
   * @returns A string representation of the provided JavaScript object.
   * @example
   * The following function serializes a JavaScript object into an equivalent JSON string:
   *
   * ```js
   * exports = function() {
   *   const jsonObject = {
   *     answer: 42,
   *     submittedAt: new Date("2020-03-02T16:46:47.977Z")
   *   };
   *   return JSON.stringify(jsonObject);
   * }
   * ```
   *
   * Output:
   *
   * ```js
   * "{\"answer\":42,\"submittedAt\":\"2020-03-02T16:46:47.977Z\"}"
   * ```
   */
  stringify: (json: object) => string;
};
