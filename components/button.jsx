import Link from "next/link"

import { motion } from 'framer-motion'


export default function Button({ text, href, onClick }) {

    return (
        <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="my-4 w-fit cursor-pointer"
        >

            {href ? (
                <Link href={href}>
                    <a className='border-black border-2 text-[2rem] px-4 py-2 rounded-xl font-light w-fit'>
                        <span>
                            {text}
                        </span>
                        <span className="pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 3 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" className="stroke-black feather feather-arrow-right inline">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </a>
                </Link>
            ) : (
                <a onClick={onClick} className='border-black border-2 text-[2rem] px-4 py-2 rounded-xl font-light w-fit'>
                    <span>
                        {text}
                    </span>
                    <span className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 3 24 24"
                            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" className="stroke-black feather feather-arrow-right inline">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
                </a>
            )}


        </motion.a>
    )
}