import Layout from "../../components/layout";
import Button from "../../components/button";
import Image from "next/image";

export default function Page() {

    return (
        <Layout color="white">
            <div className="grid grid-cols-2 px-10 pt-32">
                <div className="w-full">
                    <div className="grid grid-cols-1">
                        <h1 className="text-[4vw] leading-tight pb-5">Retiro Yoga & Surf</h1>
                        <hr className="border-black py-4"/>
                        <p className="bottom-0">El yoga restaurativo refuerza la flexibilidad, la fuerza muscular, aumenta la tonificación, liberas estrés, mejorar la postura corporal, es ideal para los que padecen dolores de espalda y tras un entrenamiento intenso.</p>
                    </div>
                    <div>
                        <p><b>Instructores</b></p> 

                        <div>
                            {/* <Image></Image> */}
                        </div>

                    </div>
                    <div>
                        <p><b>Que incluye</b></p> 

                        <div>
                            {/* <Image></Image> */}
                        </div>

                    </div>
                    <div>
                        <p><b>Estilos de yoga</b></p> 

                        <div>
                            {/* <Image></Image> */}
                        </div>

                    </div>
                </div>
                <div>
                    <div className="bg-brown w-full">

                        <div className="float-right">
                            <Image
                                src={'/images/retiro2.png'}
                                alt="Picture of the author"
                                // fill
                                width={300}
                                height={400}
                                // layout="responsive"
                            />
                        </div>

                        <div className="bg-[#f8f3f0] w-3/4 float-right mt-8 h-full p-9">
                            <p className="text-sm pb-2">3 dias / 2 noches</p>
                            <p className="text-gray-500 text-xs pb-2">Desde:</p>
                            <h1 className="text-4xl font-bold">400€</h1>

                            <div className="w-full rounded-full bg-white p-2 px-4 mt-8 border-black border mb-8">
                                <p className="text-gray-500 text-sm">Seleccionar fecha de llegada</p>
                            </div>

                            <Button href={"Hey"} text="Seleccionar"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}