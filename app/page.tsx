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
    setTrends(trends)

  }


  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
      <div className="flex">
      </div>
      <ul className="mt-4">
        {
          trends?.map((x: any, i: any) => {
            return (
              <li className="flex justify-between items-center py-2 border-b border-gray-200" key={i}>
                <span className="text-gray-800">#{x[0]}</span>
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}
