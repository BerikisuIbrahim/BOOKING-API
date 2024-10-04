import { Router } from "express";
import { getAllBookings, getOneBooking, postBookings, updateBookings, deleteBookings } from "../booking-controllers.js";

export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)

bookingRouter.get('/bookings/:id', getOneBooking)

bookingRouter.post('/bookings', postBookings)

bookingRouter.patch('/bookings/:id', updateBookings)

bookingRouter.delete('/bookings/:id', deleteBookings)





