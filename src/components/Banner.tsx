'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner(){

    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()

    const {data: session} = useSession()
    

    return(
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%3]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className=" relative top-28 z-20 text-center text-3xl">
                <h1 className={styles.a}>Welcome To Kimsensei Hotel</h1>
                {/* <h3> Days:Monday and Wednesday</h3> */}
                {/* <h3> Timing:10AM to 2PM</h3> */}
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
                font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-10
                hover:bg-cyan-600 hover:text-white hover:border-transparent'
                onClick={(e)=>{e.stopPropagation();router.push('/hospital')}}
                >
                Our Hotels
            </button>
        </div>
    );
}