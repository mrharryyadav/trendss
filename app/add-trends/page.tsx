'use client'

import { useState } from "react";

function page() {
  const [valuesData, setValues] = useState<any>()
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const lines = valuesData.split(',');
    const cleanArray = lines.map((line:any) => [line])
    console.log("valuesData", cleanArray)
    const values = cleanArray
    let formData = { values }
    // Send the form data to a server-side component
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle a successful response
      setValues('')
      alert('Form data submitted successfully!')
      console.log('Form data submitted successfully!');
    } else {
      // Handle errors
      alert('Failed to submit the form data.')
      console.error('Failed to submit the form data.');
    }
  };

  return (
    <form className="p-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Data
        </label>
        <textarea
          id="message"
          name="message"
          value={valuesData}
          onChange={(e:any)=> setValues(e.target.value)}
          className="w-full h-32 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
  )
}

export default page