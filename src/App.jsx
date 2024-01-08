import Typography from "./components/common/Typography";

function App() {
  return (
    <>
      <Typography tag="h1" variant="dark-primary" customClasses="border-2 border-primary">
        Hello <Typography tag="span" variant="primary">World</Typography>
      </Typography>


    </>
  );
}

export default App;
