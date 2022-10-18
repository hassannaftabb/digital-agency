import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../../components/UI/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SingUp = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required!'),
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
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        ).then(async (res) => {
          await setDoc(doc(db, 'users', res.user.uid), {
            ...values,
          }).then(async () => {
            const myDoc = doc(db, 'users', res.user.uid);
            await getDoc(myDoc).then((r) => {
              let name = r.data().name;
              localStorage.setItem(
                'user',
                JSON.stringify({ ...res.user, name })
              );
              setIsLoading(false);
            });
          });
          toast.success(
            `Welcome, ${res?.user.email}, you are in our registers now!`
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
            Get started today
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Create an account on Digital Agency to avail the best IT services.
          </p>
          <form
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          >
            <p className="text-lg font-medium">Sign up to Digital Agency.</p>
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter your name."
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />

                {formik.touched.name && Boolean(formik.errors.name) && (
                  <>
                    <div className="text-md font-bold text-red-600">
                      {formik.errors.name}
                    </div>
                  </>
                )}
              </div>
            </div>
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
                  placeholder="Create a strong password."
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
              title={'Resgister'}
              isLoading={isLoading}
            />
            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <Link className="underline" to="/sign-in">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
