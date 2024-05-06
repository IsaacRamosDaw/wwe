import React from "react";
import "./login.css";

function Login() {
  return (
    <main className="account">
      <div className="account-cont">
        <div className="account-inputs">
          <form>
            <label for="username">Usuario:<input type="text" id="username" name="username" placeholder="Nombre de usuario" required/></label>
            <label for="password"> Contraseña: 
              <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required />
            </label>
            <button className="account-margin-space" type="submit">Iniciar sesión</button>
            <div>
              <button type="button" id="login-google">
                Iniciar sesión con Google
              </button>
              <button type="button" id="login-facebook">
                Iniciar sesión con Facebook
              </button>
            </div>
            <div class="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>
          </form>
        </div>
          <img src="https://media.gettyimages.com/id/136825386/es/foto/kane-wwe-raw-superstar-during-see-no-evil-premiere-arrivals-in-los-angeles-california-united.jpg?s=612x612&w=0&k=20&c=oozNIkogpSgTom9BZXgl9t-B8zX9rTU4-RM2TNwCztg=" alt="" />
      </div>
    </main>
  );
}

export default Login;
