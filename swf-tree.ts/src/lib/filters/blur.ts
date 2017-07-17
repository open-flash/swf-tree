import {CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {Fixed16P16} from "../fixed-point/fixed16p16";
import {FilterType} from "./_type";

export interface Blur {
  filter: FilterType.Blur;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  passes: Uint8;
}

export namespace Blur {
  export interface Json {
    filter: "blur";
    blur_x: number;
    blur_y: number;
    passes: number;
  }

  export const type: DocumentType<Blur> = new DocumentType<Blur>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.Blur})},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}