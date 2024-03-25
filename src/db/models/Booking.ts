import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
    bookingฺBegin: {
        type: Date,
        required: [true, 'Please add a booking begin date']
    },
    bookingEnd: {
        type: Date,
        required: [true, 'Please add a booking end date']
    },
    roomType: {
        type: String,
        required: [true, 'Please select room type']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
export default Booking;