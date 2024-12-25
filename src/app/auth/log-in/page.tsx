'use client'
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { useForm } from "react-hook-form"
import logo from '@/assets/10 mint logo.svg'
import Link from "next/link";



const LoginIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <section className="h-screen mt-16">


            <div className="mx-auto">
                <Image src={logo} alt="login" className="w-28 block mx-auto" width={200} />
                <h1 className="text-2xl text-center mt-2">Login your account</h1>
            </div>
            <form className="w-[30%] mx-auto space-y-6 mt-6" onSubmit={handleSubmit((data) => console.log(data))}>
                <div>
                    <Input {...register('email', { required: true })} placeholder="email" type="email" />
                    {errors.email?.type == 'required' && <span className="text-red-500 text-xs">email is required</span>}
                </div>

                <div>
                    <Input {...register('password', { required: true, minLength: 8 })} placeholder="enter Password" type="password" />
                    {errors.password?.type == 'required' && <span className="text-red-500 text-xs">password is required</span>}
                    {errors.password?.type == 'minLength' && <span className="text-red-500 text-xs">password must be 8 charcters</span>}
                </div>

                <button className="bg-green-500 hover:bg-green-600 p-2 font-semibold rounded-lg text-white uppercase w-full" type="submit">Log in</button>
            </form>


            <div className="text-sm font-semibold mt-10 flex items-center justify-center text-center mx-auto">
                <p>dont have an account?</p>
                <Link className="text-green-600" href='/auth/sign-up' >Sign Up</Link>
            </div>


        </section>
    );
};

export default LoginIn;