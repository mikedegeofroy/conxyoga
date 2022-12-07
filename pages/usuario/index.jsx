import AuthCheck from '../../components/authcheck'
import { auth, googleAuthProvider } from '../../lib/firebase'
import { getFirestore, doc, collection, query } from 'firebase/firestore';
import { useDocumentDataOnce, useCollection } from 'react-firebase-hooks/firestore';
import Layout from '../../components/layout'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router';

export default function UserProfile() {

  return (
    <AuthCheck>
      <Layout pageTitleRaw={auth?.currentUser?.displayName} color="white">
        <ProfileData></ProfileData>
      </Layout>
    </AuthCheck>
  )
}


function ProfileData() {
  
  const userDoc = doc(getFirestore(), 'users', auth.currentUser.uid);
  
  const [user] = useDocumentDataOnce(userDoc)
  
  console.log(user);
  
  return (
    <div className="mb-6 pt-48 px-24">
      <div>
        <div className="flex flex-row justify-between">
          <div className='text-5xl pr-5 grid place-items-center'>Hola {auth.currentUser.displayName}!</div>
          <img
            className='rounded-full'
            src={auth.currentUser.photoURL}
            height={180}
            width={180}
          />
        </div>
        <SignOutButton></SignOutButton>
      </div>
    </div>
  )
  
}


export function SignOutButton() {

  const router = useRouter();


  return <button onClick={() => { auth.signOut(); toast.success('Logged Out'); router.push('/login')}}>Log Out</button>;
}

