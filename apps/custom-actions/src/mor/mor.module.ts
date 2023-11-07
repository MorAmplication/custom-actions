import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MorModuleBase } from "./base/mor.module.base";
import { MorService } from "./mor.service";
import { MorController } from "./mor.controller";

@Module({
  imports: [MorModuleBase, forwardRef(() => AuthModule)],
  controllers: [MorController],
  providers: [MorService],
  exports: [MorService],
})
export class MorModule {}
