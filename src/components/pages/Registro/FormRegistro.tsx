"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormRegistro = () => {
        return (
            <div className='flex justify-center items-center m-auto'>
                <Formik
                    initialValues={{
                        nickname: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={Yup.object().shape({
                        nickname: Yup.string()
                            .required('Apelido é necessario'),
                        email: Yup.string()
                            .email('Email é invalido')
                            .required('Email é necessario'),
                        password: Yup.string()
                            .min(6, 'Sua senha precisa ter no minimo 6 caracteres')
                            .required('É necessario uma senha'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password')], 'Suas senhas não combinam')
                            .required('É necessario confirmar sua senha')
                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                    render={({ errors, touched }) => (
                            <Form className='h-full w-full text-black'>
                                <div className='p-2 text-black text-sm'>
                                    <p className='text-xl bold'>Criar conta</p>
                                    <br/>
                                    <span>ou </span>
                                    <a className='text-[#4F75FF] underline' href='/login'>entrar com conta existente</a>
                                </div>
                                <div className="p-2">
                                    <Field placeholder="Apelido" name="nickname" type="text" className={'placeholder-black-600 w-full p-2 form-control bg-transparent border-2 rounded-lg border-black' + (errors.nickname && touched.nickname ? ' is-invalid' : '')} />
                                    <ErrorMessage name="nickname" component="div" className="invalid-feedback text-red-600 text-sm" />
                                </div>
                                <div className="p-2">
                                    <Field placeholder="Email" name="email" type="text" className= {'placeholder-black-600 w-full p-2 form-control bg-transparent border-2 rounded-lg border-black' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback  text-red-600 text-sm" />
                                </div>
                                <div className="p-2">
                                    <Field placeholder="Senha" name="password" type="password" className={'placeholder-black-600 w-full p-2 form-control bg-transparent border-2 rounded-lg border-black' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback  text-red-600 text-sm" />
                                </div>
                                <div className="p-2">
                                    <Field placeholder="Confirmar Senha" name="confirmPassword" type="password" className={'placeholder-black-600 w-full p-2 form-control bg-transparent border-2 rounded-lg border-black' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback  text-red-600 text-sm" />
                                </div>
                                <div className="p-2">
                                    <button type="submit" className="btn w-full text-white btn-color-black mr-2">Registrar</button>
                                </div>
                                <div className='p-2 text-sm text-white'>
                                    <a className='text-[#4F75FF] underline' href='/esqueceu-senha'>Esqueci minha senha</a>
                                </div>
                            </Form>
                )}
                />
            </div>

        )
}
export default FormRegistro