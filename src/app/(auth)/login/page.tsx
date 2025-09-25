import { login } from "../../action/auth";

import React from "react";
import styles from "../authPage.module.css";
const LoginPage = () => {
  return (
    <div className={styles.authPageContainer}>
      <form action={login}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
