//function greetings() {
  //  return 'hello world'
//}
 import { booking } from "../models/booking-models.js"

export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is one booking')
}

export const postBookings = async (req, res) => {
  const newBooking = new booking(req.body)
  const bookings = await newBooking.save()
  
  res.status(200).json(bookings)
}

export const updateBookings = (req, res) => {
  res.json('Booking Updated!')
}

export const deleteBookings = (req, res) => {
  res.json('Bookings deleted!')
}