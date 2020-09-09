import Layout from "../../components/layout";
import Button from "../../components/button";
import Card from "../../components/card";

import { collectionGroup, doc, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function Page() {


    const retreatsRef = collectionGroup(getFirestore(), 'retreats')

    // const giftsQuery = query(giftsRef, where("approved", "==", false))
    const retreatsQuery = query(retreatsRef)

    const [querySnapshot] = useCollection(retreatsQuery)

    const retreats = querySnapshot?.docs.map((doc) => {
        return { id: doc.id, data: doc.data() }
    });

    console.log("this is the query",retreats);

    return (
        <Layout color="white">
            <div className="grid grid-cols-1 w-full pt-32 px-10">
                <h1>Retiros</h1>
                <div className="py-8">
                    {retreats ? <>
                        {retreats.map((id, { name, }, index) => {

                            return (
                                <Card key={index} href="/retiros/yoga" src="/images/4FC54D83-23C8-44B7-BD20-D9C95A55DD4A.jpg" titulo={name} precio="349"></Card>
                            )

                        })}
                    </> : ""}


                    {/* <Card href="/retiros/yoga" src="/images/DSC_0335.JPG" titulo="Retiro de Yoga y Surf" precio="399"></Card>
                    <Card href="/retiros/yoga" src="/images/retiro.png" titulo="Retiro Deluxe" precio="499"></Card> */}
                    
                    <hr className="border-black"/>
                </div>
            </div>
        </Layout>
    )
}