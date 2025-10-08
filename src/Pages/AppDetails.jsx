import React from 'react'
import { useLoaderData } from 'react-router'

const AppDetails = () => {
  const appdata = useLoaderData();
console.log( 'this data id num is ',appdata);

  return (
    <div className='m-32'>
      appdetiles..............................
      data:{appdata.id}
    </div>
  )
}

export default AppDetails
