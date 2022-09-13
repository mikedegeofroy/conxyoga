import { useState } from 'react'

export default function SendMailButton() {

    const [formEmail, setFormEmail] = useState('')

    const onChangeEmail = (e) => {
        setFormEmail(e.target.value)
        console.log(formEmail)
    }

    const onSubmit = async (e) => {

        e.preventDefault();

        const res = await fetch(`api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: formEmail}),
        })
    };



    return (
        <div className='w-full bg-black my-20 p-10 flex justify-between'>
            <div>
                <h1 className='text-[2.8rem] text-white'>Prueba gratuitamente</h1>
                <p className='text-white text-[1.4rem] font-light'>Subscribete a la newsletter para recibir una receta gratuita.</p>
            </div>
            <form className='flex flex-col justify-center w-2/5' onSubmit={onSubmit}>
                <div className='flex justify-center'>
                    <input type="text" className='h-fit w-full text-[1.2rem] rounded-lg p-2' placeholder="Email Address" onChange={onChangeEmail}>
                    </input>
                    <button type="submit" className='font-["Poppins"] font-medium ml-2 h-full px-4 w-24 bg-white rounded-lg text-[1.2rem]'>Entrar</button>
                </div>
            </form>
        </div>
    )
}