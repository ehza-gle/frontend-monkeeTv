import NextImage from "./Image"
import Link from "next/link"

const ProductsList = ({ products }) => {
  return (
    <div className="w-full mb-20 grid grid-cols-3 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={_product.image} />
                </div>
              </div>
              <div className="grid grid-flow-col justify-items-around justify-around pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 text-sm text-gray-700">{_product.title}</h4>
                <div className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  IDR {_product.price}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
