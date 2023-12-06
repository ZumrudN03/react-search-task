import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";


const CountriesCard = () => {
  const [countries, setCountries] = useState([]);
  const [categorys, setCategorys] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [search, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="main">
      <div className="searchBar_bkg">
        <div className="searchBar">
          <div className="inpBar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search for a country..."
            />
          </div>
          <div className="selector">
            <select onChange={(e)=>setCategorys(e.target.value)}>
              <option value={"africa"}>Africa</option>
              <option value={"america"}>America</option>
              <option value={"asia"}>Asia</option>
              <option value={"europe"}>Europe</option>
              <option value={"oceania"}>Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="countriesCard">
        {countries
          .filter((item) =>
            item.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .filter((x) => x.region.toLowerCase().includes(categorys))
          .map((x) => (
            <ul className="card">
              <Link to={"/detail/name/" + x.name.common}>
                <li className="image">
                  <img src={x.flags.png} />
                </li>
                <li className="name">{x.name.common}</li>
                <li className="population">Population: {x.population}</li>
                <li className="region">Region: {x.region}</li>
                <li className="capital">Capital: {x.capital}</li>
              </Link>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default CountriesCard;
