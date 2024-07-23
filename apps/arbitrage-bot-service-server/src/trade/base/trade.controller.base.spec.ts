import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TradeController } from "../trade.controller";
import { TradeService } from "../trade.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  tokenPair: "exampleTokenPair",
  profit: 42.42,
  executionTime: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  tokenPair: "exampleTokenPair",
  profit: 42.42,
  executionTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    tokenPair: "exampleTokenPair",
    profit: 42.42,
    executionTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  tokenPair: "exampleTokenPair",
  profit: 42.42,
  executionTime: new Date(),
};

const service = {
  createTrade() {
    return CREATE_RESULT;
  },
  trades: () => FIND_MANY_RESULT,
  trade: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Trade", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TradeService,
          useValue: service,
        },
      ],
      controllers: [TradeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /trades", async () => {
    await request(app.getHttpServer())
      .post("/trades")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        executionTime: CREATE_RESULT.executionTime.toISOString(),
      });
  });

  test("GET /trades", async () => {
    await request(app.getHttpServer())
      .get("/trades")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          executionTime: FIND_MANY_RESULT[0].executionTime.toISOString(),
        },
      ]);
  });

  test("GET /trades/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trades"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /trades/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trades"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        executionTime: FIND_ONE_RESULT.executionTime.toISOString(),
      });
  });

  test("POST /trades existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/trades")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        executionTime: CREATE_RESULT.executionTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/trades")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
