
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "users",
  initialState: [], // Updated initialState to an empty array
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, phone, dateOfBirth, gender, weekday } = action.payload;
      const userToUpdate = state.find(user => user.id === id);
      
      if (userToUpdate) {
          userToUpdate.name = name;
          userToUpdate.email = email;
          userToUpdate.phone = phone;
          userToUpdate.dateOfBirth = dateOfBirth;
          userToUpdate.gender = gender;
          userToUpdate.weekday = weekday;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id); // Using return statement to update state
    }
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
