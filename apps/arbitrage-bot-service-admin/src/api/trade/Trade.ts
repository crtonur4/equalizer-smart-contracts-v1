import { JsonValue } from "type-fest";

export type Trade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tokenPair: string | null;
  profit: number | null;
  status?: "Option1" | null;
  executionTime: Date | null;
  tradeDetails: JsonValue;
};
