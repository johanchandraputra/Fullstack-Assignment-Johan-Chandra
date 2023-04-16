import ProductForm from '@/components/products/form'
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function form() {
    return (
        <>
            <Head>
                <title>Product Form</title>
                <meta name="description" content="Form Product" key="desc" />
            </Head>
            <div>
                <Navbar/>
                <ProductForm/>
            </div>
        </>

    )
}
