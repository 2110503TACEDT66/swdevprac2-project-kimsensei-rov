'use client'
import { useSearchParams } from "next/navigation";
import EditInput from "./EditInput";

export default function Edit() {
    const urlParams = useSearchParams() 
    const bid = urlParams.get('id')
    if (!bid) return null
    return (
        // create a form to update the booking
        // style the form with tailwindcss and mui like register and login page
        // modernize the form with mui and use sky color bg color like register and login page
        <div className="flex flex-col items-center justify-center">
            <EditInput bookingID={bid} />
        </div>
    );
}