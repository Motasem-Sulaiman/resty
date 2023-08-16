function Results(props) {
  return (
    <>
      <section>
        <pre data-testid="resultTest">
          {props.data ? JSON.stringify(props.data, undefined, 2) : <h3>loading....</h3>}
        </pre>
      </section>
    </>
  );
}

export default Results;
