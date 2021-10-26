import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getSignatures, getSignature } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const SignaturePage = ({ signature }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading signature...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{signature.Nama_Menu} signature</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2 m-auto h-40 w-40">
        <NextImage media={signature.Gambar} />
      </div>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {signature.Nama_Menu} - ${signature.Harga}
          </h4>
          <div className="mt-1 text-gray-600">{signature.description}</div>
        </div>

        {signature.status === "published" ? (
          <button
            className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            data-item-id={signature.id}
            data-item-price={signature.Harga}
            data-item-url={router.asPath}
            data-item-description={signature.description}
            data-item-image={getStrapiMedia(
              signature.Gambar.formats.thumbnail.url
            )}
            data-item-name={signature.Nama_Menu}
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

export default SignaturePage

export async function getStaticProps({ params }) {
  const signature = await getSignature(params.slug)
  return { props: { signature } }
}

export async function getStaticPaths() {
  const signatures = await getSignatures()
  return {
    paths: signatures.map((_signature) => {
      return {
        params: { slug: _signature.slug },
      }
    }),
    fallback: true,
  }
}
