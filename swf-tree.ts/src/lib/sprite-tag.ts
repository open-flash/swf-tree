import { TaggedUnionType } from "kryo/types/tagged-union";
import * as tags from "./tags/index";

export type SpriteTag =
  tags.DoAction
  | tags.DoInitAction
  | tags.FrameLabel
  | tags.PlaceObject
  | tags.RemoveObject
  | tags.ShowFrame
  | tags.SoundStreamHead
  | tags.SoundStreamBlock
  | tags.Unknown;

export const $SpriteTag: TaggedUnionType<SpriteTag> = new TaggedUnionType<SpriteTag>(() => ({
  variants: [
    tags.$DoAction,
    tags.$DoInitAction,
    tags.$FrameLabel,
    tags.$PlaceObject,
    tags.$RemoveObject,
    tags.$ShowFrame,
    tags.$SoundStreamBlock,
    tags.$SoundStreamHead,
    tags.$Unknown,
  ],
  tag: "type",
}));