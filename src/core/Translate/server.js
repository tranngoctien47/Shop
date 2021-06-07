const fs = require('fs')
const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express()
server = http.createServer(app)

app.use(express.json())
app.use(cors())




app.post('/translate', (req, res) => {
    let translate = req.body
    let dir = `src/translate`
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    for (let i in translate) {
        if (!fs.existsSync(`${dir}/${i}.json`)) {
            fs.writeFileSync(`${dir}/${i}.json`, JSON.stringify({}, null, 4))
        }
        let file
        try {
            file = JSON.parse(fs.readFileSync(`${dir}/${i}.json`) || '{}')
        } catch (err) {
            file = {}
        }


        for (let j in translate[i]) {
            file[j] = translate[i][j]
        }
        fs.writeFileSync(`${dir}/${i}.json`, JSON.stringify(file, null, 4))
    }
    res.json({ success: true })
})


server.listen(3002);
console.log('Server running on port: ', 3002)