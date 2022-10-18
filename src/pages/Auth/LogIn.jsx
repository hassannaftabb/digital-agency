import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { auth } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../../components/UI/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LogIn = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Please enter a valid email!')
        .required('Email is required!'),
      password: yup
        .string()
        .min(6, 'Password must be at least 6 characters!')
        .required('Password is required!'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        ).then(async (res) => {
          setIsLoading(false);
          toast.success(
            `Welcome back, ${res?.user.email}, lets explore again!`
          );
        });
        setTimeout(() => {
          window.location = '/';
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        toast.error(`${error.message}`);
      }
    },
  });
  return (
    <div>
      <Toaster />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome, mate!
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lets's get back to exploring amazing IT services from Digital
            Agency!
          </p>
          <form
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          >
            <p className="text-lg font-medium">Sign in to your account</p>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter your email."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
                {formik.touched.email && Boolean(formik.errors.email) && (
                  <>
                    <div className="text-md font-bold text-red-600">
                      {formik.errors.email}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter your password."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  {showPassword ? (
                    <AiOutlineEye
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xl text-gray-400 cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xl text-gray-400 cursor-pointer"
                    />
                  )}
                </span>
                {formik.touched.password && Boolean(formik.errors.password) && (
                  <>
                    <div className="text-md font-bold text-red-600">
                      {formik.errors.password}
                    </div>
                  </>
                )}
              </div>
            </div>
            <Button
              onSubmit={formik.handleSubmit}
              title={'SignIn'}
              isLoading={isLoading}
            />
            <p className="text-center text-sm text-gray-500">
              No account?
              <Link className="underline" to="/sign-up">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
