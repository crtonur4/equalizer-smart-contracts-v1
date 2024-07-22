import * as graphql from "@nestjs/graphql";
import { FlashLoanProviderResolverBase } from "./base/flashLoanProvider.resolver.base";
import { FlashLoanProvider } from "./base/FlashLoanProvider";
import { FlashLoanProviderService } from "./flashLoanProvider.service";

@graphql.Resolver(() => FlashLoanProvider)
export class FlashLoanProviderResolver extends FlashLoanProviderResolverBase {
  constructor(protected readonly service: FlashLoanProviderService) {
    super(service);
  }
}
