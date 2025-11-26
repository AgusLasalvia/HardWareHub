import cors from "cors"
import express, { type Application } from "express"


import { Server } from "./lib/globalVariables";



const app: Application = express();

app.use(express.json())
app.use(cors())

app.listen(Server.PORT)






