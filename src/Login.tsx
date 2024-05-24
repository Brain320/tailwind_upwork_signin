import React from 'react';
import {Link} from 'react-router-dom';
export default function Login() {
    return (
        <>
            <div className="flex min-h-full justify-center px-6 py-12 lg:px-8 items-center">

                <div className="mt-10 sm-w-1/3  border-2 border-gray-200 rounded-md">
                    <div className=" sm:w-full" >
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Log in to Upwork
                        </h2>
                    </div>
                    <form className="space-y-6 sm:mx-20" action="#" method="POST" >
                        <div>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-gray-300 
                                    placeholder:text-gray-400 focus:ring-gray-700 sm:text-sm sm:leading-6"
                                    placeholder="Username or Email"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Continue
                            </button>
                        </div>
                        <p className="btn-separator my-8x"><span className="font-weight-body">or</span></p>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Continue with Google
                            </button>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-white-600 border-2 border-black px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Continue with Apple
                            </button>
                        </div>
                        <div className="mb-5" />

                        <p className="btn-separator my-8x"><span className="font-weight-body"> Don't have an Upwork account?</span></p>
                        <div className="text-center" style={{marginBottom: 30}}>
                            <Link
                                to="/register"
                                className="w-60 border-green-600 border-2 rounded-md px-3 py-1.5 text-sm 
                                font-semibold leading-6 text-green-600 focus-visible:outline 
                                focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}