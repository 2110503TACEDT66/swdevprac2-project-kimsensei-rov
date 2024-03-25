    'use client'
    import InteractiveCard from './InteractiveCard';
    import Image from 'next/image'
    import { Rating} from '@mui/material';
    import { useState } from 'react';


    export default function Card({ hospitalName,imgSrc,onCompare}:{hospitalName:string,imgSrc:string,onCompare?:Function}){
        
        const [rating, setRating] = useState<number>(5);

        return(
        <InteractiveCard>
                <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Hospital Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
                </div>
                <div className='w-full h-[20%] p-[10px]'>{hospitalName}</div>
                {
                    onCompare? <Rating 
                    value={rating}
                    name={hospitalName + " Rating"}
                    id={hospitalName + " Rating"}
                    data-testid={hospitalName + " Rating"}
                    onChange={(event, value) => {
                        event.stopPropagation();
                        event.preventDefault();
                        setRating(value || 0); 
                        onCompare(hospitalName, value); 
                    }
                    }
                    /> : ''
                }
        </InteractiveCard>
        );
    }