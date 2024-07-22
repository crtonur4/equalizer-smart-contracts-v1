import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tokenPair?: SortOrder;
  profit?: SortOrder;
  status?: SortOrder;
  executionTime?: SortOrder;
  tradeDetails?: SortOrder;
};
