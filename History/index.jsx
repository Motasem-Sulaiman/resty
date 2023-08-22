import { useState } from "react";
function History(props) {
  const [history, setHistory] = useState(false);
  // const [historyData,setHistoryData]=useState("")

  //     const newData=props.historyData.filter((item)=>{
  //         item.url===historyData
  //       })

  // console.log(newData)

  return (
    <>
      <button onClick={() => setHistory(!history)}>
        {history && "hide history"}
        {!history && "show history"}
      </button>

      {history &&
        props.historyData.map((item, idx) => {
          return <div key={idx}>{item.url}</div>;
        })}
      {/* <Result/>  */}
    </>
  );
}
export default History;
