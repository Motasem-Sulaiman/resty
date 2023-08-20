function Results(props) {

  return (
    <>
      <section>
        <pre data-testid="resultTest">
          {props.data ? JSON.stringify(props.data, undefined, 2) : <h3>loading....</h3>}
          {/* {console.log(props.data)} */}
{/* {props.data2&&(
props.data2.map((item,index)=>{


return(


<div key={index}>

  <p>UserId: {JSON.stringify(item.userId)}</p>
  <p>URL: {JSON.stringify(item.body)}</p>
</div>


)

})





)} */}


        </pre>
      </section>
    </>
  );
}

export default Results;

