import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "tokenPair";

export const TradeTitle = (record: TTrade): string => {
  return record.tokenPair?.toString() || String(record.id);
};
