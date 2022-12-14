import { auth, googleAuthProvider } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, writeBatch, getFirestore } from 'firebase/firestore'
import { useState } from 'react';
import router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Image from 'next/image';

function SignInWithGoogleButton() {

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider).then(async (user) => {
            const userDoc = doc(getFirestore(), 'users', user.user.uid)

            const batch = writeBatch(getFirestore());

            batch.set(userDoc, { email: user.user.email });

            await batch.commit();
        }).catch((error) => {
            console.log(error)
            toast.error("Error")
        });
    }

    return (
        <div className='bg-white select-none cursor-pointer w-max shadow grid place-items-center text-center h-full hover:bg-slate-100 font-bold py-2 px-4 rounded container' onClick={signInWithGoogle}>
            <Image src="/icons/google.webp" width="20px" height="20px"></Image>
        </div>
    )
}

export function SignOutButton() {
    return <button onClick={() => { auth.signOut(); toast.success(`Signed Out`) }}>Log Out</button>;
}

export function RegisterForm() {

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

        createUserWithEmailAndPassword(auth, formEmail, formPassword).then(async (user) => {

            const userDoc = doc(getFirestore(), 'users', user.user.uid)

            const batch = writeBatch(getFirestore());

            batch.set(userDoc, { email: user.user.email });

            await batch.commit();

            toast.success("Created account")

            router.push('/dashboard')
        }).catch((error) => {
            console.log(error)
            toast.error("Error")
        })
    };

    return (
        <div className="w-52 mx-auto">
            <h1 className='text-2xl	text-center'>????????????????????????</h1>
            <form onSubmit={onSubmit}>
                <h3>??????????</h3>
                <input type="email" autoComplete='email' className="font-['Roboto'] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6" name="username" onChange={onChangeEmail} />
                <h3>????????????</h3>
                <input type="password" className="font-['Roboto'] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-6" name="password" onChange={onChangePassword} />
                <button className="bg-black hover:bg-slate-900 text-white font-bold rounded container w-full py-2 my-4 px-4" type="submit">
                    ????????????????????????????????????
                </button>
                <div className='grid grid-cols-4'>
                    <SignInWithGoogleButton />
                </div>
            </form>
        </div>
    )
}