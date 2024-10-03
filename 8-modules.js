const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`The systrm  Uptime is ${os.uptime()} seconds`);

const currnetOS = {
    name: os.type(),
    releae: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
} 
console.log(currnetOS);