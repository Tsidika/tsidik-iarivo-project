import React, { Component } from "react";
import Google from "../images/google.png";
import "./myCss.css";

class Login extends Component {
  render() {
    return (
      <div className="parentContainer">
        <div className="container">
          <div>
            <h1
              style={{
                fontWeight: "normal",
                margin: "0px",
                marginTop: "25px",
                color: "#FFEA11",
                marginBottom: "43px",
              }}
            >
              Inscription
            </h1>
          </div>

          <div className="btnContainer">
            <button>
              <div className="googleLogo">
                <img src={Google} alt="" srcset="" />
              </div>
              <div className="conectGoogle">Connecter avec google</div>
            </button>
          </div>

          <div>
            <h1
              style={{
                color: "#FFFFFF",
                fontWeight: "normal",
                fontSize: "25px",
                paddingTop: "20px",
                textAlign: "center",
              }}
            >
              Ou
            </h1>
          </div>

          <div className="inLogin">
            <label htmlFor="name">Email</label>
            <br />
            <input type="Email" name="name" id="" />
          </div>

          <div className="inLogin">
            <label htmlFor="psw">Mots de passe</label>
            <br />
            <input type="password" name="psw" id="" />

            <div
              style={{
                marginTop: "10px",
                fontSize: "14px",
                float: "right",
                color: "white",
              }}
            >
              Mots de passe Oublié ?
            </div>
          </div>

          <div className="radioButton">
            <div>
              <input type="radio" name="" id="" /> Client
            </div>
            <div className="radioEntreprise">
              <input type="radio" name="" id="" />
              Entreprise
            </div>
          </div>

          <div className="btnContainer">
            <button id="confirm">
              <div className="confirmerGoogle">Confirmer</div>
            </button>
          </div>

          <div
            style={{
              paddingTop: "20px",
              height: "100px",
              fontSize: "14px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Vous avez un compte ?{" "}
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
