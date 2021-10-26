import NextImage from "./Image"
import Link from "next/link"

const NoncoffeeList = ({ noncoffees }) => {
  return (
    <div className="w-full mb-4 grid grid-cols-3 gap-4 mt-8">
      {noncoffees.map((_noncoffee) => (
        <div
          key={_noncoffee.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/noncoffees/${_noncoffee.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={_noncoffee.Gambar} />
                </div>
              </div>
              <div className="grid grid-flow-col justify-items-around justify-around pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 text-sm text-gray-700">
                  {_noncoffee.title}
                </h4>
                <div className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  IDR {_noncoffee.Harga}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default NoncoffeeList
