import Layout from "../../components/layout";

export default function Page() {

    return (
        <Layout invert="true">
            <div className="grid grid-cols-2 w-full h-screen">
                <div className="bg-[url('/images/test.jpeg')]">

                </div>
                <div className="pt-24 p-10 overflow-hidden flex flex-col justify-center">
                    <h1 className="text-[4vw] leading-tight text-center">La depuración ideal para darle brillo a tu piel desde dentro</h1>
                    <p className="text-center">El yoga restaurativo refuerza la flexibilidad, la fuerza muscular, aumenta la tonificación, liberas estrés, mejorar la postura corporal, es ideal para los que padecen dolores de espalda y tras un entrenamiento intenso.</p>
                </div>
            </div>
        </Layout>
    )
}