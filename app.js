const express = require('express')
const path = require('path')
const app = express()
const port = 3000

require('./routes/routes.js')(app);

// Publicly serve static files in "public" directory
app.use('/static', express.static(path.join(__dirname, '/public')))

// Set the app to use the PUG view engine
app.set('view engine', 'pug')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
