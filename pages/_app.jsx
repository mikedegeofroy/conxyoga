import '../styles/global.css';
import Head from 'next/head';
import { UserContext } from '../lib/context'
import { useUserData } from '../hooks/hooks'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps: { session, ...pageProps } }){

  const userData = useUserData();

  console.log(userData);

  return (
    <UserContext.Provider value={userData}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </UserContext.Provider>
  );
} 


export default MyApp;