// Code generated by scale-signature 0.4.8, DO NOT EDIT.
// output: local_inttest_latest_guest

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  Stringval: () => Stringval
});
module.exports = __toCommonJS(stdin_exports);
class Stringval {
  /**
  * @throws {Error}
  */
  constructor(decoder) {
    if (decoder) {
      let err;
      try {
        err = decoder.error();
      } catch (_) {
      }
      if (typeof err !== "undefined") {
        throw err;
      }
      this.value = decoder.string();
    } else {
      this.value = "";
    }
  }
  /**
  * @throws {Error}
  */
  encode(encoder) {
    encoder.string(this.value);
  }
  /**
  * @throws {Error}
  */
  static decode(decoder) {
    if (decoder.null()) {
      return void 0;
    }
    return new Stringval(decoder);
  }
  /**
  * @throws {Error}
  */
  static encode_undefined(encoder) {
    encoder.null();
  }
}
//# sourceMappingURL=types.js.map