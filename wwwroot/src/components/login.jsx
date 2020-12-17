import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import sha256 from 'crypto-js/sha256';

import './login.css';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: (Yup.object({
                email: Yup.string()
                .email("Ungültige Email")
                .required("Erforderlich"),
                password: Yup.string()
                .min(8, "Passwort ist zu kurz")
            })),
        onSubmit: values => {
            //TODO: communicate with api
            values.password = sha256(values.password).toString();
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <br/>
            <input
                id="email"
                name="email"
                placeholder="name@mail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
            />
            {formik.touched.email && formik.errors.email ? (
            <div class="error" style="color: red;">{formik.errors.email}</div>
            ) : null}
            <br/>
            <br/>
            <label htmlFor="password">Passwort</label>
            <br/>
            <input
                id="password"
                name="password"
                placeholder="Kennwort"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
            />
            {formik.touched.password && formik.errors.password ? (
            <div class="error" style="color: red;">{formik.errors.password}</div>
            ) : null}
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

class Login extends React.Component {
    render() {
        return(
            <div class="login">
                <div class="container">
                    <h1>Anmelden</h1>
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default Login;
