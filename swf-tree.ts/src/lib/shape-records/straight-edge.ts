import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { Vector2D } from "../vector-2d";
import { ShapeRecordType } from "./_type";

export interface StraightEdge {
  type: ShapeRecordType.StraightEdge;
  delta: Vector2D;
}

export namespace StraightEdge {
  export interface Json {
    type: "straight-edge";
    delta: Vector2D.Json;
  }

  export const type: DocumentType<StraightEdge> = new DocumentType<StraightEdge>({
    properties: {
      type: {
        type: new LiteralType({
          type: ShapeRecordType.type,
          value: ShapeRecordType.StraightEdge,
        }),
      },
      delta: {type: Vector2D.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
