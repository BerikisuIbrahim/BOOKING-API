import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import cors from 'cors'

// Create an express app
//import { getAllBookings } from "./controllers/booking-controllers.js";
import { bookingRouter } from "./controllers/routes/all-routes.js";



const app = express();
await mongoose.connect(process.env.MONGO_URI);

const port = 1234

app.use(cors())
app.use(express.json())
app.use(bookingRouter)

// Connect to database

app.listen(port, () => console.log(`Server is listening on ${port}`))