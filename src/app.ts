import { AppDataSource } from "./data-source"
import "reflect-metadata"
import photoRoutes from "./Routers/photo"

import * as express from "express";
import bodyParser = require("body-parser");

const app = express();



AppDataSource.initialize()
    .then(async() => {
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:false}))
        console.log("db connected")
        app.use("/photos",photoRoutes)
        app.listen(5000,()=>{
        console.log("server running on port 5000")
    })
    })
    .catch((error) => console.log(error))


    