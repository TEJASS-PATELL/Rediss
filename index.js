const client = require("./client.js")

async function init(){













    //? Sorted Set-

    await client.zadd('rank', "10", "tejass")
    await client.zadd('rank', "14", "anil")
    await client.zadd('rank', "1", "prince")
    await client.zadd('rank', "6", "piyush")
    await client.zrem('rank', "piyush")
    
    console.log("Sorted Set value is -> ", await client.zrange('rank', 0, -1))
    console.log("Sorted Set reverse value is -> ", await client.zrevrange('rank', 0, -1))
    console.log("Access value -> ", await client.zrank("rank", "anil"))

}

init()