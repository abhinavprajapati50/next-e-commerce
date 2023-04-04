import ProductItem from "@/components/ProductItem";
import { data } from "@/utils/data";
import { useRouter } from "next/router";

const slug = () => {
    const router = useRouter()
    const { slug } = router.query;
    console.log("🚀 ~ file: [slug].js:7 ~ slug ~ slug:", slug)
    const datass = data.products.find(curProduct => {
        console.log("🚀 ~ file: [slug].js:9 ~ datass ~ curProduct:", curProduct)
        return curProduct.slug === slug
    })
    console.log("🚀 ~ file: [slug].js:8 ~ slug ~ data:", datass)
    return (
        // <Layout products={data} />
        <ProductItem product={datass} singleProduct={true} />
    )
}



export default slug