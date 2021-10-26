import NextImage from "./Image"
import Link from "next/link"

const TraditionalsList = ({ traditionals }) => {
  return (
    <div className="w-full mb-4 grid grid-cols-3 gap-4 mt-8">
      {traditionals.map((traditional) => (
        <div
          key={traditional.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/traditionals/${traditional.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={traditional.Gambar} />
                </div>
              </div>
              <div className="grid grid-flow-col justify-items-around justify-around pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 text-sm text-gray-700">
                  {traditional.title}
                </h4>
                <div className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  IDR {traditional.Harga}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TraditionalsList
