const {serverConfig,logger} = require('./config')
const apiRoutes = require('./routes')
const express = require('express')
const app = express()


app.use('/api',apiRoutes)

app.listen(serverConfig.PORT,()=>{
  console.log(`Server start at PORT ${serverConfig.PORT}`);
  logger.info("Successfully started the server","root",{})
})