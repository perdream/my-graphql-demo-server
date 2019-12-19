import { Query, Resolver, Arg, Mutation,Int} from "type-graphql";
import {User} from "../entity/User"

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello() {
    return "hello!";
  }

  @Query(()=> User)
  async getUsers(@Arg('id') id:String){
     return User.findOne(String(id));
  }

  @Query(()=>[User])
  async getAllUsers(){
    return User.find();
  }

  @Mutation(()=>Boolean)
  async updataAge(
    @Arg('id',()=>Int) id:number,
    @Arg('age',()=>Int) age:number
    ){
      return await User.update({id},{'age':age})
  }
}
