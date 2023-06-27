"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormLogin = () => {
        return (
            <div className='flex justify-center items-center m-auto'>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Email é invalido')
                            .required('Email é necessario'),
                        password: Yup.string()
                            .min(6, 'Sua senha precisa ter no minimo 6 caracteres')
                            .required('É necessario uma senha'),
                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                    render={({ errors, touched }) => (
                            <Form className='h-full w-full text-black'>
                                <div className='p-2 text-black text-sm'>
                                    <p className='text-xl bold'>Entrar no App</p>
                                    <br/>
                                    <span>ou </span>
                                    <a className='text-[#4F75FF] underline'href='/registro'>criar uma conta</a>
                                </div>
                                <div className="p-2">
                                    <Field placeholder="Email" name="email" type="text" className= {'placeholder-black-600 w-full p-2 form-control bg-transparent border-2 rounded-lg border-black' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback  text-red-600 text-sm" />
                                </div>
                                <div className="p-2">
                                    <Field placeholder="Senha" name="password" type="password" className={'placeholder-black-600 p-2 w-full form-control bg-transparent border-2 rounded-lg border-black' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback  text-red-600 text-sm" />
                                </div>
                                <div className="p-2">
                                    <button type="submit" className="btn w-full text-white btn-color-black mr-2">Entrar</button>
                                </div>
                            </Form>
                )}
                />
            </div>

        )
}
export default FormLogin