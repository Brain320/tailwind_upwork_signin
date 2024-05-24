// import { PhotoIcon, UserCircleIcon } from 'heroicons'
import { Link } from 'react-router-dom';
export default function Register() {
    return (
        <div className='flex justify-center'>
            <div className='fixed top-0 leading-10 right-0'>
                <p className='text-md'>
                    Already have an account? &nbsp;
                    <Link to="/" className='text-green-500'>Log In</Link></p>
            </div>
            <div className="md:p-20 w-full md:w-1/2 ">
                <div className=" w-full" >
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to find work you love
                    </h2>
                </div>
                <div className="flex mt-10">
                    <button
                        className="w-1/2 rounded-md bg-transparent px-3 py-2 
                    text-sm font-semibold leading-6 border-2 border-black text-black shadow-sm focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 mr-1"
                    >
                        Continue with Apple
                    </button>
                    <button
                        className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
                    leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-1"
                    >
                        Continue with Google
                    </button>
                </div>
                <p className="btn-separator my-8x mt-10"><span className="font-weight-body">or</span></p>
                <form>
                    <div className='flex mt-10'>
                        <div className="w-1/2">
                            <label htmlFor="firstname" className="block text-sm text-left font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="firstname"
                                        className="block rounded-md flex-1 border-2 border-gray-500 py-1.5 pl-1 text-gray-700 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 ml-1">
                            <label htmlFor="lastname" className="block text-sm text-left font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        autoComplete="lastname"
                                        className="block rounded-md flex-1 border-2 border-gray-500 py-1.5 pl-1 text-gray-700 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <div className="flex">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block rounded-md flex-1 border-2 border-gray-500 py-1.5 pl-1 text-gray-700 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <label htmlFor="password" className="block text-sm text-left font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <div className="flex ">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    className="block rounded-md flex-1 border-2 border-gray-500 py-1.5 pl-1 text-gray-700 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <label htmlFor="firstname" className="block text-sm text-left font-medium leading-6 text-gray-900">
                            Country
                        </label>
                        <div className="mt-2">
                            <div className="flex">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                    sm:text-sm sm:leading-6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex gap-x-3 mt-10">
                    <div className="flex h-6 items-center">
                            <label className='text-sm leading-6 flex items-center'>
                                <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <span className="text-gray-500">Send me helpful emails to find rewarding work and job leads.</span>
                            </label>
                        </div>
                        
                    </div>
                    <div className="relative flex gap-x-3 mt-6">
                        <div className="flex h-6 items-center">
                            <label className='text-sm leading-6 flex items-center'>
                                <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <span className="text-gray-500">Yes, I understand and agree to the&nbsp;
                                <a href="#" className='a-link'>Upwork Terms of Service </a>, including the&nbsp;
                                <a href="#" className='a-link'>User Agreement</a> and <a href="#" className='a-link'>Privacy Policy</a> .</span>
                            </label>
                            
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 "
                        >
                            Create my account
                        </button>
                    </div>
                    <p className='mt-4'>Here to hire talent?  <span className='text-green-600'>Join as a client</span></p>
                </form>
            </div>
        </div>

    )
}