import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlashLoanProviderServiceBase } from "./base/flashLoanProvider.service.base";

@Injectable()
export class FlashLoanProviderService extends FlashLoanProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
