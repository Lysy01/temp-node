const os = require('os')

// info about curr user

const user = os.userInfo()
console.log(user)



// method returs the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)


const currOs = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currOs)