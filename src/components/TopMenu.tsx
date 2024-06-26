import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';
import Register from '@/app/register/page';
import styles from './topmenu.module.css'

export default async function TopMenu(){

    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>
            <Link href='/profile'>
            <Image src={'/img/user.png'} className="h-full w-auto opacity-35 h-12 py-1 hover:bg-indigo-600"
            alt='logo' width={0} height={0} sizes="100vh"/>
            </Link>
            <TopMenuItem title='Make a Reservation' pageRef='/booking' />
            <Link href='/'>
            <Image src={'/img/logo.png'} className="h-full w-auto "
            alt='logo' width={0} height={0} sizes="100vh"/>
            </Link>
            <div className='flex flex-row absolute left-0 h-full'>
            {
                session? <Link href="/api/auth/signout"><div className='flex items-center h-full px-2
                text-cyan-600 text-sm'>Sign-Out</div></Link>
                :<Link href="/api/auth/signin"><div className='flex items-center h-full px-2
                text-cyan-600 text-sm'>Sign-In</div></Link>
            }
            <TopMenuItem title='Reservation' pageRef='/mybooking'/>
            <TopMenuItem title='Register' pageRef='/register'/>
            </div> 
        </div>
    );
}
