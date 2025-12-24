const client = require("./client.js")

async function init(){

    //? String
    await client.set("number:1", "1")
    await client.set("number:2", "2")
    await client.set("number:3", "3")
    // await client.del("number:2")
    // await client.expire("number:2", 10)   //* use for remove key after some time
    await client.set("number:4", "4")
    await client.setnx("number:4", "hello")   //? store only when key not exist
    await client.mset("mset:1", "hello bro",  "mset:2", "learning string")  //? use for set multiple values.

    await client.set("count",  "0");
    await client.incr("count");
    await client.incrby("count", "20");
    await client.decr("count")

    console.log("---------------String Part------------")
    console.log("learning string -> ", await client.get("number:2"))
    console.log("Get Multiple values -> ",  await client.mget("number:4", "number:2"))
    console.log("count -> ", await client.get("count"))
    console.log("All values -> ", await client.keys("number:*"))   //? use for return all values of string

    //? List-
    // await client.lpush("value", "hello learning")   //? lpush add elem on the head
    // await client.lpush("value", "hello learning redis")
    // await client.lpush("value", "hello learning list in redis")
    // await client.rpush("value", "hello learning list in redis rpush")

    // await client.rpop("value")  //? remove elm form right side
    // await client.lpop("value")  //? remove elm form right side
    // await client.blpop("value", 10)  //* hold for 10 second if value are not present then return nil if value comes under 10 second it return that value.
    
    console.log("---------------List Part------------")
    console.log("Size of List -> ", await client.llen("value"))
    console.log("all value of List -> ", await client.lrange("value", 0 , -1))

    //? Sets-

    await client.sadd("set", "1")
    await client.sadd("set", "3")
    await client.sadd("set", "8")
    await client.sadd("set", "9")
    await client.sadd("set", "6")
    await client.sadd("set", "15")
    await client.srem("set", "15")

    console.log("---------------Set Part------------")
    console.log("Member is present or not :- ", await client.sismember("set", 9))
    console.log("Size of Set :- ", await client.scard("set"))


    //? 


    //? Sorted Set-

    await client.zadd('rank', "10", "tejass")
    await client.zadd('rank', "14", "anil")
    await client.zadd('rank', "1", "prince")
    await client.zadd('rank', "6", "piyush")
    await client.zrem('rank', "piyush")


    console.log("---------------Sorted Set Part------------")
    console.log("Sorted Set value is -> ", await client.zrange('rank', 0, -1))
    console.log("Sorted Set reverse value is -> ", await client.zrevrange('rank', 0, -1))
    console.log("Access value -> ", await client.zrank("rank", "anil"))

    //? stream-
    await client.xadd('temp', "*", "orderid", "123", "userid", "456", "status", "done")


}

init()