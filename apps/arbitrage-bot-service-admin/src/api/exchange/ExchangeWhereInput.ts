import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ExchangeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  apiUrl?: StringNullableFilter;
  isIntegrated?: BooleanNullableFilter;
  status?: "Option1";
  fees?: FloatNullableFilter;
};
