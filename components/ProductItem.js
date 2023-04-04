import Image from "next/image"
import Link from "next/link"

const ProductItem = ({ product, singleProduct = false }) => {
    console.log("🚀 ~ file: ProductItem.js:3 ~ ProductItem ~ product:", product)
    return (

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={"/product/" + product.slug} >
                <Image src={'/' + product.img} width={150} height={100} alt={product.name} />
            </Link>
            {singleProduct && <div className="product-description">
                <div className="pl-5 pb-5">
                    <ul>
                        <li>

                            <p>Brand - {product.brand}</p>
                            {/* <div class="flex items-center mt-2.5 mb-5"> */}
                            rarting -  {product.rating}
                            {/* <img src={product.img} alt="" /> */}
                            {/* </div> */}
                        </li>
                        <li>
                            Review - {product.numReview}
                        </li>
                        <li> In Stock - {product.countInStock} </li>
                    </ul>
                </div>
            </div>}
            <div class="px-5 pb-5">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                <p>{product.description}</p>
                <div class="flex items-center mt-2.5 mb-5">
                    {/* <img src={product.img} alt="" /> */}
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>

    )
}

export default ProductItem