import { Field, ObjectType, InputType, ArgsType} from "type-graphql"
import { Matches, Length } from "class-validator";

@ObjectType()
@InputType("UserInput")
export class UserData {
    @Field()
    name!: string
    @Field(type => [String])
    roles!: Array<"member"|"admin"|"mod">
    @Field()
    @Matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    email!: string
    @Field()
    @Length(8, 16)
    password!: string
}

@ObjectType()
export class UserInfo {
    @Field()
    id!: string
    @Field()
    name!: string
    @Field()
    email!: string 
    @Field(type => [String])
    roles!: Array<string>
}