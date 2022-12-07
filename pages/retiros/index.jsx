import Layout from "../../components/layout";
import Link from 'next/link'

export default function Page() {

    return (
        <Layout color="white" hide="true">
            <div className="grid grid-cols-2 w-full h-screen">
                <div className="pt-24 p-10 overflow-hidden flex flex-col justify-between h-4/5">
                    <div>
                        <h1 className="text-[4vw] font-bold leading-tight pb-2">RETIROS</h1>
                        <hr className="border-black w-3/5" />
                    </div>
                    <p className="bottom-0">El yoga restaurativo refuerza la flexibilidad, la fuerza muscular, aumenta la tonificación, liberas estrés, mejorar la postura corporal, es ideal para los que padecen dolores de espalda y tras un entrenamiento intenso.</p>
                    <Link href={'/retiros/opciones'}>
                        <button className="px-5 py-2 border-black border-solid border-[1px] w-1/2">Ver retiros</button>
                    </Link>
                </div>
                <div className="bg-[url('/images/retiro.png')] bg-center bg-cover">

                </div> 
            </div>
        </Layout>
    )
}