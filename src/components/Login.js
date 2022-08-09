import React, { Component } from "react";
import Google from "../images/google.png";
import "./myCss.css";

class Login extends Component {
  render() {
    return (
      <div className="parentContainer">
        <div className="container">
          <div>
            <h1 style={{ fontWeight: "normal" }}>Inscription</h1>
          </div>

          <div className="btnContainer">
            <button className="btnInscription">
              <div className="googleLogo">
                <img src={Google} alt="" srcset="" />
              </div>
              <div className="conectGoogle">Connecter avec google</div>
            </button>
          </div>

          <div>
            <h1
              style={{
                color: "#758992",
                fontWeight: "normal",
                fontSize: "25px",
                paddingTop: "30px",
              }}
            >
              Ou
            </h1>
          </div>

          <div>
            <label htmlFor="name">Email</label>
            <br />
            <input type="Email" name="name" id="" />
          </div>

          <div>
            <label htmlFor="psw">Mots de passe</label>
            <br />
            <input type="password" name="psw" id="" />
          </div>

          <div className="btnContainer">
            <button id="confirm">
              <div className="confirmerGoogle">Confirmer</div>
            </button>
          </div>

          <div style={{ marginTop: "10px", height: "100px", fontSize: "14px" }}>
            Vous avez un compte?
            <a href=" " style={{ textDecoration: "none", color: "#0078AA" }}>
              Connexion
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
