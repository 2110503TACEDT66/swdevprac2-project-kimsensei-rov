import Link from "next/link";
import Card from "./Card";
import { HospitalItem } from "../../interface";
import { HospitalJson } from "../../interface";


export default async function HospitalCatalog({hospitalsJson} : {hospitalsJson:HospitalJson}) {

    const hospitalJsonReady = await hospitalsJson

    return (
        <>
        <div style={{margin:"20px",display:"flex",
            flexDirection:"row",alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap"}}>
        {
            hospitalJsonReady.data.map((hospitalItem:HospitalItem)=>(
                <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                    </Link>
            ))
        }
     </div>
        </>
    )
}