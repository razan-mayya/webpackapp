import { Container } from "react-bootstrap";
import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/Header";
import { Cards } from "./Components/Cards";
import { useState } from "react";
import { data } from "./data.js";
function App() {
  const [Data, setData] = useState(data);
  const filtersearch = (word) => {
    if (word != '') {
      setData(data.filter(i => { return i.title === word }))
    }
  }
  return (
    <div>
      <NavBar filtersearch={filtersearch} />
      <Container>
        <Header datacard={Data} setdata={setData} arrdata={data} />
        <Cards datacard={Data} />
      </Container>
    </div>
  );
}

export default App;
