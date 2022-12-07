import AuthCheck from '../../components/authcheck'
import { auth, googleAuthProvider } from '../../lib/firebase'
import Layout from '../../components/layout'
import toast from 'react-hot-toast'

export default function UserProfile(){

  return(
    <AuthCheck>
      <Layout>
        <SignOutButton></SignOutButton>
      </Layout>
    </AuthCheck>
  )
}

export function SignOutButton() {
  return <button onClick={() => { auth.signOut(); toast.success('Logged Out') }}>Log Out</button>;
}

function ProfileData() {

  const userDoc = doc(getFirestore(), 'users', auth.currentUser.uid);

  const [user] = useDocumentDataOnce(userDoc)

  return (
      <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mb-6">

      </div>
  )
}