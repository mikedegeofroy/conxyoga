import Layout from "../components/layout";

export default function Page() {

    return (
        <Layout>
            <div className="grid grid-cols-2 w-full h-screen">
                <div className="pt-24 p-10 overflow-hidden flex flex-col justify-between">
                    <h1 className="text-[4vw] leading-tight">La importancia del yoga restaurativo</h1>
                    <p className="bottom-0">El yoga restaurativo refuerza la flexibilidad, la fuerza muscular, aumenta la tonificación, liberas estrés, mejorar la postura corporal, es ideal para los que padecen dolores de espalda y tras un entrenamiento intenso.</p>
                </div>
                <div className="bg-[url('/images/test.jpeg')] bg-center">

                </div> 
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-64 w-64 bg-[url('/images/test.jpeg')] rounded-full">

            </div>
        </Layout>
    )
}