import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import { motion } from "framer-motion"
import Breadcrumbs from './breadcrumbs'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { useRouter } from 'next/router'

export default function Layout({ children, pageTitleRaw, invert = false, color = "gradient", hide = false }) {

    const router = useRouter();

    const { user } = useContext(UserContext);

    const [menuStatus, setMenuStatus] = useState(false);

    const [subMenuStatus, setSubMenuStatus] = useState(false);

    const [subMenuStatus2, setSubMenuStatus2] = useState(false);

    const toggleMenu = () => setMenuStatus(!menuStatus);

    const toggleSubMenu = () => setSubMenuStatus(!subMenuStatus);

    const toggleSubMenu2 = () => setSubMenuStatus2(!subMenuStatus2);

    let pageTitle = ""
    
    console.log(pageTitle, pageTitleRaw);

    if (!pageTitleRaw) {
        pageTitle = "Conxyoga";
    } else {
        pageTitle = "Conxyoga | " + pageTitleRaw;
    }

    const menuVariants = {
        open: {
            position: "fixed",
            display: "grid",
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        },
        closed: {
            position: "fixed",
            opacity: 0,
            transition: {
                delay: 0.6,
                staggerChildren: -0.2,
                delayChildren: 0.2
            },
            transitionEnd: {
                display: "none",
            },
        }
    }

    const subMenuVariants = {
        open: {
            display: "flex",
            opacity: 1,
            height: "auto",
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            },

        },
        closed: {
            opacity: 0,
            height: "calc(-1px)",
            transition: {
                staggerChildren: -0.2,
                delayChildren: 0.2
            },
            transitionEnd: {
                display: "none",
            },
        }
    }


    const item = {
        open: { opacity: 1 },
        closed: { opacity: 0 }
    }

    return (
        <div className={color == "gradient" ? "bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3]" : `bg-${color} `}>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            {/* Header  */}

            <div className={`pt-10 px-10 fixed z-50 w-full h-fit flex-col ${ !hide || menuStatus ? (color == "gradient" ? "bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3] " : `bg-${color} `): ""} pb-10`}>
                <div className="flex justify-between align-middle">
                    <div className={`max-w-[150px] grid place-items-center`}>
                        <div className='w-full h-fit'>
                            <Link href={'/'}>
                                <Image className='cursor-pointer' draggable="false" src={'/images/logo.png'} width={'2023px'} height={'344px'}></Image>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-row'>

                        <motion.div whileTap={{ scale: 0.85 }} className={`mr-5 grid place-items-center cursor-pointer` }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </motion.div>

                        <motion.div whileTap={{ scale: 0.85 }} className={`mr-5 grid place-items-center cursor-pointer` } onClick={() => { user ? router.push('/usuario') : router.push('/login') }} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </motion.div>

                        <motion.div whileTap={{ scale: 0.85 }} className={`grid place-items-center cursor-pointer` } onClick={() => { toggleMenu() }}>
                            {menuStatus ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                                </svg>
                            }
                        </motion.div>
                    </div>
                </div>
                <Breadcrumbs title={ pageTitleRaw }></Breadcrumbs>
            </div>

            {/* Menu */}

            <motion.div variants={menuVariants} animate={menuStatus ? 'open' : 'closed'} transition={{
                opacity: { duration: 0.1 },
                default: { ease: "linear" }
            }} className={ (color == "gradient" ? "bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3] " : `bg-${color} `) + "navigation fixed w-screen min-h-full pr-10 pl-10 pb-10 mt-28 z-40" }>
                <div className='grid grid-cols-1 text-[12vw] md:text-[8vw] lg:text-[5vw] font-light divide-y h-fit divide-black'>
                    <motion.div variants={item} className="flex flex-col md:flex-row">
                        <h1 className="w-fit mx-3 cursor-pointer" onClick={() => { toggleSubMenu() }}>Yoga</h1>
                        <motion.div className="flex flex-col md:flex-row" variants={subMenuVariants} animate={subMenuStatus ? 'open' : 'closed'}>
                            <motion.h1 variants={item} className="w-fit mx-3 cursor-pointer">
                                <Link href={'/asanas'}>
                                    <h1 className="mx-3 cursor-pointer w-fit">Asanas</h1>
                                </Link>
                            </motion.h1>
                            <motion.h1 variants={item} className="w-fit mx-3 cursor-pointer">
                                <Link href={'/curso'}>
                                    <h1 className="mx-3 cursor-pointer w-fit">Curso</h1>
                                </Link>
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={item}>
                        <Link href={'/detox'}>
                            <h1 className="mx-3 cursor-pointer w-fit">Detox</h1>
                        </Link>
                    </motion.div>
                    <motion.div variants={item}>
                        <Link href={'/autocuidado'}>
                            <h1 className="mx-3 cursor-pointer w-fit">Autocuidado</h1>
                        </Link>
                    </motion.div>
                    <motion.div variants={item}>
                        <Link href={'/retiros'}>
                            <h1 className="mx-3 cursor-pointer w-fit">Retiros</h1>
                        </Link>
                    </motion.div>
                </div>
                <div className='absolute bottom-24 pb-5 right-0 m-5'>
                    {user ? (<Link href={'/usuario'}>
                        <div className="flex flex-row align-middle cursor-pointer">
                            <div className='text-2xl pr-5 grid place-items-center'>{user.displayName}</div>
                            <img
                                className='rounded-full'
                                src={user.photoURL}
                                height={50}
                                width={50}
                            />
                        </div>
                    </Link>) : <Link href={'/login'}>Iniciar Session</Link>}
                </div>
            </motion.div>



            {/* Content */}


            <main>
                {children}
            </main>

            {/* Footer */}

            {/* <div className="z-50 w-full h-[40vh] p-5 flex justify-between">

            </div> */}


        </div>
    )

}