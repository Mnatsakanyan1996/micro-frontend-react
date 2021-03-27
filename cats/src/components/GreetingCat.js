function GreetingCat(props) {
  const { greeting } = props.match.params;
  console.log(greeting)
  const greetingCatImagePath = `https://cataas.com/cat/says/${greeting}`;

  return (
    <div>
      <h3>Greet me</h3>
      <div>
        {greeting
          ? <img src={greetingCatImagePath} width="400px" alt="Cat" />
          : <h4>Needs a greeting</h4>}
      </div>
    </div>
  );
};

export default GreetingCat;
