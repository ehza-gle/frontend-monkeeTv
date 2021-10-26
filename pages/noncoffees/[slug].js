import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getNoncoffees, getNoncoffee } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const NoncoffeePage = ({ noncoffee }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading noncoffee...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{noncoffee.Nama_Menu} noncoffee</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2 m-auto h-40 w-40">
        <NextImage media={noncoffee.Gambar} />
      </div>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {noncoffee.Nama_Menu} - ${noncoffee.Harga}
          </h4>
          <div className="mt-1 text-gray-600">{noncoffee.description}</div>
        </div>

        {noncoffee.status === "published" ? (
          <button
            className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            data-item-id={noncoffee.id}
            data-item-price={noncoffee.Harga}
            data-item-url={router.asPath}
            data-item-description={noncoffee.description}
            data-item-image={getStrapiMedia(
              noncoffee.Gambar.formats.thumbnail.url
            )}
            data-item-name={noncoffee.Nama_Menu}
            v-bind="customFields"
          >
            Add to cart
          </button>
        ) : (
          <div className="text-center mr-10 mb-1" v-else>
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Coming soon...
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                This article is not available yet.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NoncoffeePage

export async function getStaticProps({ params }) {
  const noncoffee = await getNonCoffee(params.slug)
  return { props: { noncoffee } }
}

export async function getStaticPaths() {
  const noncofees = await getNonCoffees()
  return {
    paths: noncoffees.map((_noncoffee) => {
      return {
        params: { slug: _noncoffee.slug },
      }
    }),
    fallback: true,
  }
}
