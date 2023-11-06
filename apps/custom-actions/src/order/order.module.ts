import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderModuleBase } from "./base/order.module.base";
import { OrderService } from "./order.service";

@Module({
  imports: [OrderModuleBase, forwardRef(() => AuthModule)],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
