import Layout from "../../components/layout";
import Button from "../../components/button";
import Card from "../../components/card";

export default function Page() {

    return (
        <Layout color="white">
            <div className="grid grid-cols-1 w-full pt-32 px-10">
                <h1>Retiros</h1>
                <div className="py-8">

                    <Card href="/retiros/yoga" src="/images/4FC54D83-23C8-44B7-BD20-D9C95A55DD4A.jpg" titulo="Retiro de Yoga" precio="349"></Card>
                    <Card href="/retiros/yoga" src="/images/DSC_0335.JPG" titulo="Retiro de Yoga y Surf" precio="399"></Card>
                    <Card href="/retiros/yoga" src="/images/retiro.png" titulo="Retiro Deluxe" precio="499"></Card>
                    
                    <hr className="border-black"/>
                </div>
            </div>
        </Layout>
    )
}