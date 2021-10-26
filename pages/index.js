import Head from "next/head"
import SignaturesList from "../components/SignaturesList"
import ProductsList from "../components/ProductsList"
import TeasList from "../components/TeasList"
import EspressosList from "../components/EspressosList"
import TraditionalsList from "../components/TraditionalsList"
import NoncoffeeList from "../components/NoncoffeeList"
import RunningText from "../components/RunningText"
import {
  getProducts,
  getSignatures,
  getTeas,
  getNoncoffees,
  getEspressos,
  getTraditionals,
  getRunningtexts,
} from "../utils/api"

const { parse, stringify } = require("flatted/cjs")

const HomePage = ({
  products,
  signatures,
  noncoffees,
  teas,
  espressos,
  traditionals,
  runningtexts,
}) => {
  return (
    <div className="w-full">
      <Head>
        <title>Monkee Products List</title>
      </Head>
      <div>
        <div className="w-full flex flex-wrap mx-auto gap-2 mt-2">
          <a className="w-full text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Our Signature
          </a>
        </div>
        <SignaturesList signatures={signatures} />
        <div className="w-full flex flex-wrap mx-auto gap-2 mt-2">
          <a className="w-full text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Tea Based
          </a>
        </div>
        <TeasList teas={teas} />
        <div className="w-full flex flex-wrap mx-auto gap-2 mt-2">
          <a className="w-full text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Non Coffee
          </a>
        </div>
        <NoncoffeeList noncoffees={noncoffees} />
        <div className="w-full flex flex-wrap mx-auto gap-2 mt-2">
          <a className="w-full text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Espressos Based
          </a>
        </div>
        <EspressosList espressos={espressos} />
        <div className="w-full flex flex-wrap mx-auto gap-2 mt-2">
          <a className="w-full text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Traditional Coffee
          </a>
        </div>
        <TraditionalsList traditionals={traditionals} />
        {/* <ProductsList products={products} /> */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  const signatures = await getSignatures()
  const teas = await getTeas()
  const espressos = await getEspressos()
  const traditionals = await getTraditionals()
  const noncoffees = await getNoncoffees()
  const runningtexts = await getRunningtexts()

  return {
    props: {
      runningtexts,
      products,
      signatures,
      teas,
      noncoffees,
      espressos,
      traditionals,
    },
  }
}

export default HomePage
