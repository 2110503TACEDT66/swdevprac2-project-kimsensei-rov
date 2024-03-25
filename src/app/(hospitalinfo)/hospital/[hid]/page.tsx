import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage({params} : {params:{hid:string}}) {

    //Mock Data for Demonstration Only
    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set("001",{name:"Chulalongkorn Hospital", image:"/img/chula.jpg"})
    // mockHospitalRepo.set("002",{name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"})
    // mockHospitalRepo.set("003",{name:"Thammasat University Hospital", image:"/img/thammasat.jpg"})

    const hospitalDetail = await getHospital(params.hid)

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture}
                    alt='Hospital Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{hospitalDetail.data.name}
                <div className="text-md mx-5">Address: {hospitalDetail.data.address}</div>
                <div className="text-md mx-5">Tel: {hospitalDetail.data.telephone}</div>
                </div>
            </div>
        </main>
    );
}

