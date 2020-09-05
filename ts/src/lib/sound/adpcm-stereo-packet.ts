import { $Bytes } from "kryo/lib/bytes.js";
import { $Sint16 } from "kryo/lib/integer.js";
import { $Uint32 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint16, Uint32 } from "semantic-types";

export interface AdpcmStereoPacket {
  initialSampleLeft: Sint16;
  initialIndexLeft: Uint32;
  initialSampleRight: Sint16;
  initialIndexRight: Uint32;
  adpcmCodeData: Uint8Array;
}

export const $AdpcmStereoPacket: RecordIoType<AdpcmStereoPacket> = new RecordType<AdpcmStereoPacket>({
  properties: {
    initialSampleLeft: {type: $Sint16},
    initialIndexLeft: {type: $Uint32},
    initialSampleRight: {type: $Sint16},
    initialIndexRight: {type: $Uint32},
    adpcmCodeData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
