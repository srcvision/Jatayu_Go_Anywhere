const http = require("http")
const app = require("./app")

const PORT = process.env.PORT || 5000;

const Server = http.createServer(app)

Server.listen(PORT,()=>{
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
})  