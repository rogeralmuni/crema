// UserRegistrationPage.js

import React from 'react';
import UserRegistrationForm from './userregistrationform';

const UserRegistrationPage = () => {
  const handleRegistration = (formData) => {
    // Handle registration logic, such as making an API request
    console.log(formData);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <UserRegistrationForm onRegistration={handleRegistration} />
    </div>
  );
};

export default UserRegistrationPage;
