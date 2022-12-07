import Link from "next/link"

import { motion } from 'framer-motion'


export default function Button({ text, href, onClick }) {

    return (
        <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="w-fit cursor-pointe px-5 py-2 border-black border-solid border-[1px] bg-white"
        >

            {href ? (
                <Link href={href}>
                    <button className="">{text}</button>
                </Link>
            ) : (
                <a onClick={onClick}>
                    <span>
                        {text}
                    </span>
                </a>
                /* <a className={""}>{text}</a> */
            )}


        </motion.a>
    )
}