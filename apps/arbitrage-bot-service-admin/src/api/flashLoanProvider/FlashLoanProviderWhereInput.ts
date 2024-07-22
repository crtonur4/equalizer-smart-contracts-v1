import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FlashLoanProviderWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  providerName?: StringNullableFilter;
  apiUrl?: StringNullableFilter;
  maximumLoanAmount?: FloatNullableFilter;
  fees?: FloatNullableFilter;
};
