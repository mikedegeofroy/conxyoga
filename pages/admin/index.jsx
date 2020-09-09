import { collection, doc, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { auth, googleAuthProvider } from '../../lib/firebase'
import { useCollection } from 'react-firebase-hooks/firestore';
import { UserContext } from '../../lib/context';

export default function Admin(){

  const [page, setPage] = useState(<Dashboard/>);
  const [index, setIndex] = useState(0);

  const { user } = useContext(UserContext);

  // Cursos
  // Retiros
  // Detox
  // Autocuidado
  // Publicationes
  // Live

  return (<div>
      {user && user.providerData[0].email == "mikedegeofroy@gmail.com" ? <>

        <div className='flex flex-row p-5'>
          <div className='w-fit grid grid-cols-1 m-5 gap-5'>
            <div onClick={() => {setPage(<Dashboard/>); setIndex(0)} } className={ (index == 0 ? 'text-black ' : 'text-gray-500 ') + 'px-4 py-2 rounded-md cursor-pointer w-fit'}>
              <h1 className='text-3xl font-medium'>Dashboard</h1>
            </div>
            <div onClick={() => {setPage(<Courses/>); setIndex(1)} } className={ (index == 1 ? 'text-black ' : 'text-gray-500 ') + 'px-4 py-2 rounded-md cursor-pointer w-fit'}>
              <h1 className='text-3xl font-medium'>Cursos</h1>
            </div>
            <div onClick={() => {setPage(<Retreat/>); setIndex(2)} } className={ (index == 2 ? 'text-black ' : 'text-gray-500 ') + 'px-4 py-2 rounded-md cursor-pointer w-fit'}>
              <h1 className='text-3xl font-medium'>Retiros</h1>
            </div>
            <div onClick={() => {setPage(<Detox/>); setIndex(3)} } className={ (index == 3 ? 'text-black ' : 'text-gray-500 ') + 'px-4 py-2 rounded-md cursor-pointer w-fit'}>
              <h1 className='text-3xl font-medium'>Autocuidado</h1>
            </div>
            <div onClick={() => {setPage(<Feed/>); setIndex(4)} } className={ (index == 4 ? 'text-black ' : 'text-gray-500 ') + 'px-4 py-2 rounded-md cursor-pointer w-fit'}>
              <h1 className='text-3xl font-medium'>Publicaciones</h1>
            </div>
          </div>
          <div>
            {page}
          </div>
        </div>

      </> : <>No tienes parmisos para acceder a esta pagina.</>}
    </div>
  )

}


export function Dashboard(){

  return (
  <div className='p-5'> 
    <div>
      <div className='text-5xl pr-5 grid place-items-center'>Hola {auth.currentUser.displayName}!</div>
    </div>
  </div>
  )
}

export function Courses(){

  return (<> This is the courses page </>)

}

export function Retreat(){

  return (<> This is the retreat page </>)

}

export function Detox(){

  return (<> This is the detox page </>)

}

export function Feed(){

  return (<> This is the feed page </>)

}