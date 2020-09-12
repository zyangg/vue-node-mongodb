const cors = require('cors')
const express = require('express')

const app = express();

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(__dirname+'/uploads'))

require('./routes/admin/index.js')(app)
require('./mongoose/db.js')(app)

app.listen(3000, () => { 
    console.log('http://localhost:3000'); 
})
