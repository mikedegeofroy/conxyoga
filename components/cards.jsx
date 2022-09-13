import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Card({ children, image, className = "text-left", title, onClick }) {

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className={className}
            onClick={onClick}
        >
            <div className="h-64 w-full relative overflow-hidden">
                <Image draggable="false" src={image} layout="fill" objectFit="cover">

                </Image>
            </div>

            <div className="pt-3">
                <div className="font-medium">
                    <span className='text-[1.3rem] font-["Poppins"]'>{title}</span>
                    <span className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 4 24 24"
                            fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" className="stroke-black feather feather-arrow-right inline">
                            
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
                </div>
                <p className="text-xl font-light text-opacity-25 pt-2">{children}</p>
            </div>

        </motion.div>
    )
}