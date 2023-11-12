import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AmitModuleBase } from "./base/amit.module.base";
import { AmitService } from "./amit.service";
import { AmitController } from "./amit.controller";
import { AmitResolver } from "./amit.resolver";

@Module({
  imports: [AmitModuleBase, forwardRef(() => AuthModule)],
  controllers: [AmitController],
  providers: [AmitService, AmitResolver],
  exports: [AmitService],
})
export class AmitModule {}
