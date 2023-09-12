import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  // make a default state
  const [countries, setCountry] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  const loaderElemennts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  // visited country handler
  const handleVisitedCountry = (country, isVisited) => {
    setVisitedCountry([...visitedCountry, country]);
  };

  // useEffect
  useEffect(() => {
    const getCountryData = async () => {
      setLoader(true);
      const URL = `https://restcountries.com/v3.1/all`;
      const req = await fetch(URL);
      const res = await req.json();
      setCountry(res);
      setLoader(false);
    };
    getCountryData();
  }, []);

  return (
    <>
      <div className="container pt-20 w-5/6 mx-auto ">
        <h1 className="text-3xl text-white">
          Country name List: {countries.length}
        </h1>

        <div className="visited-country">
          <h1 className="text-3xl my-5 text-white">Visited Country List:</h1>
          <div className="visited-country-list grid grid-cols-10 gap-4 border my-10 p-5">
            {visitedCountry.map((visited) => (
              <div key={visited.cca3} className={"card  bg-base-100 shadow-xl"}>
                <figure style={{ justifyContent: "start" }}>
                  <img
                    className="w-[6.25rem] h-[5rem] object-contain"
                    src={visited.flags.svg}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body px-0 py-5">
                  <h2 className="card-title"> {visited.name.common}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={loader ? "block loader grid grid-cols-5 gap-4" : "hidden"}
        >
          {loaderElemennts.map((loader, index) => (
            <div
              key={index}
              className="shadow rounded-md p-4 max-w-sm w-full mx-auto"
            >
              <div className="animate-pulse flex space-x-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="w-5/6 h-[10rem] bg-slate-700"></figure>
                  <div className="card-body px-0 py-2">
                    <h2 className="card-title"></h2>
                    <p></p>
                    <div className="card-actions ">
                      <div className="  bg-slate-700 w-3/6  h-4"></div>
                      <div className="  bg-slate-700 w-5/6  h-9"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-5 gap-4 ">
          {countries &&
            countries.map((country) => (
              <Country
                handleVisitedCountry={handleVisitedCountry}
                loader={loader}
                key={country.cca3}
                country={country}
              ></Country>
            ))}
        </div>
      </div>
    </>
  );
};

export default Countries;

//  0. make a default state
//  1. make a useEffect for fetching data from api country
//  2. get the data from the
//  3. show the data
