import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login({ className }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios('/users/login', {
      method: 'post',
      data: {
        email: data.email,
        password: data.password,
      },
      baseURL: 'http://localhost:4000/api/',
    });
    console.log(res);
  };

  return (
    <div className="border rounded px-10 pb-7 flex flex-col align-middle self-center">
      <h2 className="font-bold text-2xl self-center py-5">Log In</h2>
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
          ref={register({ required: true })}
          className="p-2 border mb-6 rounded text-lg"
        />
        <input
          type="submit"
          className="bg-blue-500 text-gray-100 px-5 py-2 rounded shadow"
        />
      </form>
    </div>
  );
}

export default Login;
