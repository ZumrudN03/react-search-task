import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  let { name } = useParams();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((res) => res.json())
      .then((data) => setDetail(data[0]));
  }, []);

  return (
    <div className="detail">
      {detail && (
        <ul className="cardList" key={detail.id}>
          <div className="detailImg">
            <li className="image">
              <img src={detail.flags?.png} />
            </li>
          </div>
          <div className="detail_right">
            <div className="detail_right_up">
              <div className="detail_right_left">
                <li className="detailName">{detail.name?.common}</li>
                <li>
                  Native Name:{" "}
                  {detail.name?.nativeName
                    ? Object.values(detail.name.nativeName)[0].official
                    : "N/A"}
                </li>
                <li>
                  Population: {detail.population?.toLocaleString() || "N/A"}
                </li>
                <li>Region: {detail.region || "N/A"}</li>
                <li>Sub Region: {detail.subregion || "N/A"}</li>
                <li>Capital: {detail.capital || "N/A"}</li>
              </div>
              <div className="detail_right_right">
                <li>
                  Top Level Domain: {detail.tld ? detail.tld.join(", ") : "N/A"}
                </li>
                <li>
                  Currencies:{" "}
                  {detail.currencies
                    ? Object.values(detail.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : "N/A"}
                </li>
                <li>
                  Languages:{" "}
                  {detail.languages
                    ? Object.values(detail.languages).join(", ")
                    : "N/A"}
                </li>
              </div>
            </div>
            <div className="borders">
              {detail.borders && <li>Borders: {detail.borders.join(", ")}</li>}
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Detail;
