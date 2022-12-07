import Layout from "../components/layout";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    // const router = useRouter()

    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');

    const onChangeEmail = (e) => {
        setFormEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setFormPassword(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, formEmail, formPassword)
            .then(async (user) => {

                // toast.success("Logged In")

                // router.push('/dashboard')

            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <Layout color="white" hide="true">
            <div className="grid grid-cols-2 w-full h-screen">
                <div className="pt-24 p-10 overflow-hidden grid place-items-center">                
                    <section className="w-2/3 mx-auto">
                        <form onSubmit={onSubmit}>


                            <input type="email" autoComplete='email' className='appearance-none border rounded-full border-gray-900 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6' name="username" onChange={onChangeEmail} />

                            <input type="password" className='appearance-none border rounded-full border-gray-900 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' name="password" onChange={onChangePassword} />

                            <button className='w-full cursor-pointe px-5 py-2 border-black border-solid border-[1px] bg-[#f0e6e0]' type="submit">
                                Entrar
                            </button>
                            <Link href="/ressetpasswd"><a className='text-gray-600' >Olvidaste tu contraseña?</a></Link>
                        </form>
                    </section>
                </div>
                <div className="bg-gradient-to-br from-[#f3e9e4] to-[#f0e8e3]">
                </div> 
            </div>
            <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-10 h-64 w-64 bg-cover bg-center bg-[url('/images/DSC_0299.JPG')] rounded-full">

            </div>
        </Layout>
    )
}