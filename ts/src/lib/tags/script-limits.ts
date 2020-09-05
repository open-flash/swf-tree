import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface ScriptLimits extends _Tag {
  readonly type: TagType.ScriptLimits;
  readonly maxRecursionDepth: Uint16;
  /**
   * In seconds
   */
  readonly scriptTimeout: Uint16;
}

export const $ScriptLimits: RecordIoType<ScriptLimits> = new RecordType<ScriptLimits>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ScriptLimits as TagType.ScriptLimits})},
    maxRecursionDepth: {type: $Uint16},
    scriptTimeout: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
