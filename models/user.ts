import { ObjectType, Field, ID } from "type-graphql";
import { Model, UUID, UUIDV1, STRING } from "sequelize";
import { Todo } from "./todo";
import { sequelize } from "../db/conf";

@ObjectType()
export class User extends Model {
  @Field(type => ID)
  public id!: string;
  @Field()
  public name!: string;
  @Field(type => [Todo])
  public todos?: Todo[];
}

User.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "user"
  }
);

User.hasMany(Todo);
Todo.belongsTo(User);
