import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res =>
            {
                const reversedData = res.data.reverse();
                setData(reversedData);
            })
            .catch(err => console.log(err))
    }, [])


    
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://localhost:5000/users/${id}`)
                .then(res => {
                    setData(data.filter(user => user.id !== id)
              )
              console.log(res,"===================")
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 '>
            <h1 className=''>List of users</h1>
            <div className='w-75 rounded bg-white border shadow px-5 pt-2 scrollable-div'>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-success px-3'>
                        Create +
                    </Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone </th>
                            <th>Read / Edit / Delele </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                {/* <td></td> */}
                                <td>{d.name}</td>
                                <td>{d.username}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button 
                                        onClick={() => handleDelete(d.id)} 
                                        className='btn btn-sm btn-danger me-2'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
