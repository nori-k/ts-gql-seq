import {
  Resolver,
  Query,
  InputType,
  Field,
  Arg,
  Ctx,
  Mutation,
  Int
} from "type-graphql";
import { User } from "../models";
import { Context } from "apollo-server-core";

@InputType({ description: "New User Argument" })
class AddUserInput implements Partial<User> {
  @Field()
  name!: string;
}

@InputType({ description: "Update User Argument" })
class UpdateUserInput implements Partial<User> {
  @Field()
  id!: string;
  @Field()
  name!: string;
}

@Resolver()
export class TodoAppResolver {
  @Query(returns => User, { nullable: true })
  async user(@Arg("id") id: string): Promise<User | null> {
    return User.findByPk(id);
  }

  @Mutation(returns => User)
  async addUser(
    @Arg("data") newUser: AddUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return User.create(newUser);
  }

  @Mutation(returns => [Int, [User]])
  async updateUser(
    @Arg("data") updateUser: UpdateUserInput,
    @Ctx() ctx: Context
  ): Promise<[number, User[]]> {
    return User.update(updateUser, {
      where: {
        id: updateUser.id
      }
    });
  }
}
