import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [values, setValues] = useState({
        name: '',
        username: '',
        phone: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(res => {
                setValues(res.data);
                console.log(res.data,'==============')
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, values)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Update User</h1>
                <div className='d-flex justify-content-end'>
                    <Link to='/' className='btn btn-success px-3'>
                        Home
                    </Link>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                            type='text'
                            className='form-control'
                            placeholder='Enter Name'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input
                            value={values.username}
                            onChange={e => setValues({ ...values, username: e.target.value })}
                            type='email'
                            className='form-control'
                            placeholder='Enter Email'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Phone</label>
                        <input
                            value={values.phone}
                            onChange={e => setValues({ ...values, phone: e.target.value })}
                            type='tel'
                            className='form-control'
                            placeholder='Enter Phone'
                        />
                    </div>
                    <div className='d-grid gap-2'>
                        <button className='btn btn-primary' type='submit'>Update</button>
                       
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;
