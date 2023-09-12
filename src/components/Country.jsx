import { useState } from "react";


const Country = ({country,handleVisitedCountry}) => {
  const [isVisited, setIsVisited] = useState(false);
  // isvidited
  const handleIsVisited = () => {
    setIsVisited(!isVisited);
    console.log(isVisited);
  };
  const { name, flags } = country;
  return (
    <>
      <div className={"card w-96 bg-base-100 shadow-xl"}>
        <figure className="w-[15rem] h-[10rem] text-left">
          <img
            className="w-full h-full object-cover"
            src={flags.svg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body px-0 py-5">
          <h2 className="card-title"> {name.common} </h2>
          <div className="card-actions ">
            <button
              className={isVisited ? "btn btn-neutral" : "btn btn-primary"}
              onClick={() =>{ handleVisitedCountry(country); handleIsVisited() }}
            >
              {isVisited ? "Visited" : "Visit"}
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
