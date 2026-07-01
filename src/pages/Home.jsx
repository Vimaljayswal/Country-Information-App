import React, { useState } from "react";
import Axios from "axios";
function Home() {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const countryDetails = async () => {
    if (!country) {
      setError("please Enter a city Name ");
      return;
    }

    setData(null);

    try {
      let response = await Axios.get(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`,
      );
      // console.log(response)
      console.log(response.data[0]);

      setData(response.data[0]);
    } catch (error) {
      setError("Country Not found...");
      console.log(error, "Error in Fetching Data ....");
    }
  };
  return (
    <>
      {/*--------------------------------------------------- input box ------------------------------------------- */}

      <div className="text-center py-25 px-5 bg-gradient-to-b from-[#144272] to-[#2C74B3] text-white">
        <p className="text-3xl font-bold">Explore Any Country Instantly</p>
        <p>
          Search any country to view its geography, population, capital and
          more.
        </p>
        <div>
          <input
            className="p-3  mt-5 h-10 w-2xs border-2  rounded-md"
            type="text"
            placeholder="Enter Country Name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button
            className="py-2 px-5 ml-3 h-10 bg-[#0A2647] text-white border-none rounded-md cursor-pointer"
            onClick={countryDetails}
          >
            Search
          </button>
        </div>
      </div>

      {/* ---------------------------------------------Country Details block---------------------------------------- */}

      <div>
       
        {data && (
          <>
           <table className="w-screen">
          <tr className="h-40 ">
            <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center "> <span style={{ fontWeight: "bold" }}> Flag :</span>{" "} </td>
            <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500"><img src={data.flags.png} alt={data.flags.alt} width="200px" className="text-center" /></td>
           </tr>

            <tr>
            <td class="text-center border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 h-20"> <span style={{ fontWeight: "bold" }}> Country Name :</span>{" "} </td>
             <td class="text-center border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">{data.name.common}{" "} </td>
            </tr>
            <tr className="h-20">
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}> Official Country Name :{" "} </span></td>
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center">{data.name.official}{" "}</td>
            </tr>

            <tr className="h-20">
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}> Capital : </span>{" "}</td>
             <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center">{data.capital[0]}</td> 
            </tr>

            <tr className="h-20">
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}> Region : </span>{" "}</td>
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center">{data.region}</td>
            </tr>

            <tr className="h-20">
             <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}> Population : </span>{" "}</td> 
             <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"> {data.population}</td>
            </tr>

            <tr className="h-20">
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}>Currency : </span> </td>
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center">{Object.values(data.currencies)[0].name}</td>
            </tr>

            <tr className="h-20">
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}> StartofWeek : </span></td>
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center">{data.startOfWeek}</td>
            </tr>
            <tr className="h-20">
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center"><span style={{ fontWeight: "bold" }}> Languages : </span></td>
              <td class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 text-center">{Object.values(data.languages)[0]}</td>
            </tr>
            </table>
          </>
        )}
        
      </div>

      {/* ----------------------------------------------------------------------------------------------------------- */}
      <section className="flex justify-center gap-5 p-12 flex-wrap">
        <div className="bg-[#F5F7FA] p-7 w-2xs h-28 text-center rounded-lg shadow-md">
          <h3>🌎 Geography</h3>
          <p>View location and map details.</p>
        </div>

        <div className="bg-[#F5F7FA] p-7 w-2xs h-28 text-center rounded-lg shadow-md">
          <h3>👥 Population</h3>
          <p>Know population statistics.</p>
        </div>

        <div className="bg-[#F5F7FA] p-7 w-2xs h-28 text-center rounded-lg shadow-md">
          <h3>🏛 Capital</h3>
          <p>Find capital city instantly.</p>
        </div>

        <div className="bg-[#F5F7FA] p-7 w-2xs h-28 text-center rounded-lg shadow-md">
          <h3>💰 Currency</h3>
          <p>Check country currency info.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
