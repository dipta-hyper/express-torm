import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
// import { User } from "./model/User";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to the home page!")
});


// TORM
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "torm",
    synchronize: true,
    logging: true,
    // entities: [User, ],
})


AppDataSource.initialize()
    .then(() => {
        console.log("DB is connected!");

        // app start
        app.listen(port, () => {
            console.log(`APP is running on port: ${port}`);
        });
    })
    .catch((err) => { console.log("DB connecting error", err) })
