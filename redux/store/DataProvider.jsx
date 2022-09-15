// import React, { createContext, useContext, useState } from "react";
// // api
// import { getWriteups } from "../api/writeup-api";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState({});

//   const getData = async () => {
//     const writeups = await getWriteups();
//     setData(writeups);
//   };

//   // console.log("DataProvider: ", data);

//   return (
//     <DataContext.Provider value={{ data, getData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => {
//   const context = useContext(DataContext);
//   if (context === undefined) {
//     throw new Error("useData must be used within a DataProvider");
//   }
//   return context;
// };
