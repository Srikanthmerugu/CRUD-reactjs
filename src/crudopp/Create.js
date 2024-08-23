import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/users', values)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <div className='d-flex justify-content-end'>
                    <Link to='/' className='btn btn-success px-3'>
                        Home
                    </Link>
                </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
            required
              onChange={e => setValues({ ...values, name: e.target.value })}
              type='text'
              className='form-control'
              placeholder='Enter Name'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
            required
              onChange={e => setValues({ ...values, username: e.target.value })}
              type='email'
              className='form-control'
              placeholder='Enter Email'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Phone</label>
            <input
            required
              onChange={e => setValues({ ...values, phone: e.target.value })}
              type='tel'
              className='form-control'
              placeholder='Enter Phone'
            />
          </div>
          <div className='d-grid gap-2'>
            <button className='btn btn-primary' type='submit'>Submit</button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
