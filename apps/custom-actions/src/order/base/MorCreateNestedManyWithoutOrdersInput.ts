/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MorWhereUniqueInput } from "../../mor/base/MorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MorCreateNestedManyWithoutOrdersInput {
  @Field(() => [MorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MorWhereUniqueInput],
  })
  connect?: Array<MorWhereUniqueInput>;
}

export { MorCreateNestedManyWithoutOrdersInput as MorCreateNestedManyWithoutOrdersInput };
