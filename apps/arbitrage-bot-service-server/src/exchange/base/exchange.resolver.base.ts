/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Exchange } from "./Exchange";
import { ExchangeCountArgs } from "./ExchangeCountArgs";
import { ExchangeFindManyArgs } from "./ExchangeFindManyArgs";
import { ExchangeFindUniqueArgs } from "./ExchangeFindUniqueArgs";
import { CreateExchangeArgs } from "./CreateExchangeArgs";
import { UpdateExchangeArgs } from "./UpdateExchangeArgs";
import { DeleteExchangeArgs } from "./DeleteExchangeArgs";
import { ExchangeService } from "../exchange.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Exchange)
export class ExchangeResolverBase {
  constructor(
    protected readonly service: ExchangeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Exchange",
    action: "read",
    possession: "any",
  })
  async _exchangesMeta(
    @graphql.Args() args: ExchangeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Exchange])
  @nestAccessControl.UseRoles({
    resource: "Exchange",
    action: "read",
    possession: "any",
  })
  async exchanges(
    @graphql.Args() args: ExchangeFindManyArgs
  ): Promise<Exchange[]> {
    return this.service.exchanges(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Exchange, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Exchange",
    action: "read",
    possession: "own",
  })
  async exchange(
    @graphql.Args() args: ExchangeFindUniqueArgs
  ): Promise<Exchange | null> {
    const result = await this.service.exchange(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Exchange)
  @nestAccessControl.UseRoles({
    resource: "Exchange",
    action: "create",
    possession: "any",
  })
  async createExchange(
    @graphql.Args() args: CreateExchangeArgs
  ): Promise<Exchange> {
    return await this.service.createExchange({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Exchange)
  @nestAccessControl.UseRoles({
    resource: "Exchange",
    action: "update",
    possession: "any",
  })
  async updateExchange(
    @graphql.Args() args: UpdateExchangeArgs
  ): Promise<Exchange | null> {
    try {
      return await this.service.updateExchange({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Exchange)
  @nestAccessControl.UseRoles({
    resource: "Exchange",
    action: "delete",
    possession: "any",
  })
  async deleteExchange(
    @graphql.Args() args: DeleteExchangeArgs
  ): Promise<Exchange | null> {
    try {
      return await this.service.deleteExchange(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
