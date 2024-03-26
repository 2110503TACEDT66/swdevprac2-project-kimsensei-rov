'use client'
import { useReducer, useState } from "react";
import Card from "./Card"
import Link from "next/link";

export default function CardPanel(){

    
    const initialState = new Map([
        ['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5]
    ]);

    const mockHospitalRepo = [{hid:"001" ,name:"Chulalongkorn Hospital", image:"/img/chula.jpg"},
                              {hid:"002" ,name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"},
                              {hid:"003" ,name:"Thammasat University Hospital", image:"/img/thammasat.jpg"}]

    const compareReducer = (compareList:Map<string,number>,action:{type:string,hospitalName:string,rating:number})=>{
        switch (action.type) {
            case 'update': {
                const newMap = new Map(compareList);
                newMap.set(action.hospitalName, action.rating);
                return newMap;
            }
            case 'remove': {
                const newMap = new Map(compareList);
                newMap.delete(action.hospitalName);
                return newMap;
            }
            default:
                return compareList;
        }
    }

    const [ compareList,dispatchCompare] = useReducer(compareReducer,initialState)

    return (
        <div>
        <div style={{margin:"20px",display:"flex",
    flexDirection:"row",alignContent:"space-around",
    justifyContent:"space-around",flexWrap:"wrap"}}>
        {
            mockHospitalRepo.map((cardItem)=>(
                <Link href={`/hospital/${cardItem.hid}`} className="w-1/5">
                    <Card hospitalName={cardItem.name} imgSrc={cardItem.image}
                        onCompare={(hos:string,rat:number)=>dispatchCompare({type:'update',hospitalName:hos,rating:rat})}/>
                    </Link>
            ))
        }
     </div>
     <div>
    {Array.from(compareList).map(([hospitalName, rating]) => (
        <div key={hospitalName} onClick={() => dispatchCompare({ type: 'remove', hospitalName, rating })}>
            <div data-testid={hospitalName}>
                {hospitalName}: {rating}
            </div>
        </div>
    ))}
</div>
    </div>
    );
}