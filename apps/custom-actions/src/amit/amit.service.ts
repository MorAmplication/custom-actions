import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AmitServiceBase } from "./base/amit.service.base";

@Injectable()
export class AmitService extends AmitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
