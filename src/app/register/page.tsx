// create register page with form using data in User at models folder and send data to backend server the UI use tailwindcss  and make like NextAuth login page if the user email is exist in database the user will be redirected to login page
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import bcrypt from 'bcryptjs';
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
export default function Register() {
    const addUser = async (addUserForm:FormData) => {
        'use server'
        const name = addUserForm.get('name');
        const telephone = addUserForm.get('telephone');
        const email = addUserForm.get('email');
        const password = addUserForm.get("password") as string;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        try {
            await dbConnect();
            const user = await User.create({
                "name":name,
                "email": email,
                "password":hashedPassword,
                "role": "user",
                "telephone": telephone
            });
            console.log(user);
        } catch (error) {
            console.log(error);
        }
        revalidateTag("users")
        redirect("/api/auth/signin")
    }
    return (
       // create register page with form using data in User at models folder and send data to backend server the UI use tailwindcss  and make like NextAuth login page if the user email is exist in database the user will be redirected to login page
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action={addUser}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                                Telephone
                            </label>
                            <div className="mt-1">
                                <input
                                    id="telephone"
                                    name="telephone"
                                    type="text"
                                    autoComplete="telephone"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                                    sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

