import React from "react";
import Antonym from "./Antonym";
import ResultList from "./ResultList";
import Synonym from "./Synonym";

function Result({ error, errorElm, searchData }) {
  return (
    <div>
      {error ? (
        errorElm
      ) : (
        <div>
          {searchData && (
            <div>
              <ResultList searchData={searchData} />
              <Synonym searchData={searchData} />
              <Antonym searchData={searchData} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Result;
