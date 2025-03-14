// Code generated by scale-signature 0.4.8, DO NOT EDIT.
// output: local-example-latest-host

import { Encoder, Decoder, Kind } from "@loopholelabs/polyglot"

export enum GenericEnum {
  FirstValue = 0,

  SecondValue = 1,

  DefaultValue = 2,

}
export class EmptyModel {
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
    } else {
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): EmptyModel | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new EmptyModel(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// EmptyModelWithDescription: Test Description
export class EmptyModelWithDescription {
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
    } else {
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): EmptyModelWithDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new EmptyModelWithDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithSingleStringField {
  stringField: string;

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
      this.stringField = decoder.string();
    } else {
      this.stringField = "DefaultValue";
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.string(this.stringField);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithSingleStringField | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithSingleStringField(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithSingleStringFieldAndDescription: Test Description
export class ModelWithSingleStringFieldAndDescription {
  stringField: string;

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
      this.stringField = decoder.string();
    } else {
      this.stringField = "DefaultValue";
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.string(this.stringField);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithSingleStringFieldAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithSingleStringFieldAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithSingleInt32Field {
  int32Field: number;

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
      this.int32Field = decoder.int32();
    } else {
      this.int32Field = 32;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.int32(this.int32Field);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithSingleInt32Field | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithSingleInt32Field(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithSingleInt32FieldAndDescription: Test Description
export class ModelWithSingleInt32FieldAndDescription {
  int32Field: number;

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
      this.int32Field = decoder.int32();
    } else {
      this.int32Field = 32;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.int32(this.int32Field);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithSingleInt32FieldAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithSingleInt32FieldAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithMultipleFields {
  stringField: string;

  int32Field: number;

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
      this.stringField = decoder.string();
      this.int32Field = decoder.int32();
    } else {
      this.stringField = "DefaultValue";
      this.int32Field = 32;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.string(this.stringField);
    encoder.int32(this.int32Field);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithMultipleFields | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithMultipleFields(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithMultipleFieldsAndDescription: Test Description
export class ModelWithMultipleFieldsAndDescription {
  stringField: string;

  int32Field: number;

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
      this.stringField = decoder.string();
      this.int32Field = decoder.int32();
    } else {
      this.stringField = "DefaultValue";
      this.int32Field = 32;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.string(this.stringField);
    encoder.int32(this.int32Field);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithMultipleFieldsAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithMultipleFieldsAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithEnum {
  enumField: GenericEnum;

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
      this.enumField = decoder.uint32();
    } else {
      this.enumField = GenericEnum.DefaultValue;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.uint32(this.enumField);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEnum | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEnum(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithEnumAndDescription: Test Description
export class ModelWithEnumAndDescription {
  enumField: GenericEnum;

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
      this.enumField = decoder.uint32();
    } else {
      this.enumField = GenericEnum.DefaultValue;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.uint32(this.enumField);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEnumAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEnumAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithEnumAccessor {
  enumField: GenericEnum;

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
      this.enumField = decoder.uint32();
    } else {
      this.enumField = GenericEnum.DefaultValue;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.uint32(this.enumField);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEnumAccessor | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEnumAccessor(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithEnumAccessorAndDescription: Test Description
export class ModelWithEnumAccessorAndDescription {
  enumField: GenericEnum;

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
      this.enumField = decoder.uint32();
    } else {
      this.enumField = GenericEnum.DefaultValue;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.uint32(this.enumField);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEnumAccessorAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEnumAccessorAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithMultipleFieldsAccessor {
  stringField: string;

  int32Field: number;

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
      this.stringField = decoder.string();
      this.int32Field = decoder.int32();
    } else {
      this.stringField = "DefaultValue";
      this.int32Field = 32;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.string(this.stringField);
    encoder.int32(this.int32Field);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithMultipleFieldsAccessor | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithMultipleFieldsAccessor(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithMultipleFieldsAccessorAndDescription: Test Description
export class ModelWithMultipleFieldsAccessorAndDescription {
  stringField: string;

  int32Field: number;

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
      this.stringField = decoder.string();
      this.int32Field = decoder.int32();
    } else {
      this.stringField = "DefaultValue";
      this.int32Field = 32;
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    encoder.string(this.stringField);
    encoder.int32(this.int32Field);
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithMultipleFieldsAccessorAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithMultipleFieldsAccessorAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithEmbeddedModels {
  embeddedEmptyModel: EmptyModel | undefined;

  embeddedModelArrayWithMultipleFieldsAccessor: Array<ModelWithMultipleFieldsAccessor>;

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
      this.embeddedEmptyModel = EmptyModel.decode(decoder);
      const embeddedModelArrayWithMultipleFieldsAccessorSize = decoder.array(Kind.Any);
      this.embeddedModelArrayWithMultipleFieldsAccessor = new Array(embeddedModelArrayWithMultipleFieldsAccessorSize);
      for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorSize; i += 1) {
        const x = ModelWithMultipleFieldsAccessor.decode(decoder);
        if (typeof x !== "undefined") {
          this.embeddedModelArrayWithMultipleFieldsAccessor[i] = x;
        }
      }
    } else {
      this.embeddedEmptyModel = new EmptyModel();
      this.embeddedModelArrayWithMultipleFieldsAccessor = [];
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    if (typeof this.embeddedEmptyModel === "undefined") {
      encoder.null();
    } else {
      this.embeddedEmptyModel.encode(encoder);
    }
    const embeddedModelArrayWithMultipleFieldsAccessorLength = this.embeddedModelArrayWithMultipleFieldsAccessor.length;
    encoder.array(embeddedModelArrayWithMultipleFieldsAccessorLength, Kind.Any);
    for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorLength; i += 1) {
      const el = this.embeddedModelArrayWithMultipleFieldsAccessor[i];
      el.encode(encoder);
    }
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEmbeddedModels | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEmbeddedModels(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithEmbeddedModelsAndDescription: Test Description
export class ModelWithEmbeddedModelsAndDescription {
  embeddedEmptyModel: EmptyModel | undefined;

  embeddedModelArrayWithMultipleFieldsAccessor: Array<ModelWithMultipleFieldsAccessor>;

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
      this.embeddedEmptyModel = EmptyModel.decode(decoder);
      const embeddedModelArrayWithMultipleFieldsAccessorSize = decoder.array(Kind.Any);
      this.embeddedModelArrayWithMultipleFieldsAccessor = new Array(embeddedModelArrayWithMultipleFieldsAccessorSize);
      for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorSize; i += 1) {
        const x = ModelWithMultipleFieldsAccessor.decode(decoder);
        if (typeof x !== "undefined") {
          this.embeddedModelArrayWithMultipleFieldsAccessor[i] = x;
        }
      }
    } else {
      this.embeddedEmptyModel = new EmptyModel();
      this.embeddedModelArrayWithMultipleFieldsAccessor = [];
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    if (typeof this.embeddedEmptyModel === "undefined") {
      encoder.null();
    } else {
      this.embeddedEmptyModel.encode(encoder);
    }
    const embeddedModelArrayWithMultipleFieldsAccessorLength = this.embeddedModelArrayWithMultipleFieldsAccessor.length;
    encoder.array(embeddedModelArrayWithMultipleFieldsAccessorLength, Kind.Any);
    for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorLength; i += 1) {
      const el = this.embeddedModelArrayWithMultipleFieldsAccessor[i];
      el.encode(encoder);
    }
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEmbeddedModelsAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEmbeddedModelsAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithEmbeddedModelsAccessor {
  embeddedEmptyModel: EmptyModel | undefined;

  embeddedModelArrayWithMultipleFieldsAccessor: Array<ModelWithMultipleFieldsAccessor>;

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
      this.embeddedEmptyModel = EmptyModel.decode(decoder);
      const embeddedModelArrayWithMultipleFieldsAccessorSize = decoder.array(Kind.Any);
      this.embeddedModelArrayWithMultipleFieldsAccessor = new Array(embeddedModelArrayWithMultipleFieldsAccessorSize);
      for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorSize; i += 1) {
        const x = ModelWithMultipleFieldsAccessor.decode(decoder);
        if (typeof x !== "undefined") {
          this.embeddedModelArrayWithMultipleFieldsAccessor[i] = x;
        }
      }
    } else {
      this.embeddedEmptyModel = new EmptyModel();
      this.embeddedModelArrayWithMultipleFieldsAccessor = [];
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    if (typeof this.embeddedEmptyModel === "undefined") {
      encoder.null();
    } else {
      this.embeddedEmptyModel.encode(encoder);
    }
    const embeddedModelArrayWithMultipleFieldsAccessorLength = this.embeddedModelArrayWithMultipleFieldsAccessor.length;
    encoder.array(embeddedModelArrayWithMultipleFieldsAccessorLength, Kind.Any);
    for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorLength; i += 1) {
      const el = this.embeddedModelArrayWithMultipleFieldsAccessor[i];
      el.encode(encoder);
    }
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEmbeddedModelsAccessor | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEmbeddedModelsAccessor(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

// ModelWithEmbeddedModelsAccessorAndDescription: Test Description
export class ModelWithEmbeddedModelsAccessorAndDescription {
  embeddedEmptyModel: EmptyModel | undefined;

  embeddedModelArrayWithMultipleFieldsAccessor: Array<ModelWithMultipleFieldsAccessor>;

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
      this.embeddedEmptyModel = EmptyModel.decode(decoder);
      const embeddedModelArrayWithMultipleFieldsAccessorSize = decoder.array(Kind.Any);
      this.embeddedModelArrayWithMultipleFieldsAccessor = new Array(embeddedModelArrayWithMultipleFieldsAccessorSize);
      for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorSize; i += 1) {
        const x = ModelWithMultipleFieldsAccessor.decode(decoder);
        if (typeof x !== "undefined") {
          this.embeddedModelArrayWithMultipleFieldsAccessor[i] = x;
        }
      }
    } else {
      this.embeddedEmptyModel = new EmptyModel();
      this.embeddedModelArrayWithMultipleFieldsAccessor = [];
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    if (typeof this.embeddedEmptyModel === "undefined") {
      encoder.null();
    } else {
      this.embeddedEmptyModel.encode(encoder);
    }
    const embeddedModelArrayWithMultipleFieldsAccessorLength = this.embeddedModelArrayWithMultipleFieldsAccessor.length;
    encoder.array(embeddedModelArrayWithMultipleFieldsAccessorLength, Kind.Any);
    for (let i = 0; i < embeddedModelArrayWithMultipleFieldsAccessorLength; i += 1) {
      const el = this.embeddedModelArrayWithMultipleFieldsAccessor[i];
      el.encode(encoder);
    }
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithEmbeddedModelsAccessorAndDescription | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithEmbeddedModelsAccessorAndDescription(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

export class ModelWithAllFieldTypes {
  modelField: EmptyModel | undefined;

  modelArrayField: Array<EmptyModel>;

  stringField: string;

  stringArrayField: string[];

  stringMapField: Map<string, string>;

  stringMapFieldEmbedded: Map<string, EmptyModel>;

  int32Field: number;

  int32ArrayField: number[];

  int32MapField: Map<number, number>;

  int32MapFieldEmbedded: Map<number, EmptyModel>;

  int64Field: bigint;

  int64ArrayField: bigint[];

  int64MapField: Map<bigint, bigint>;

  int64MapFieldEmbedded: Map<bigint, EmptyModel>;

  uint32Field: number;

  uint32ArrayField: number[];

  uint32MapField: Map<number, number>;

  uint32MapFieldEmbedded: Map<number, EmptyModel>;

  uint64Field: bigint;

  uint64ArrayField: bigint[];

  uint64MapField: Map<bigint, bigint>;

  uint64MapFieldEmbedded: Map<bigint, EmptyModel>;

  float32Field: number;

  float32ArrayField: number[];

  float64Field: number;

  float64ArrayField: number[];

  enumField: GenericEnum;

  enumArrayField: GenericEnum[];

  enumMapField: Map<GenericEnum, string>;

  enumMapFieldEmbedded: Map<GenericEnum, EmptyModel>;

  bytesField: Uint8Array;

  bytesArrayField: Uint8Array[];

  boolField: boolean;

  boolArrayField: boolean[];

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
      this.modelField = EmptyModel.decode(decoder);
      const modelArrayFieldSize = decoder.array(Kind.Any);
      this.modelArrayField = new Array(modelArrayFieldSize);
      for (let i = 0; i < modelArrayFieldSize; i += 1) {
        const x = EmptyModel.decode(decoder);
        if (typeof x !== "undefined") {
          this.modelArrayField[i] = x;
        }
      }
      this.stringField = decoder.string();
      const stringArrayFieldSize = decoder.array(Kind.String);
      this.stringArrayField = new Array(stringArrayFieldSize);
      for (let i = 0; i < stringArrayFieldSize; i += 1) {
        this.stringArrayField[i] = decoder.string();
      }
      this.stringMapField = new Map<string, string>();
      let stringMapFieldSize = decoder.map(Kind.String, Kind.String);
      for (let i = 0; i < stringMapFieldSize; i++) {
        let key = decoder.string();
        let val = decoder.string();
        this.stringMapField.set(key, val);
      }
      this.stringMapFieldEmbedded = new Map<string, EmptyModel>();
      let stringMapFieldEmbeddedSize = decoder.map(Kind.String, Kind.Any);
      for (let i = 0; i < stringMapFieldEmbeddedSize; i++) {
        let key = decoder.string();
        let val = EmptyModel.decode(decoder);
        if (typeof val !== "undefined") {
          this.stringMapFieldEmbedded.set(key, val);
        }
      }
      this.int32Field = decoder.int32();
      const int32ArrayFieldSize = decoder.array(Kind.Int32);
      this.int32ArrayField = new Array(int32ArrayFieldSize);
      for (let i = 0; i < int32ArrayFieldSize; i += 1) {
        this.int32ArrayField[i] = decoder.int32();
      }
      this.int32MapField = new Map<number, number>();
      let int32MapFieldSize = decoder.map(Kind.Int32, Kind.Int32);
      for (let i = 0; i < int32MapFieldSize; i++) {
        let key = decoder.int32();
        let val = decoder.int32();
        this.int32MapField.set(key, val);
      }
      this.int32MapFieldEmbedded = new Map<number, EmptyModel>();
      let int32MapFieldEmbeddedSize = decoder.map(Kind.Int32, Kind.Any);
      for (let i = 0; i < int32MapFieldEmbeddedSize; i++) {
        let key = decoder.int32();
        let val = EmptyModel.decode(decoder);
        if (typeof val !== "undefined") {
          this.int32MapFieldEmbedded.set(key, val);
        }
      }
      this.int64Field = decoder.int64();
      const int64ArrayFieldSize = decoder.array(Kind.Int64);
      this.int64ArrayField = new Array(int64ArrayFieldSize);
      for (let i = 0; i < int64ArrayFieldSize; i += 1) {
        this.int64ArrayField[i] = decoder.int64();
      }
      this.int64MapField = new Map<bigint, bigint>();
      let int64MapFieldSize = decoder.map(Kind.Int64, Kind.Int64);
      for (let i = 0; i < int64MapFieldSize; i++) {
        let key = decoder.int64();
        let val = decoder.int64();
        this.int64MapField.set(key, val);
      }
      this.int64MapFieldEmbedded = new Map<bigint, EmptyModel>();
      let int64MapFieldEmbeddedSize = decoder.map(Kind.Int64, Kind.Any);
      for (let i = 0; i < int64MapFieldEmbeddedSize; i++) {
        let key = decoder.int64();
        let val = EmptyModel.decode(decoder);
        if (typeof val !== "undefined") {
          this.int64MapFieldEmbedded.set(key, val);
        }
      }
      this.uint32Field = decoder.uint32();
      const uint32ArrayFieldSize = decoder.array(Kind.Uint32);
      this.uint32ArrayField = new Array(uint32ArrayFieldSize);
      for (let i = 0; i < uint32ArrayFieldSize; i += 1) {
        this.uint32ArrayField[i] = decoder.uint32();
      }
      this.uint32MapField = new Map<number, number>();
      let uint32MapFieldSize = decoder.map(Kind.Uint32, Kind.Uint32);
      for (let i = 0; i < uint32MapFieldSize; i++) {
        let key = decoder.uint32();
        let val = decoder.uint32();
        this.uint32MapField.set(key, val);
      }
      this.uint32MapFieldEmbedded = new Map<number, EmptyModel>();
      let uint32MapFieldEmbeddedSize = decoder.map(Kind.Uint32, Kind.Any);
      for (let i = 0; i < uint32MapFieldEmbeddedSize; i++) {
        let key = decoder.uint32();
        let val = EmptyModel.decode(decoder);
        if (typeof val !== "undefined") {
          this.uint32MapFieldEmbedded.set(key, val);
        }
      }
      this.uint64Field = decoder.uint64();
      const uint64ArrayFieldSize = decoder.array(Kind.Uint64);
      this.uint64ArrayField = new Array(uint64ArrayFieldSize);
      for (let i = 0; i < uint64ArrayFieldSize; i += 1) {
        this.uint64ArrayField[i] = decoder.uint64();
      }
      this.uint64MapField = new Map<bigint, bigint>();
      let uint64MapFieldSize = decoder.map(Kind.Uint64, Kind.Uint64);
      for (let i = 0; i < uint64MapFieldSize; i++) {
        let key = decoder.uint64();
        let val = decoder.uint64();
        this.uint64MapField.set(key, val);
      }
      this.uint64MapFieldEmbedded = new Map<bigint, EmptyModel>();
      let uint64MapFieldEmbeddedSize = decoder.map(Kind.Uint64, Kind.Any);
      for (let i = 0; i < uint64MapFieldEmbeddedSize; i++) {
        let key = decoder.uint64();
        let val = EmptyModel.decode(decoder);
        if (typeof val !== "undefined") {
          this.uint64MapFieldEmbedded.set(key, val);
        }
      }
      this.float32Field = decoder.float32();
      const float32ArrayFieldSize = decoder.array(Kind.Float32);
      this.float32ArrayField = new Array(float32ArrayFieldSize);
      for (let i = 0; i < float32ArrayFieldSize; i += 1) {
        this.float32ArrayField[i] = decoder.float32();
      }
      this.float64Field = decoder.float64();
      const float64ArrayFieldSize = decoder.array(Kind.Float64);
      this.float64ArrayField = new Array(float64ArrayFieldSize);
      for (let i = 0; i < float64ArrayFieldSize; i += 1) {
        this.float64ArrayField[i] = decoder.float64();
      }
      this.enumField = decoder.uint32();
      const enumArrayFieldSize = decoder.array(Kind.Uint32);
      this.enumArrayField = new Array(enumArrayFieldSize);
      for (let i = 0; i < enumArrayFieldSize; i += 1) {
        this.enumArrayField[i] = decoder.uint32();
      }
      this.enumMapField = new Map<number, string>();
      let enumMapFieldSize = decoder.map(Kind.Uint32, Kind.String);
      for (let i = 0; i < enumMapFieldSize; i++) {
        let key = decoder.uint32();
        let val = decoder.string();
        this.enumMapField.set(key, val);
      }
      this.enumMapFieldEmbedded = new Map<number, EmptyModel>();
      let enumMapFieldEmbeddedSize = decoder.map(Kind.Uint32, Kind.Any);
      for (let i = 0; i < enumMapFieldEmbeddedSize; i++) {
        let key = decoder.uint32();
        let val = EmptyModel.decode(decoder);
        if (typeof val !== "undefined") {
          this.enumMapFieldEmbedded.set(key, val);
        }
      }
      this.bytesField = decoder.uint8Array();
      const bytesArrayFieldSize = decoder.array(Kind.Uint8Array);
      this.bytesArrayField = new Array(bytesArrayFieldSize);
      for (let i = 0; i < bytesArrayFieldSize; i += 1) {
        this.bytesArrayField[i] = decoder.uint8Array();
      }
      this.boolField = decoder.boolean();
      const boolArrayFieldSize = decoder.array(Kind.Boolean);
      this.boolArrayField = new Array(boolArrayFieldSize);
      for (let i = 0; i < boolArrayFieldSize; i += 1) {
        this.boolArrayField[i] = decoder.boolean();
      }
    } else {
      this.modelField = new EmptyModel();
      this.modelArrayField = [];
      this.stringField = "DefaultValue";
      this.stringArrayField = [];
      this.stringMapField = new Map<string, string>();
      this.stringMapFieldEmbedded = new Map<string, EmptyModel>();
      this.int32Field = 32;
      this.int32ArrayField = [];
      this.int32MapField = new Map<number, number>();
      this.int32MapFieldEmbedded = new Map<number, EmptyModel>();
      this.int64Field = 64n;
      this.int64ArrayField = [];
      this.int64MapField = new Map<bigint, bigint>();
      this.int64MapFieldEmbedded = new Map<bigint, EmptyModel>();
      this.uint32Field = 32;
      this.uint32ArrayField = [];
      this.uint32MapField = new Map<number, number>();
      this.uint32MapFieldEmbedded = new Map<number, EmptyModel>();
      this.uint64Field = 64n;
      this.uint64ArrayField = [];
      this.uint64MapField = new Map<bigint, bigint>();
      this.uint64MapFieldEmbedded = new Map<bigint, EmptyModel>();
      this.float32Field = 32.32;
      this.float32ArrayField = [];
      this.float64Field = 64.64;
      this.float64ArrayField = [];
      this.enumField = GenericEnum.DefaultValue;
      this.enumArrayField = [];
      this.enumMapField = new Map<GenericEnum, string>();
      this.enumMapFieldEmbedded = new Map<GenericEnum, EmptyModel>();
      this.bytesField = new Uint8Array(512);
      this.bytesArrayField = [];
      this.boolField = true;
      this.boolArrayField = [];
    }
  }

  /**
  * @throws {Error}
  */
  encode (encoder: Encoder) {
    if (typeof this.modelField === "undefined") {
      encoder.null();
    } else {
      this.modelField.encode(encoder);
    }
    const modelArrayFieldLength = this.modelArrayField.length;
    encoder.array(modelArrayFieldLength, Kind.Any);
    for (let i = 0; i < modelArrayFieldLength; i += 1) {
      const el = this.modelArrayField[i];
      el.encode(encoder);
    }
    encoder.string(this.stringField);
    const stringArrayFieldLength = this.stringArrayField.length;
    encoder.array(stringArrayFieldLength, Kind.String);
    for (let i = 0; i < stringArrayFieldLength; i += 1) {
      encoder.string(this.stringArrayField[i]);
    }
    encoder.map(this.stringMapField.size, Kind.String, Kind.String);
    this.stringMapField.forEach((val, key) => {
      encoder.string(key);
      encoder.string(val);
    });
    encoder.map(this.stringMapFieldEmbedded.size, Kind.String, Kind.Any);
    this.stringMapFieldEmbedded.forEach((val, key) => {
      encoder.string(key);
      val.encode(encoder);
    });
    encoder.int32(this.int32Field);
    const int32ArrayFieldLength = this.int32ArrayField.length;
    encoder.array(int32ArrayFieldLength, Kind.Int32);
    for (let i = 0; i < int32ArrayFieldLength; i += 1) {
      encoder.int32(this.int32ArrayField[i]);
    }
    encoder.map(this.int32MapField.size, Kind.Int32, Kind.Int32);
    this.int32MapField.forEach((val, key) => {
      encoder.int32(key);
      encoder.int32(val);
    });
    encoder.map(this.int32MapFieldEmbedded.size, Kind.Int32, Kind.Any);
    this.int32MapFieldEmbedded.forEach((val, key) => {
      encoder.int32(key);
      val.encode(encoder);
    });
    encoder.int64(this.int64Field);
    const int64ArrayFieldLength = this.int64ArrayField.length;
    encoder.array(int64ArrayFieldLength, Kind.Int64);
    for (let i = 0; i < int64ArrayFieldLength; i += 1) {
      encoder.int64(this.int64ArrayField[i]);
    }
    encoder.map(this.int64MapField.size, Kind.Int64, Kind.Int64);
    this.int64MapField.forEach((val, key) => {
      encoder.int64(key);
      encoder.int64(val);
    });
    encoder.map(this.int64MapFieldEmbedded.size, Kind.Int64, Kind.Any);
    this.int64MapFieldEmbedded.forEach((val, key) => {
      encoder.int64(key);
      val.encode(encoder);
    });
    encoder.uint32(this.uint32Field);
    const uint32ArrayFieldLength = this.uint32ArrayField.length;
    encoder.array(uint32ArrayFieldLength, Kind.Uint32);
    for (let i = 0; i < uint32ArrayFieldLength; i += 1) {
      encoder.uint32(this.uint32ArrayField[i]);
    }
    encoder.map(this.uint32MapField.size, Kind.Uint32, Kind.Uint32);
    this.uint32MapField.forEach((val, key) => {
      encoder.uint32(key);
      encoder.uint32(val);
    });
    encoder.map(this.uint32MapFieldEmbedded.size, Kind.Uint32, Kind.Any);
    this.uint32MapFieldEmbedded.forEach((val, key) => {
      encoder.uint32(key);
      val.encode(encoder);
    });
    encoder.uint64(this.uint64Field);
    const uint64ArrayFieldLength = this.uint64ArrayField.length;
    encoder.array(uint64ArrayFieldLength, Kind.Uint64);
    for (let i = 0; i < uint64ArrayFieldLength; i += 1) {
      encoder.uint64(this.uint64ArrayField[i]);
    }
    encoder.map(this.uint64MapField.size, Kind.Uint64, Kind.Uint64);
    this.uint64MapField.forEach((val, key) => {
      encoder.uint64(key);
      encoder.uint64(val);
    });
    encoder.map(this.uint64MapFieldEmbedded.size, Kind.Uint64, Kind.Any);
    this.uint64MapFieldEmbedded.forEach((val, key) => {
      encoder.uint64(key);
      val.encode(encoder);
    });
    encoder.float32(this.float32Field);
    const float32ArrayFieldLength = this.float32ArrayField.length;
    encoder.array(float32ArrayFieldLength, Kind.Float32);
    for (let i = 0; i < float32ArrayFieldLength; i += 1) {
      encoder.float32(this.float32ArrayField[i]);
    }
    encoder.float64(this.float64Field);
    const float64ArrayFieldLength = this.float64ArrayField.length;
    encoder.array(float64ArrayFieldLength, Kind.Float64);
    for (let i = 0; i < float64ArrayFieldLength; i += 1) {
      encoder.float64(this.float64ArrayField[i]);
    }
    encoder.uint32(this.enumField);
    const enumArrayFieldLength = this.enumArrayField.length;
    encoder.array(enumArrayFieldLength, Kind.Uint32);
    for (let i = 0; i < enumArrayFieldLength; i += 1) {
      encoder.uint32(this.enumArrayField[i]);
    }
    encoder.map(this.enumMapField.size, Kind.Uint32, Kind.String);
    this.enumMapField.forEach((val, key) => {
      encoder.uint32(key);
      encoder.string(val);
    });
    encoder.map(this.enumMapFieldEmbedded.size, Kind.Uint32, Kind.Any);
    this.enumMapFieldEmbedded.forEach((val, key) => {
      encoder.uint32(key);
      val.encode(encoder);
    });
    encoder.uint8Array(this.bytesField);
    const bytesArrayFieldLength = this.bytesArrayField.length;
    encoder.array(bytesArrayFieldLength, Kind.Uint8Array);
    for (let i = 0; i < bytesArrayFieldLength; i += 1) {
      encoder.uint8Array(this.bytesArrayField[i]);
    }
    encoder.boolean(this.boolField);
    const boolArrayFieldLength = this.boolArrayField.length;
    encoder.array(boolArrayFieldLength, Kind.Boolean);
    for (let i = 0; i < boolArrayFieldLength; i += 1) {
      encoder.boolean(this.boolArrayField[i]);
    }
  }

  /**
  * @throws {Error}
  */
  static decode (decoder: Decoder): ModelWithAllFieldTypes | undefined {
    if (decoder.null()) {
      return undefined
    }
    return new ModelWithAllFieldTypes(decoder);
  }

  /**
  * @throws {Error}
  */
  static encode_undefined (encoder: Encoder) {
    encoder.null();
  }
}

