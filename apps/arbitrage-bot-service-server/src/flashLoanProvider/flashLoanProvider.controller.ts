import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlashLoanProviderService } from "./flashLoanProvider.service";
import { FlashLoanProviderControllerBase } from "./base/flashLoanProvider.controller.base";

@swagger.ApiTags("flashLoanProviders")
@common.Controller("flashLoanProviders")
export class FlashLoanProviderController extends FlashLoanProviderControllerBase {
  constructor(protected readonly service: FlashLoanProviderService) {
    super(service);
  }
}
