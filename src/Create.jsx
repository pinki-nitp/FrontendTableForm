

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [weekday, setWeekday] = useState([]);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users.length + 1, name, email, phone, dateOfBirth, gender, weekday }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter name"
                            value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email"
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" className="form-control" name="phone" placeholder="Enter phone"
                            value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="date" className="form-control" name="dateOfBirth"
                            value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label><br />
                        <input type="radio" id="male" name="gender" value="male"
                            checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" id="female" name="gender" value="female"
                            checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <label htmlFor="weekday">Weekday:</label><br />
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                            <div key={day}>
                                <input type="checkbox" id={day} name={day} value={day}
                                    checked={weekday.includes(day)} onChange={e => {
                                        if (e.target.checked) {
                                            setWeekday(prevState => [...prevState, day]);
                                        } else {
                                            setWeekday(prevState => prevState.filter(item => item !== day));
                                        }
                                    }} />
                                <label htmlFor={day}>{day}</label><br />
                            </div>
                        ))}
                    </div>
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
