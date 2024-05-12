import React from "react";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

function Login() {
  return (
    <main className="account">
      <div className="account-cont">
        <div className="account-inputs">

          <form>
            <label for="username"><p>User</p> 
              <input type="text" id="username" name="username" placeholder="User Name" required />
            </label>

            <label for="password"><p>Password</p>
              <input type="password" id="password" name="password" placeholder="Password" required />
            </label>

            <div className="login-with">
              <a href="/home">
                <button type="button" id="login-google">
                  Login with Google <FontAwesomeIcon className="account-icon-g" icon={faGoogle}/>
                </button>
              </a>

              <a href="/home">
                <button type="button" id="login-facebook">
                  Login with Facebook <FontAwesomeIcon className="account-icon-f" icon={faFacebook}/>
                </button>
              </a>
            </div>
          </form>

        </div>

        <div className="account-right">
          <img src="/images/main/account/account_image.png" alt=""/>
        </div>

      </div>
    </main>
  );
}

export default Login;
