import React from "react";

function ResultList({ searchData }) {
  return (
    <div className="mx-4 md:mx-10 py-4">
      <h2 className="text-xl font-semibold">Meaning with Definitions</h2>
      <ul>
        {searchData?.meanings?.map((means) =>
          means?.definitions
            ?.map((def) => (
              <div key={def.definition}>
                <li className="py-2 list-disc mx-4 md:mx-10">
                  {def.definition}
                </li>
                <hr />
              </div>
            ))
            .splice(0, 2)
        )}
      </ul>
    </div>
  );
}

export default ResultList;
