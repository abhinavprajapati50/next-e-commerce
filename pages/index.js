import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';
import { Inter } from 'next/font/google';
import { data } from '../utils/data';
// import Layout from '../../components/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(data);
  return (
    <>


      <Layout title="Home Page">

        {/* <p className=""> Next  Amazone App</p> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">

          {
            data.products.map((cur, i) => <ProductItem product={cur} key={i} />)
          }
        </div>
      </Layout>

    </>
  )
}
