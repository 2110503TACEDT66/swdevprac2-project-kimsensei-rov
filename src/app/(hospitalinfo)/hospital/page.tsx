import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import HospitalCatalog from "@/components/HospitalCatalog";

export default async function Hospital(){

    const hospitals = await getHospitals();

    return (
        <main className="text-center p-5 bg-gray-100">
            <h1 className="text-xl font-medium">Select Your Hotel</h1>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
        </main>
    );
}