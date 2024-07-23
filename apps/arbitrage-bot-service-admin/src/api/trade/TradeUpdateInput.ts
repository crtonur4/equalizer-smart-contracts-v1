import { InputJsonValue } from "../../types";

export type TradeUpdateInput = {
  tokenPair?: string | null;
  profit?: number | null;
  status?: "Option1" | null;
  executionTime?: Date | null;
  tradeDetails?: InputJsonValue;
};
