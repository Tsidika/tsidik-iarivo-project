import React, { Component } from "react";
import Google from "../images/google.png";
import "./myCss.css";

class Signin extends Component {
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
              Bienvenue !
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
              Mots de passe oublié ?
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
            Je n'ai pas de compte{" "}
            
              <a href=" " style={{ textDecoration: "none", color: "#0078AA" }}>
                S'inscrire
              </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
