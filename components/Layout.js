import RunningText from "../components/RunningText"

const Layout = ({ children, categories, runningtexts }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen flex flex-col min-h-screen w-full">
        {/* <CategoryButtons categories={categories}/> */}
      <RunningText runningtexts={runningtexts} />
        <div className="flex-grow ml-2 mr-2" >{children} </div>
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export async function getStaticProps() {
  const runningtexts  = await getRunningtexts();
  
  return { props: { runningtexts } }
}

export default Layout
