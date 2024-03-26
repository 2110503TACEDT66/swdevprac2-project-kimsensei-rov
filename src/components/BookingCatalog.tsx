import Link from "next/link";
import Card from "./Card";
import { BookingItem, BookingJson } from "../../interface";
import BookingCard from "./BookingCard";

export default async function BookingCatalog({ BookingJson }: { BookingJson: BookingJson }) {
    const bookingJsonReady = await BookingJson;
    
    

    return (
        <div style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            alignContent: "space-around",
            justifyContent: "space-around",
            flexWrap: "wrap"
        }}>
            {bookingJsonReady.data.map((bookingItem: any) => (

                <BookingCard
                    bookingBegins={bookingItem.bookingBegin}
                    bookingEnds={bookingItem.bookingEnd}
                    roomTypes={bookingItem.roomType}
                    users={bookingItem.user} 
                    hotels="65e2ec5f9fdb24c50e8eb620"
                    id={bookingItem.id}
                />
            ))}
        </div>
    );
}