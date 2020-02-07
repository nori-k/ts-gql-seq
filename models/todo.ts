import { ObjectType, Field, ID } from "type-graphql";
import { Model, UUID, UUIDV1, STRING } from "sequelize";
import { User } from "./user";
import { sequelize } from "../db/conf";

@ObjectType()
export class Todo extends Model {
  @Field(type => ID)
  public id!: string;
  @Field(type => User)
  public user!: User;
  @Field()
  public title!: string;
  @Field()
  public content?: string;
  @Field()
  public readonly createdAt!: Date;
  @Field()
  public readonly updatedAt!: Date;
}

Todo.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    content: STRING
  },
  {
    sequelize,
    modelName: "todo"
  }
);
