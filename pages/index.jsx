import Layout from '../components/layout'

export default function Home() {

    return (
        <Layout>
            <div className='grid place-items-center mx-5 md:mx-10 h-screen'>
                <div className='font-["Sauvage-Antique"] grid-cols-6 grid leading-none max-w-[1100px]'>
                    <div className='text-[9rem] w-fit col-start-1 col-span-5'>LO QUE</div>
                    <div className='text-[9rem] w-fit col-start-3 col-span-5'>BUSCAS</div>
                    <div className='text-[9rem] w-fit col-start-2'>ESTA</div>
                    <div className='text-[9rem] w-fit col-span-6'>DENTRO DE TI</div>
                </div>
            </div>

            {/* Background */}

            <div>

            </div>

        </Layout>
    )
}