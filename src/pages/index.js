import ProductList from '@/components/products/index'
import Navbar from '@/components/navbar/index'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Product List</title>
        <meta name="description" content="List Product" key="desc" />
      </Head>
      <main>
        <Navbar/>
        <ProductList />
      </main>
    </>
  )
}
