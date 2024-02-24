import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useEffect } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
//import { loginSchema } from './validation/loginSchema'
import { useUserActions } from "../_actions";
const styles = {
    label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
    field:
        ' text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full  appearance-none',
    button:
        '  bg-blue-900 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600',
    errorMsg: 'text-red-500 text-sm',
}

function  LoginForm(){

    const userActions = useUserActions();
    useEffect(() => {
      //localStorage.removeItem("loginerror");
    }, []);
    // form validation rules
    const validationSchema = Yup.object().shape({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    //let loginerror = localStorage.getItem("loginerror");
  
    //console.log("loginerror", loginerror);
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;
   
    // form validation rules
   

return (
    <>
        <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "",level:"developer" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          

          userActions.login(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (<form noValidate onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor='Email'>
                    <h1 className='text-3xl font-thin text-yellow-800 p-2'>Welcome to your pm software</h1>
                </label>
                <Field className={styles.field} id='email' name='email' placeholder="Email or Phone number" />
                <ErrorMessage component='a' className={styles.errorMsg} name='email' />
                <label className={styles.label} htmlFor='Email'>

                </label>
                <Field className={styles.field} id='password' name='password' type="password" placeholder="Password" />
                <ErrorMessage
                    component='a'
                    className={styles.errorMsg}
                    name='password'
                    
                />
                <div className='mt-2 text-sm text-gray-800 flex gap-2'>

                    <a href="#">Forgot Password?</a>

                    <a href="#" className='text-orange-700'>Register</a>



                </div>
                <div className='mt-2 '>
                    <button type='submit'  button="submit" className={styles.button}>
                        Login
                    </button>


                </div>
                </form>)}
        </Formik>
    </>)
}
export default LoginForm;