// import { Header } from "./CommonComponenet/Header/Header";
import { Receiver } from "./Socket/Receiver";
import Sender from "./Socket/Sender";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Sender />
      <Receiver />
    </div>
  );
}

export default App;
