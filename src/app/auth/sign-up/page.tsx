'use client'
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { useForm } from "react-hook-form"
import logo from '@/assets/10 mint logo.svg'
import Link from "next/link";
import toast from "react-hot-toast";



const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data: any) => {
        if (data.password !== data.confirm) {
            toast.error('confirm password does not match')
        } else {
            fetch('http://localhost:5000/api/auth/sign-up', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success('account created successfully')
                    } else {
                        toast.error('something went wrong')
                    }
                })
        }
    }

    return (
        <section className="h-screen mt-16">

            <div className="mx-auto">
                <Image src={logo} alt="login" className="w-28 block mx-auto" width={200} />
                <h1 className="text-2xl text-center mt-2">create new account</h1>
            </div>
            <form className="w-[30%] mx-auto space-y-6 mt-6" onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <Input {...register('email', { required: true })} placeholder="email" type="email" />
                    {errors.email?.type == 'required' && <span className="text-red-500 text-xs">email is required</span>}
                </div>

                <div>
                    <Input {...register('password', { required: true, minLength: 8 })} placeholder="enter Password" type="password" />
                    {errors.password?.type == 'required' && <span className="text-red-500 text-xs">password is required</span>}
                    {errors.password?.type == 'minLength' && <span className="text-red-500 text-xs">password must be 8 charcters</span>}
                </div>

                <div>
                    <Input {...register('confirm', { required: true, minLength: 8 })} placeholder="confirm Password" type="password" />
                    {errors.confirm?.type == 'required' && <span className="text-red-500 text-xs"> confirm password is required</span>}
                    {errors.confirm?.type == 'minLength' && <span className="text-red-500 text-xs"> password must be 8 charcters</span>}
                </div>

                <button className="bg-green-500 hover:bg-green-600 p-2 font-semibold rounded-lg text-white uppercase w-full" type="submit">Sign up</button>
            </form>


            <div className="text-sm font-semibold mt-8 flex items-center justify-center text-center mx-auto">
                <p>have an account?</p>
                <Link className="text-green-600" href='/auth/sign-up' >Sign Up</Link>
            </div>


        </section>
    );
};

export default SignUp;