import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Signup({ className }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [submitError, setSubmitError] = useState();
  const onSubmit = async (data) => {
    console.log(data);
    // console.log(errors);
    try {
      const res = await axios('/users/', {
        method: 'post',
        data: {
          email: data.email,
          password: data.password,
        },
        baseURL: 'http://localhost:4000/api/',
      });
      console.log(`Res: ${res}`);
    } catch (err) {
      setSubmitError(err);
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <div className="border rounded px-10 pb-7 flex flex-col align-middle self-center">
      <h2 className="font-bold text-2xl self-center py-5">Sign Up</h2>
      {console.log(`submitError: ${submitError}`)}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center">
        <input
          name="email"
          type="text"
          placeholder="Email"
          ref={register({ required: true })}
          className="p-2 border mb-3 rounded text-lg"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true, minLength: 8, maxLength: 120 })}
          className="p-2 border mb-3 rounded text-lg"
        />

        <input
          name="password2"
          type="password"
          placeholder="Confirm Password"
          ref={register({
            required: true,
            validate: (value) => value === watch('password'),
          })}
          className="p-2 border mb-6 rounded text-lg"
        />
        <input
          type="submit"
          className="bg-blue-500 text-gray-100 px-5 py-2 rounded shadow"
        />
        <div className="pt-5">
          {errors.email && (
            <p className="text-sm py-2 text-red-700">
              Please enter a valid email address
            </p>
          )}
          {errors.password && (
            <p className="text-sm py-2 text-red-700">
              Please enter a valid password
            </p>
          )}
          {errors.password2 && (
            <p className="text-sm py-2 text-red-700">Passwords must match</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Signup;
