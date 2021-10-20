import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../components/input/Input'
import Error from '../../components/error/Error'
import { toast } from 'react-toastify'
import { login } from '../../redux/types/TypeLogin'
export default function Signin(props) {

    //const SweetAlert = withSwalInstance(swal);
    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.login.user)
    const isLogin = useSelector(state => state.login.isLogin)
    const dispatch = useDispatch()

    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .required('Username Required'),
        password: Yup.string()
            .required('Password required')
            .min(8, 'Minimum 8 characters')
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: () => {
            validatorForm()
        }
    })

    const validatorForm = () => {
        const user = {
            username: formik.values.username,
            password: formik.values.password
        }

        if (login_(users, user)) {
            dispatch(login(user))
            formik.resetForm()
            if(isLogin){
                toast.success(`Welcome ${user.username}`)
            }

        } else {
            toast.error('Password or username incorrect')
        }


    }

    const login_ = (table, user) => {
        for (let i = 0; i < table.length; i++) {
            if (table[i].username === user.username && table[i].password === user.password) {
                toast.success('Congratulation connexion success!!!')
                return true
                break
            }
        }
    }


    return (
        <div className="user signinBx">
            <div className="imgBx">
                <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" />
            </div>
            <div className="formBx">
                <form onSubmit={formik.handleSubmit}>
                    <h2>Sign In</h2>
                    <Input type='text' placeholder="Username" value={formik.values.username} name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.errors.username && <Error error={formik.errors.username} />}
                    <Input type='password' placeholder="Mot de passe" value={formik.values.password} name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.errors.password && <Error error={formik.errors.password} />}<br />
                    <Input type='submit' value='Login' />
                    <p className="signup">
                        Don't have an account ?
                        <a href="#" onClick={props.onToggleForm}>Sign Up.</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
