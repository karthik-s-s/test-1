const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
let port = 3000


app.use(express.json())

// require('dotenv').config();

const sequelize = new Sequelize("userdb", 'root', 'password', {
  host: "localhost",
  dialect: 'mysql',
  logging: false,
});

sequelize.sync({ force: false }).then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server running `);
    });
}).catch(err => console.log(err));

module.exports = sequelize
