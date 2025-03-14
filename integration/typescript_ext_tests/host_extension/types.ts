// Code generated by scale-signature 0.4.8, DO NOT EDIT.
// output: local-inttest-latest-host

import { Encoder, Decoder, Kind } from "@loopholelabs/polyglot"

export class Stringval {
  value: string;

  /**
  * @throws {Error}
  */
  constructor (decoder?: Decoder) {
    if (decoder) {
      let err: Error | undefined;
      try {
        err = decoder.error();
      } catch (_) {}
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
  encode (encoder: Encoder) {
    encoder.string(this.value);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): Stringval | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new Stringval(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

