// eslint-disable-next-line react/prop-types
const Search = ({ search, onSetSearch, onFetchWeather }) => {
  const handleSearchWeather = (city) => {
    onFetchWeather(city);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search for city"
        value={search}
        onChange={(e) => onSetSearch(e.target.value)}
      />
      <button
        onClick={() => handleSearchWeather(search)}
        className="btn search-btn"
      >
        search
      </button>
    </div>
  );
};

export default Search;
