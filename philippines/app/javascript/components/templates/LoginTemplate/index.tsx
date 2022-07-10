import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';

const LoginTemplate: FC = memo(() => (
  <main className="container mx-auto mt-28 px-5">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
          Username
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
          Password
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
        </label>
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <Button>
          Sign In
        </Button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          to="/"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  </main>
));

export default LoginTemplate;
