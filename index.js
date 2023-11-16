
const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { response } = require('express');
const cors = require('cors')

const { json } = require('express/lib/response');
const port = 8000;

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('')
})

const uri = "mongodb+srv://mhsrabon017:C4IxPogApv7gthB3@cluster0.iphno9k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
 await client.connect()
 const dataCollection=client.db("main").collection("all")
 app.get('/all',async(req,res)=>{
    const query={}
    const alldata=await dataCollection.find(query).toArray()
    res.send(alldata)
 })
 
}
finally {
}
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(` baby shop listening on port ${port}`)
})