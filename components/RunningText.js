const time = new Date().toLocaleTimeString("ID")
import moment from "moment"

const RunningText = ({ runningtexts }) => {
  return (
    <div>
      {runningtexts.map((_runningtexts) => (
        <div
          key={_runningtexts.id}
          className="bottom-0 fixed inline-flex bg-yellow-400 pl-0 ml-0 text-4xl"
        >
          <div class="text-center mx-auto pl-2 max-w-xs bg-yellow-400">
            {moment().format("LT")}
          </div>
          <div className="ml-4 bg-green-300 min-w-full">
            <marquee direction="left">{_runningtexts.text}</marquee>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RunningText
