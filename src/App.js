import axios from "axios";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Result from "./components/Result";
import { ImWarning } from "react-icons/im";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (searchValue) {
      try {
        setLoading(true);
        const res = await axios(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
        );
        setSearchData(res.data[0]);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      // try {
      //   setLoading(true);
      //   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      //     .then((res) => res.json())
      //     .then((data) => setSearchData(data[0]));
      //   setSearchValue("");
      // } catch (err) {
      // } finally {
      //   setLoading(false);
      // }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  if (loading) {
    return <Loading />;
  }

  let errorElm;
  errorElm = (
    <h3 className="text-center mt-10 flex justify-center items-center font-semibold text-red-500">
      <ImWarning className="mr-4" size={24} /> No Word Found
    </h3>
  );

  return (
    <div className="container mx-auto">
      <Header
        searchData={searchData}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />
      <Result error={error} errorElm={errorElm} searchData={searchData} />
    </div>
  );
}

export default App;
