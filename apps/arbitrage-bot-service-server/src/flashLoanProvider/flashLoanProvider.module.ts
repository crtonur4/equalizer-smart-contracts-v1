import { Module } from "@nestjs/common";
import { FlashLoanProviderModuleBase } from "./base/flashLoanProvider.module.base";
import { FlashLoanProviderService } from "./flashLoanProvider.service";
import { FlashLoanProviderController } from "./flashLoanProvider.controller";
import { FlashLoanProviderResolver } from "./flashLoanProvider.resolver";

@Module({
  imports: [FlashLoanProviderModuleBase],
  controllers: [FlashLoanProviderController],
  providers: [FlashLoanProviderService, FlashLoanProviderResolver],
  exports: [FlashLoanProviderService],
})
export class FlashLoanProviderModule {}
