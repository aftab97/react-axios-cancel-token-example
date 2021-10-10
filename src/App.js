import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  let cancelToken;
  let url = "https://candykabin.co.uk/api";

  const handleType = async (e) => {
    const search = e.target.value;
    console.log(search);

    if (typeof cancelToken !== "undefined") {
      cancelToken.cancel("canceling the previous requests");
    }

    cancelToken = axios.CancelToken.source();

    const result = await axios.get(`${url}/product/search?find=${search}`, {
      cancelToken: cancelToken.token,
    });

    console.table(result.data);
  };

  return (
    <div className="App">
      <input onChange={(e) => handleType(e)} placeholder="type here" />
    </div>
  );
}

export default App;
