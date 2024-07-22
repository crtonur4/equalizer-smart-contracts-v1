import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TradeWhereInput = {
  id?: StringFilter;
  tokenPair?: StringNullableFilter;
  profit?: FloatNullableFilter;
  status?: "Option1";
  executionTime?: DateTimeNullableFilter;
  tradeDetails?: JsonFilter;
};
