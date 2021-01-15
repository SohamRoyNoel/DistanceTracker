import React from "react";
import { Formik } from "formik";

export default function LoginForm() {
  return (
    <div style={{ marginTop: '10%', marginLeft: '30%', marginRight: '30%' }} className="form-group container">
    <p class="font-weight-bold" style={{ fontSize: 45 }}>LogIn</p>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="text"
              name="firstName"
              style={{ width: '50%' }}
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <br />
            
            <br />
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="lastName"
              style={{ width: '50%' }}
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <br />
            {errors.lastName && touched.lastName && errors.lastName}
            <br />
            <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}