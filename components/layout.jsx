import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import { motion } from "framer-motion"
import Breadcrumbs from './breadcrumbs'

export default function Layout({ children, pageTitle, invert = false }) {

    // const { data: session } = useSession()

    const [menuStatus, setMenuStatus] = useState(false);

    const [subMenuStatus, setSubMenuStatus] = useState(false);

    const [subMenuStatus2, setSubMenuStatus2] = useState(false);

    const toggleMenu = () => setMenuStatus(!menuStatus);

    const toggleSubMenu = () => setSubMenuStatus(!subMenuStatus);

    const toggleSubMenu2 = () => setSubMenuStatus2(!subMenuStatus2);

    if (!pageTitle) {
        pageTitle = "Conxyoga"
    } else {
        pageTitle = "Conxyoga | " + pageTitle
    }

    const menuVariants = {
        open: {
            position: "absolute",
            display: "grid",
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        },
        closed: {
            position: "absolute",
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
        <div className='bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3]'>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            {/* Header  */}

            <div className="fixed z-50 w-full h-fit p-10 flex justify-between align-middle">
                <div className='max-w-[150px] grid place-items-center'>
                    <div className='w-full h-fit'>
                        <Link href={'/'}>
                            <Image className='cursor-pointer' draggable="false" src={'/images/logo.png'} width={'2023px'} height={'344px'}></Image>
                        </Link>
                    </div>
                </div>
                {invert ? <div></div> : ""}
                <Breadcrumbs></Breadcrumbs>
                {invert ? "" : <div></div>}
                <motion.div whileTap={{ scale: 0.85 }} className='grid place-items-center cursor-pointer' onClick={() => { toggleMenu() }}>
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

            {/* Menu */}

            <motion.div variants={menuVariants} animate={menuStatus ? 'open' : 'closed'} transition={{
                opacity: { duration: 0.1 },
                default: { ease: "linear" }
            }} className="navigation fixed w-screen min-h-full bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3] p-10 pt-20 z-40">
                <div className='grid grid-cols-1 text-[12vw] md:text-[8vw] lg:text-[5vw] font-light divide-y h-fit divide-black'>
                    <motion.div variants={item}>
                        <Link href={'/about'}>
                            <h1 className="mx-3 cursor-pointer w-fit">Sobre mi</h1>
                        </Link>
                    </motion.div>
                    <motion.div variants={item} className="flex flex-col md:flex-row">
                        <h1 className="w-fit mx-3 cursor-pointer" onClick={() => { toggleSubMenu2() }}>Recetas</h1>
                        <motion.div className="flex flex-col md:flex-row" variants={subMenuVariants} animate={subMenuStatus2 ? 'open' : 'closed'}>
                            <motion.h1 variants={item} className="w-fit mx-3 cursor-pointer">
                                <Link href={'/recetas/cosmeticas'}>
                                    <h1 className="mx-3 cursor-pointer w-fit">Cosmeticas</h1>
                                </Link>
                            </motion.h1>
                            <motion.h1 variants={item} className="w-fit mx-3 cursor-pointer">
                                <Link href={'/recetas/depuraciones'}>
                                    <h1 className="mx-3 cursor-pointer w-fit">Depuraciones</h1>
                                </Link>
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                    {/* <motion.div variants={item}>
                        <Link href={'/blog'}>
                            <h1 className="mx-3 cursor-pointer w-fit">Blog</h1>
                        </Link>
                    </motion.div> */}
                    <motion.div variants={item}>
                        <Link href={'/retiros'}>
                            <h1 className="mx-3 cursor-pointer w-fit">Retiros</h1>
                        </Link>
                    </motion.div>
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
                </div>
            </motion.div>

            {/* Content */}


            <main className='min-h-screen'>
                {children}
            </main>

            {/* Footer */}

            {/* <div className="z-50 w-full h-[40vh] p-5 flex justify-between">

            </div> */}


        </div>
    )

}