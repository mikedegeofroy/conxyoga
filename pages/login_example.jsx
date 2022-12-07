import { auth, googleAuthProvider } from '../lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { SetStateAction, useContext, useState } from 'react';
import { UserContext } from '../lib/context';
import { useRouter } from 'next/router';

import { RegisterForm, SignOutButton } from '../components/registerform';

import Image from 'next/image';

import toast from 'react-hot-toast';
import Link from 'next/link';

export default function Login() {
    const { user } = useContext(UserContext);

    return (
        <div className="pt-16 mx-auto h-min-screen bg-white font-['Kuku']">
            {user ? <SignOutButton /> :
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center h-[80vh]">
                    <div className="w-52 mx-auto">
                        <h1 className='text-2xl	text-center'>Войти</h1>
                        <LoginForm />
                        <div className='grid grid-cols-4'>
                            <SignInWithGoogleButton />
                        </div>
                        {/* <p>Not a user? <Link href="/register"><a className='text-gray-600' >Register</a></Link></p> */}
                        <Link href="/register"><button className='block sm:hidden bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded container mx-auto my-4'>
                            Регистрация
                        </button></Link>
                    </div>
                    <div className='hidden sm:block'>
                        <RegisterForm />
                    </div>
                </div>
            }
        </div>
    )
}

function SignInWithGoogleButton() {
    const router = useRouter()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider).then(async (user) => {
            toast.success('Logged In')

            router.push('/dashboard')
        });
    }

    return (
        <div className='bg-white select-none cursor-pointer w-max shadow grid place-items-center text-center h-full hover:bg-slate-100 font-bold py-2 px-4 rounded container' onClick={signInWithGoogle}>
            <Image src="/icons/google.webp" width="20px" height="20px"></Image>
        </div>
    )
}

function LoginForm() {
    const router = useRouter()

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

                toast.success("Logged In")

                router.push('/dash')

            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div>
            <section>
                <form onSubmit={onSubmit}>
                    <h3>Почта</h3>
                    <input type="email" autoComplete='email' className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6' name="username" onChange={onChangeEmail} />
                    <h3>Пароль</h3>
                    <input type="password" className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="password" onChange={onChangePassword} />
                    <Link href="/ressetpasswd"><a className='text-gray-600' >Забыли пароль?</a></Link>
                    <button className='bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded container mx-auto my-4' type="submit">
                        Войти
                    </button>
                </form>
            </section>
        </div>
    )
}