const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

//Server setup
const express = require('express')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//MongoDB connection
const dbConfig = require('./database.config');
//add library
const mongoose = require('mongoose'); 

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(()=>console.log("DB connection successful"))
    .catch(err =>{
    console.log("DB connection is not successful...", err);
})

app.get('/', (req, res)=>{
    res.json({
        "message": "It is working!!"
    })
})

app.use(express.json());

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // // Connect to MongoDB
    // const client = await mongodb.MongoClient.connect(mongoURL);
    // const db = client.db(dbName);

    // Find the user in the database
    const user = await db.collection('users').findOne({ username });

    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // Incorrect password
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Authentication successful
    res.json({ message: 'Authentication successful' });

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res)=>{
    res.json({
        "message": "It is working!!"
    })
})

require('./app/routes/todo.routes')(app)

app.listen(4000, ()=>{
    console.log('server is running!!!')
})