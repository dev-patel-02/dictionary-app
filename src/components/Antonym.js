const Synonym = ({ searchData }) => {
  return (
    <div className="mx-10">
      <h2 className="text-xl font-bold py-6">Antonym</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {searchData?.meanings?.map((means) =>
            means?.antonyms?.map((ant) => <li>{ant}</li>)
          )}
      </div>
    </div>
  );
};

export default Synonym;