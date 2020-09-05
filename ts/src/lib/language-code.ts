import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum LanguageCode {
  Auto,
  Latin,
  Japanese,
  Korean,
  SimplifiedChinese,
  TraditionalChinese,
}

export const $LanguageCode: TsEnumType<LanguageCode> = new TsEnumType<LanguageCode>({
  enum: LanguageCode,
  changeCase: CaseStyle.KebabCase,
});
