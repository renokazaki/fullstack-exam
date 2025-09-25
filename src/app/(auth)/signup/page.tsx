import { signup } from "../../action/auth";

import React from "react";
import styles from "../authPage.module.css";
const SignupPage = () => {
  return (
    <div className={styles.authPageContainer}>
      <form action={signup}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignupPage;
