import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "../shapes/fill-style-type";

export interface FocalRadialGradientMorphFill {
  fillStypeType: FillStyleType.FocalRadialGradient;
  startGradientMatrix: Matrix;
  endGradientMatrix: Matrix;
  // TODO: MorphGradient or MorphFocalGradient?
  gradient: any;
}

export namespace FocalRadialGradientMorphFill {
  export interface Json {
    fill_style_type: "focal-radial-gradient";
    start_gradient_matrix: Matrix.Json;
    end_gradient_matrix: Matrix.Json;
    gradient: any;
  }

  export const type: DocumentType<FocalRadialGradientMorphFill> = new DocumentType<FocalRadialGradientMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.FocalRadialGradient})},
      startGradientMatrix: {type: StraightSRgba.type},
      endGradientMatrix: {type: StraightSRgba.type},
      gradient: null as any,
    },
    rename: CaseStyle.SnakeCase,
  });
}
