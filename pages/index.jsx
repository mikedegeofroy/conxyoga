import Layout from '../components/layout'
import Image from 'next/image'

import { logEvent, getAnalytics } from 'firebase/analytics'
import { analytics } from '../lib/firebase'

import { useEffect } from 'react'

// import { Suspense } from 'react';

export default function Home() {

    useEffect( () => {

        const analytics = getAnalytics();
        logEvent(analytics, 'view_item');

    },[])


    return (
        <Layout color="white">
            <div className='pt-24'>                
                <div className="h-1/2 grid place-items-center bg-center bg-cover bg-[url('/images/DSC_0388.JPG')] p-48">

                    <Image className='cursor-pointer brightness-[200]' draggable="false" src={'/images/logo.png'} width={'2023px'} height={'344px'}></Image>
                </div>
                <div className='flex p-5 h-[75vh] overflow-hidden'>
                    <div className='grid place-items-end text-3xl w-2/12'>
                        <span className='text-[2em] transform origin-top-left -rotate-90'>YOGA</span>
                    </div>
                    <div className="w-10/12 grid grid-cols-3 gap-5">
                        <div>
                            <div className="h-1/2 bg-center bg-cover bg-[url('/images/8A02722D-68E3-4CCD-A0E3-63BAD09A6292.jpg')]">
                                
                            </div>
                            <h1 className='text-3xl font-medium my-5'>Hatha</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem nemo eos officiis ipsa reiciendis velit quia quam? Est, eos.</p>
                        </div>
                        <div>
                            <div className="h-1/2 bg-center bg-cover bg-[url('/images/B6E68E12-42D2-4973-8D96-0CD8E9A2999D.jpg')]">
                                
                            </div>
                            <h1 className='text-3xl font-medium my-5'>Hatha</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem nemo eos officiis ipsa reiciendis velit quia quam? Est, eos.</p>
                        </div>
                        <div>
                            <div className="h-1/2 bg-center bg-cover bg-[url('/images/4FC54D83-23C8-44B7-BD20-D9C95A55DD4A.jpg')]">
                                
                            </div>
                            <h1 className='text-3xl font-medium my-5'>Hatha</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem nemo eos officiis ipsa reiciendis velit quia quam? Est, eos.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[50vh] mx-10 flex justify-between flex-col overflow-hidden'>
                    <h1 className='text-6xl text-right'>PRODUCTOS</h1>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='text-2xl'>Echa un vistazo a nuestros productos de salud y belleza recomendados.</p>
                            <p className='text-2xl p-5 rounded-full border-black border-solid w-fit'>Ir a tienda</p>
                        </div>

                    </div>
                    <h1 className='text-6xl'>RECOMENDADOS</h1>
                </div>
            </div>
        </Layout>
    )
}