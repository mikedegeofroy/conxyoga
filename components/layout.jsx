import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollPosition } from '../hooks/updateScrollPosition'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import { motion } from "framer-motion"

export default function Layout({ children, pageTitle }) {

    const { data: session } = useSession()

    const [menuStatus, setMenuStatus] = useState(false);

    const [submenuStatus, setSubmenuSatus] = useState(false);

    console.log(menuStatus)

    const toggleMenu = () => setMenuStatus(!menuStatus);

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

            <div className="fixed z-50 w-full h-fit p-10 flex justify-between">
                <div className='h-full w-1/4 grid place-items-center max-w-[200px]'>
                    <Link href={'/'}>
                        <Image className='cursor-pointer' draggable="false" src={'/images/logo.png'} width={'2023px'} height={'344px'}></Image>
                    </Link>
                </div>
                {/* <div className='w-1/3 hidden md:flex justify-between'>
                    <span className="text-2xl cursor-pointer">yoga</span>
                    <span className="text-2xl cursor-pointer">blog</span>
                    { session ? <span className="text-2xl cursor-pointer" onClick={() => signOut()}>Sign out</span> : <span className="text-2xl cursor-pointer" onClick={() => signIn()}>iniciar sesión</span>}
                </div> */}
                <motion.div whileTap={{ scale: 0.85 }} className='grid place-items-center' onClick={() => { toggleMenu() }}>
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
            }} className="navigation w-screen h-full bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3] p-20 grid-cols-1 text-[9rem] font-light leading-tight divide-y divide-black z-40">
                <motion.div variants={item}>
                    <h1>Sobre mi</h1>
                </motion.div>
                <motion.div variants={item} className="inline">
                    <h1 className="w-fit">Yoga</h1>
                    <motion.div>

                        {/* <motion.div>
                            <h1 className="w-fit">Asanas</h1>
                        </motion.div>

                        <motion.div>
                            <h1 className="w-fit">Curso</h1>
                        </motion.div> */}

                    </motion.div>
                </motion.div>
                <motion.div variants={item}>
                    <h1>Recetas</h1>
                </motion.div>
                <motion.div variants={item}>
                    <h1>Blog</h1>
                </motion.div>
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