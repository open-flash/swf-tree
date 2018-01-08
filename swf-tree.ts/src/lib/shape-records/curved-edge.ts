import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { Vector2D } from "../vector-2d";
import { ShapeRecordType } from "./_type";

export interface CurvedEdge {
  type: ShapeRecordType.CurvedEdge;
  controlDelta: Vector2D;
  anchorDelta: Vector2D;
}

export namespace CurvedEdge {
  export interface Json {
    type: "curved-edge";
    control_delta: Vector2D.Json;
    anchor_delta: Vector2D.Json;
  }

  export const type: DocumentType<CurvedEdge> = new DocumentType<CurvedEdge>({
    properties: {
      type: {
        type: new LiteralType({
          type: ShapeRecordType.type,
          value: ShapeRecordType.CurvedEdge,
        }),
      },
      controlDelta: {type: Vector2D.type},
      anchorDelta: {type: Vector2D.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
