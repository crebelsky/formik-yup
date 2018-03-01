import React, { Component } from "react";
import { Formik } from "formik";
import Yup from "yup";

class App extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required()
        })}
        onSubmit={this.props.onSubmit}
        render={({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <button type="submit">submit</button>
          </form>
        )}
      />
    );
  }
}

export default App;
