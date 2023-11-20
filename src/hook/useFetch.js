import React from "react";

/* eslint-disable react-hooks/exhaustive-deps */

export const useFetch = (url) => {
    const [data, setData] = React.useState({})
    const [error, setError] = React.useState('')

    const token = JSON.parse(sessionStorage.getItem("token"));

    React.useEffect(() => {
      const requestOption = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        
      }
        async function fetchData() {
          try {
            const response = await fetch(url, requestOption);
            const data = await response.json();
            if(!response.ok){
              setError(response.statusText)
             
            }
            setData(data);
          } catch (error) {
            setError(error.message)
           
          }       
        }
        fetchData();
      }, []); 

   

return {data, error}
}



// export const useFetchPost = (url, order) => {
//     const [data, setData] = React.useState({})
//     const token = JSON.parse(sessionStorage.getItem("token"));

//     React.useEffect(() => {

//         async function fetchData() {
//           const response = await fetch( url, {
//             method: 'POST',
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body:JSON.stringify(order)
            
//           });
//           const data = await response.json();
//           setData(data);
//         }
    
//         fetchData();
//       }, []);

// return {data}
// }
/* eslint-enable react-hooks/exhaustive-deps */
/* eslint-enable react-hooks/exhaustive-deps */
/* eslint-enable react-hooks/exhaustive-deps */
/* eslint-enable react-hooks/exhaustive-deps */
/* eslint-enable react-hooks/exhaustive-deps */
