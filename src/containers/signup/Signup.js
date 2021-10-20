import React,{useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/input/Input'
import Error from '../../components/error/Error'
import { useSelector,useDispatch } from 'react-redux'
import { register } from '../../redux/types/TypeRegister'
import { toast } from 'react-toastify'
export default function Signup(props) {

    const users=useSelector(state=>state.users.users)
    const dispatch=useDispatch()

    const initialValues={
        username:'',
        email:'',
        password:'',
    }

    const validationSchema=Yup.object({
        username:Yup.string()
                .required('username obligatoire'),
        email:Yup.string()
                .email('Veuillez saisir une email valide')
                .required('email obligatoire'),
        password:Yup.string()
                .required('password obligatoire')
                .min(8,'Veuillez saisir au moin 8 cartere pour le password')
    })

    const formik=useFormik({
        initialValues:initialValues,
        validationSchema:validationSchema,
        onSubmit:()=>{
            validateRegister()
            
        }
    })

    const verifyIfUsernameExist=(table,username)=>{
        for(var i=0 ;i<table.length;i++){
            if(table[i].username===username){
                toast.error('username exist')
                return true
            }
        }
    }
    const verifyIfEmailExist=(table,email)=>{
        for(var i=0 ;i<table.length;i++){
            if(table[i].email===email){
                toast.error('email exist')
                return true
            }
        }
    }

    const validateRegister=()=>{
        const user={
            username:formik.values.username,
            email:formik.values.email,
            password:formik.values.password
        }

        if(verifyIfUsernameExist(users,user.username) || verifyIfEmailExist(users,user.email)){
            return
        }

        dispatch(register(user))

        formik.resetForm()

        console.log(users)
    }


 
    return (
        <div className="user signupBx">
            <div className="formBx">
                <form onSubmit={formik.handleSubmit}>
                    <h2>Create an account</h2>
                    <Input type='text' placeholder='Username' value={formik.values.username} name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.username && <Error error={'steevy'}/>}
                    <Input type='email' placeholder='Email' value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && <Error error={'steevy'}/>}
                    <Input type='password' placeholder='Mot de passe' value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && <Error error={'steevy'}/>}<br/>
                    <Input type='submit'  value='Sign Up'/>
                    <p className="signup">
                        Already have an account ?
                        <a href="#" onClick={props.onToggleForm}>Sign in.</a>
                    </p>
                </form>
            </div>
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
        </div>
    )
}
