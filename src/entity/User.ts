import { Entity, PrimaryGeneratedColumn, Column ,BaseEntity} from "typeorm";
import {ObjectType,Field,Int} from "type-graphql"

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  age: number;
}
