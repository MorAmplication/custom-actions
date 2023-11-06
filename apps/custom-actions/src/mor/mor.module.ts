import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MorModuleBase } from "./base/mor.module.base";
import { MorService } from "./mor.service";

@Module({
  imports: [MorModuleBase, forwardRef(() => AuthModule)],
  providers: [MorService],
  exports: [MorService],
})
export class MorModule {}
