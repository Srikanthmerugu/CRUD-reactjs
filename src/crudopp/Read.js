import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    const[data , setData] = useState([])
    const {id} = useParams();

    useEffect (()=>{
        axios.get(`http://localhost:5000/users/${id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    })
  return (
    <div >
       <div className='d-flex vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pb-5 rounded pt-5'>
        <h3 className='mb-4'>User Details</h3>
        <div className='mb-3'>
          <strong>Name:</strong> <span>{data.name}</span>
        </div>
        <div className='mb-3'>
          <strong>Email:</strong> <span>{data.email}</span>
        </div>
        <div className='mb-3'>
          <strong>Phone:</strong> <span>{data.phone}</span>
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Read