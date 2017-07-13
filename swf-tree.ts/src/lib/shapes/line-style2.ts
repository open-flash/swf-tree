import {BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {CapStyle} from "./cap-style";
import {FillStyle} from "./fill-style";
import {JoinStyle} from "./join-style";

export interface LineStyle2 {
  width: Uint16;
  startCapStyle: CapStyle;
  joinStyle: JoinStyle;
  noHScale: boolean;
  noVScale: boolean;
  pixelHinting: boolean;
  noClose: boolean;
  endCapStyle: CapStyle;
  miterLimitFactor?: Uint16;
  color?: StraightSRgba;
  fillType?: FillStyle;
}

export namespace LineStyle2 {
  export interface Json {
    width: number;
    start_cap_style: CapStyle.Json;
    join_style: JoinStyle.Json;
    no_h_scale: boolean;
    no_v_scale: boolean;
    pixel_hinting: boolean;
    no_close: boolean;
    end_cap_style: CapStyle.Json;
    miter_limit_factor?: number;
    color?: StraightSRgba.Json;
    fill_type?: FillStyle.Json;
  }

  export const type: DocumentType<LineStyle2> = new DocumentType<LineStyle2>({
    properties: {
      width: {type: new Int32Type()},
      startCapStyle: {type: CapStyle.type},
      joinStyle: {type: JoinStyle.type},
      noHScale: {type: new BooleanType()},
      noVScale: {type: new BooleanType()},
      pixelHinting: {type: new BooleanType()},
      noClose: {type: new BooleanType()},
      endCapStyle: {type: CapStyle.type},
      miterLimitFactor: {type: new Int32Type(), optional: true},
      color: {type: StraightSRgba.type, optional: true},
      fillType: {type: FillStyle.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
