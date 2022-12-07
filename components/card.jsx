import Button from "./button";
import Image from "next/image";
import { useState } from 'react';

export default function Card({ src="/images/4FC54D83-23C8-44B7-BD20-D9C95A55DD4A.jpg", titulo = "Retiro de Yoga y Surf", precio = 500, href="" }) {

    return (
        <>
            <hr className="border-black"/>

            <div className="grid grid-cols-6 py-5">

                <div className="pr-5 col-span-2 h-44 overflow-hidden w-full grid place-items-center">
                    <Image
                        src={src}
                        alt="Picture of the author"
                        // fill
                        width={300}
                        height={400}
                        // layout="responsive"
                    />
                </div>

                <div className="h-full flex flex-col justify-between grow col-span-2">
                    <h1 className="text-3xl">{titulo}</h1>
                    <div className="underline text-sm">Tamraght, MARRUECOS</div>
                    <div className="text-sm">Traslado al aeropuerto incluido / Imartido en español / Desayunos y comidas incluidas</div>
                    <div className="text-sm font-medium w-full grid grid-cols-2">
                        <div className="inline">Duracion:</div>
                        <div className="inline">Cuando:</div>
                    </div>
                </div>

                <div className="h-full text-right col-span-2 flex justify-between flex-col items-end">
                    <div>                                
                        <h1 className="text-3xl font-bold">{precio}€</h1>
                        <p className="text-xs">por persona</p>
                    </div>
                    <Button href={href} text="Seleccionar"></Button>
                </div>

            </div>

        </>
    )
}