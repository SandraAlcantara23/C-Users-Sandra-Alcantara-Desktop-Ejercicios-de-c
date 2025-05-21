const  {createServer} = require ("./server/server.config")
require("dotenv").config();

const app = createServer(process.env.PORT || 3001); 