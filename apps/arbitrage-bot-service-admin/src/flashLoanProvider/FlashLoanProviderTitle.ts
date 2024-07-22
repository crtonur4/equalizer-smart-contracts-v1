import { FlashLoanProvider as TFlashLoanProvider } from "../api/flashLoanProvider/FlashLoanProvider";

export const FLASHLOANPROVIDER_TITLE_FIELD = "providerName";

export const FlashLoanProviderTitle = (record: TFlashLoanProvider): string => {
  return record.providerName?.toString() || String(record.id);
};
