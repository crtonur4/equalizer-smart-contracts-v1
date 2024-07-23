/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Exchange as PrismaExchange } from "@prisma/client";

export class ExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ExchangeCountArgs, "select">): Promise<number> {
    return this.prisma.exchange.count(args);
  }

  async exchanges(
    args: Prisma.ExchangeFindManyArgs
  ): Promise<PrismaExchange[]> {
    return this.prisma.exchange.findMany(args);
  }
  async exchange(
    args: Prisma.ExchangeFindUniqueArgs
  ): Promise<PrismaExchange | null> {
    return this.prisma.exchange.findUnique(args);
  }
  async createExchange(
    args: Prisma.ExchangeCreateArgs
  ): Promise<PrismaExchange> {
    return this.prisma.exchange.create(args);
  }
  async updateExchange(
    args: Prisma.ExchangeUpdateArgs
  ): Promise<PrismaExchange> {
    return this.prisma.exchange.update(args);
  }
  async deleteExchange(
    args: Prisma.ExchangeDeleteArgs
  ): Promise<PrismaExchange> {
    return this.prisma.exchange.delete(args);
  }
}
