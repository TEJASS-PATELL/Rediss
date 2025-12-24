const client = require("./client.js")

async function init(){

    //? String
    await client.set("number:1", "1")
    await client.set("number:2", "2")
    await client.set("number:3", "3")
    await client.set("number:4", "4")
    await client.setnx("number:4", "hello")   //? store only when key not exist

    console.log("learning string -> ", await client.get("number:2"))





    //? Sorted Set-

    await client.zadd('rank', "10", "tejass")
    await client.zadd('rank', "14", "anil")
    await client.zadd('rank', "1", "prince")
    await client.zadd('rank', "6", "piyush")
    await client.zrem('rank', "piyush")
    
    console.log("Sorted Set value is -> ", await client.zrange('rank', 0, -1))
    console.log("Sorted Set reverse value is -> ", await client.zrevrange('rank', 0, -1))
    console.log("Access value -> ", await client.zrank("rank", "anil"))

    //? stream-
    await client.xadd('temp', "*", "orderid", "123", "userid", "456", "status", "done")


}

init()