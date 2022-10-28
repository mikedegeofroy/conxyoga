import Layout from '../components/layout'
import { Shapes } from "../components/scene";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "../lib/settings"
import useMeasure from "react-use-measure";
import { useState } from "react";
// import { Suspense } from 'react';

export default function Home() {

    // const [ref, bounds] = useMeasure({ scroll: false });
    // const [isHover, setIsHover] = useState(false);
    // const [isPress, setIsPress] = useState(false);
    // const mouseX = useMotionValue(0);
    // const mouseY = useMotionValue(0);

    // const resetMousePosition = () => {
    //     mouseX.set(0);
    //     mouseY.set(0);
    // };

    return (
        <Layout>
            <div className='grid place-items-center mx-5 md:mx-10 h-screen'>
                <div className='font-["Sauvage-Antique"] grid-cols-6 grid leading-none max-w-[1100px]'>
                    <div className='text-[10vw] w-fit col-start-1 col-span-5'>LO QUE</div>
                    <div className='text-[10vw] w-fit col-start-3 col-span-5'>BUSCAS</div>
                    <div className='text-[10vw] w-fit col-start-2'>ESTA</div>
                    <div className='text-[10vw] w-fit col-span-6'>DENTRO DE TI</div>
                </div>
            </div>

            {/* Background */}

            {/* <MotionConfig transition={transition}>
                <motion.button
                    ref={ref}
                    initial={false}
                    animate={isHover ? "hover" : "rest"}
                    whileTap="press"
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.5 },
                        press: { scale: 1.4 }
                    }}
                    onHoverStart={() => {
                        resetMousePosition();
                        setIsHover(true);
                    }}
                    onHoverEnd={() => {
                        resetMousePosition();
                        setIsHover(false);
                    }}
                    onTapStart={() => setIsPress(true)}
                    onTap={() => setIsPress(false)}
                    onTapCancel={() => setIsPress(false)}
                    onPointerMove={(e) => {
                        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                >
                    <motion.div
                        className="shapes"
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 }
                        }}
                    >
                        <div className="pink blush" />
                        <div className="blue blush" />
                        <div className="container">
                            <Suspense fallback={null}>
                                <Shapes
                                    isHover={isHover}
                                    isPress={isPress}
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                />
                            </Suspense>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                        className="label"
                    >
                        play
                    </motion.div>
                </motion.button>
            </MotionConfig> */}

        </Layout>
    )
}