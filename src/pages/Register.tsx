// import { PhotoIcon, UserCircleIcon } from 'heroicons'
import {Link} from 'react-router-dom';
import MyInput from "../components/MyInput";
import MyCheckBox from "../components/MyCheckBox";
import React from "react";
import PasswordInput from "../components/PasswordInput";

function Header() {
    return (
        <div className="px-4 w-full flex items-center h-[64px] fixed t-0 bg-white">
            <div className="w-[82px]">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true">
                        <path fill="#14a800"
                              d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path>
                        <path fill="#14a800"
                              d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path>
                        <polygon fill="#14a800"
                                 points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon> <path
                        fill="#14a800"
                        d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path>
                        <path fill="#14a800"
                              d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z">
                        </path>
                    </svg>
                </span>
            </div>
            <div className='fixed top-0 leading-10 right-0 hidden md:block'>
                <p className='text-md'>
                    Already have an account? &nbsp;
                    <Link to="/" className='text-green-500'>Log In</Link></p>
            </div>
        </div>
    )
}

export default function Register() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center'>
                <div className="p-4 md:p-20 w-full lg:w-3/4 mt-20">
                    <div className=" w-full">
                        <h2 className=" text-center text-3xl leading-9 tracking-tight text-gray-900">
                            Sign up to find work you love
                        </h2>
                    </div>
                    <div className="md:flex my-6">
                        <button
                            className="md:w-1/2 flex justify-center items-center w-full rounded-xl bg-transparent px-3 py-2
                    text-base leading-6 border-[1px] border-black text-black shadow-sm focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2 md:mr-1"
                        >
                            <svg width="10px" height="11.4px" version="1.1" viewBox="0 0 3.8469 4.7625"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(-64.345 -143.35)">
                                    <path
                                        d="m65.3 148.04c-0.28391-0.17313-0.67141-0.76332-0.84045-1.2801-0.08795-0.26886-0.11025-0.42084-0.11353-0.77372-5e-3 -0.53416 0.07013-0.78453 0.32071-1.0692 0.32908-0.37386 0.80475-0.48983 1.2754-0.31094 0.28741 0.10923 0.40289 0.10558 0.79215-0.0251 0.25755-0.0864 0.3669-0.10301 0.53413-0.0809 0.27892 0.0369 0.51512 0.14539 0.6838 0.31406l0.138 0.138-0.15036 0.12394c-0.35848 0.29549-0.46412 0.84523-0.24639 1.2822 0.09783 0.19631 0.33073 0.42321 0.48834 0.47574 0.07682 0.0256-0.27148 0.68647-0.49609 0.94128-0.31615 0.35864-0.47304 0.40634-0.86417 0.26274-0.38534-0.14149-0.49243-0.14492-0.83466-0.0268-0.37222 0.12848-0.51369 0.13441-0.68687 0.0288zm0.95956-3.6652c-0.04406-0.11481 0.09887-0.49259 0.25567-0.67578 0.14967-0.17485 0.45436-0.3477 0.61294-0.3477 0.08074 0 0.08756 0.0177 0.06932 0.17944-0.0488 0.43295-0.36807 0.79774-0.77487 0.88535-0.10672 0.0229-0.14178 0.0141-0.16305-0.0413z"></path>
                                </g>
                            </svg>
                            Continue with Apple
                        </button>
                        <button
                            className="relative flex justify-center items-center md:w-1/2 w-full rounded-xl bg-[#4285f4] px-3 py-2 text-base
                            leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:ml-1 mt-4 md:mt-0"
                        >
                            <div className="absolute left-0">
                                <svg width='38' height='38' className="rounded-xl" viewBox='0 0 101.33 101.33'
                                     xmlns='http://www.w3.org/2000/svg'>
                                    <path fill='#fff' d='M0 0h101.33v101.33H0z'/>
                                    <path
                                        d='M50.667 36.167c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85c-4.16-3.87-9.59-6.25-16.06-6.25-9.38 0-17.49 5.38-21.44 13.22l7.98 6.19c1.89-5.69 7.2-9.91 13.46-9.91z'
                                        fill='#ea4335'/>
                                    <path
                                        d='M73.647 51.217c0-1.57-.15-3.09-.38-4.55h-22.6v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                                        fill='#4285f4'/>
                                    <path
                                        d='M37.197 55.257c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19c-1.63 3.24-2.55 6.9-2.55 10.78s.92 7.54 2.56 10.78z'
                                        fill='#fbbc05'/>
                                    <path
                                        d='M50.667 74.667c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19c3.96 7.85 12.07 13.23 21.45 13.23z'
                                        fill='#34a853'/>
                                    <path d='M26.667 26.667h48v48h-48z' fill='none'/>
                                </svg>
                            </div>
                            Continue with Google
                        </button>
                    </div>
                    <p className="btn-separator my-6"><span className="font-weight-body">or</span></p>
                    <form>
                        <div className='flex mt-12'>
                            <div className="w-1/2">
                                <MyInput name="firstname" label="First name"/>
                            </div>
                            <div className="w-1/2 ml-1">
                                <MyInput name="lastname" label="Last name"/>
                            </div>
                        </div>
                        <div className="w-full mt-3">
                            <MyInput name="email" label="Email" type="email"/>
                        </div>
                        <div className="w-full mt-3">
                            <label htmlFor="password"
                                   className="block text-base text-semibold text-left font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <PasswordInput />
                            </div>
                        </div>
                        <div className="w-full mt-3">
                            <label htmlFor="firstname"
                                   className="block text-base text-semibold text-left font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <div className="flex">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-3 px-3 text-gray-900
                                    ring-1 ring-gray-300
                                    sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <MyCheckBox className="mt-10 mb-4" content={<span>Send me helpful emails to find rewarding work and job leads.</span>}/>
                        <MyCheckBox content={<span className="text-gray-500">Yes, I understand and agree to the&nbsp;
                            <a href="#" className='a-link'>Upwork Terms of Service </a>, including the&nbsp;
                            <a href="#" className='a-link'>User Agreement</a> and
                                        <a href="#" className='a-link'>Privacy Policy</a> .</span>}/>
                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 "
                            >
                                Create my account
                            </button>
                        </div>
                        <p className='mt-4'>Here to hire talent? <span
                            className='text-green-600'>Join as a client</span></p>
                    </form>
                </div>
            </div>
        </div>


    )
}