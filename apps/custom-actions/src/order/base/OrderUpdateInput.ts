/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MorUpdateManyWithoutOrdersInput } from "./MorUpdateManyWithoutOrdersInput";

@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MorUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => MorUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => MorUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  mors?: MorUpdateManyWithoutOrdersInput;
}

export { OrderUpdateInput as OrderUpdateInput };
