
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find(user => user.id === parseInt(id));
    const { name, email, phone: initialPhone, dateOfBirth: initialDateOfBirth, gender: initialGender, weekday: initialWeekday } = existingUser;
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const [phone, setPhone] = useState(initialPhone);
    const [dateOfBirth, setDateOfBirth] = useState(initialDateOfBirth);
    const [gender, setGender] = useState(initialGender);
    const [weekday, setWeekday] = useState(initialWeekday);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: parseInt(id),
            name: uname,
            email: uemail,
            phone,
            dateOfBirth,
            gender,
            weekday
        }));
        navigate('/');
    };

    return (
        <div>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                    <h3>Update User</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter name'
                                value={uname} onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' className='form-control' placeholder='Enter email'
                                value={uemail} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name='phone' className='form-control' placeholder='Enter phone'
                                value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                            <input type="date" name='dateOfBirth' className='form-control'
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
                        <button className="btn btn-info">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;
