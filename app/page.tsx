'use client'
import { useEffect, useState } from "react";
const fetchData = async () => {

  const options = {
    method: 'GET',
  };
  try {
    const response = await fetch('/api/getdata', options);
    const result = await response.json();
    const { data } = result
    return data
  } catch (error) {
    console.error(error);
  }

}

export default function Home() {

  const [trends, setTrends] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const trends: any = await fetchData()
    console.log("dehjnfkd", trends)
    setTrends(trends)

  }
 
    return (
      <div className="mt-2 ml-2">
        <h2 className="text-xl font-semibold mb-2">Welcome to Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {trends.map((item:any, index) =>{
          const trendsData = JSON.parse(item[2])
          return(
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">{item[1]}</h2>
            <hr/>
            <ul>
              {trendsData.map((listItem:any, listIndex:any) => (
                <li key={listIndex} className="mb-1 p-2 flex">
                  <span className="text-gray-600 mr-1" >{listIndex+1}.</span>
                 <div>
                 {listItem?.title}
                  <p className="text-gray-600 mb-4 mr-3">{listItem?.tweetCount}</p>
                 </div>
                  
                </li>
              ))}
            </ul>
          </div>
        )})
      }
      </div>
      </div>
    );



 
}
