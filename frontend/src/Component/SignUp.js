import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AlertContext } from "../Context/notes/AlertState";
import { NoteContext } from "../Context/notes/NoteState";
import { BackContext } from "../Context/notes/BackState";

export default function SignUp() {
  const { showAlert } = useContext(AlertContext);
  const { mode } = useContext(BackContext);

  const navigate = useNavigate();
  const { host } = useContext(NoteContext);

  const [state, setstate] = useState(false);
  const [SignUpInfo, setSignUpInfo] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const runthis = async () => {
    const username = SignUpInfo.username;
    const url = `/api/auth/checkUsername/${username}`;

    if (username.length >= 6) {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonRes = await response.json();
      if (jsonRes.res === true) {
        setstate(true);
      } else if (jsonRes.res === false) {
        setstate(false);
      }
    }
  };

  const ValueChanged = (e) => {
    setSignUpInfo({ ...SignUpInfo, [e.target.name]: e.target.value });
    // console.log(SignUpInfo);
  };

  const SignUpToAccount = async (e) => {
    e.preventDefault();
    // console.log(SignUpInfo);
    const value = {
      name: `${SignUpInfo.fname + " " + SignUpInfo.lname}`,
      username: SignUpInfo.username,
      email: SignUpInfo.email,
      password: SignUpInfo.password,
    };
    // console.log(value);
    const url = `/api/auth/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    // eslint-disable-next-line
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      showAlert("Succesfully SignUp", "primary");
    } else {
      showAlert("Error in Sign Up", "warning");
    }
  };

  return (
    <>
      <h1
        className="fontMain d-flex justify-content-center"
        style={{ color: mode === "light" ? "" : "#dee4ce" }}
      >
        SignUp
      </h1>
      <br />
      <div>
        <form onSubmit={SignUpToAccount}>
          <div className="form-row row">
            <div className="my-2 form-group col-md-6">
              <label
                htmlFor="fname"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                First Name
              </label>
              <input
                type="text"
                style={{
                  backgroundColor: mode === "light" ? "" : "#667574",
                  color: mode === "light" ? "" : "white",
                }}
                className="form-control"
                value={SignUpInfo.fname}
                onChange={ValueChanged}
                id="fname"
                name="fname"
                placeholder="John"
              />
            </div>
            <div className="form-group col-md-6">
              <label
                htmlFor="lname"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                Last Name
              </label>
              <input
                type="text"
                style={{
                  backgroundColor: mode === "light" ? "" : "#667574",
                  color: mode === "light" ? "" : "white",
                }}
                className="form-control"
                value={SignUpInfo.lname}
                onChange={ValueChanged}
                id="lname"
                name="lname"
                placeholder="Lie"
              />
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-6">
              <label
                htmlFor="email"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                Email address
              </label>
              <input
                type="email"
                style={{
                  backgroundColor: mode === "light" ? "" : "#667574",
                  color: mode === "light" ? "" : "white",
                }}
                className="form-control"
                value={SignUpInfo.email}
                onChange={ValueChanged}
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required={true}
              />
            </div>
            <div className="form-group col-md-6">
              <label
                htmlFor="username"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                Username
              </label>
              <input
                type="text"
                style={{
                  backgroundColor: mode === "light" ? "" : "#667574",
                  color: mode === "light" ? "" : "white",
                }}
                className={`form-control ${
                  state ? "border border-danger" : ""
                }`}
                value={SignUpInfo.username}
                onChange={ValueChanged}
                onBlur={runthis}
                id="username"
                name="username"
                placeholder="john123"
                minLength={6}
                required={true}
              />
              <small
                id="emailHelp"
                className={`form-text text-muted ${state ? "" : "d-none"}`}
              >
                Username Not Available
              </small>
            </div>
          </div>

          <div className="form-row row">
            <div className="form-group col-md-6">
              <label
                htmlFor="password"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                Password
              </label>
              <input
                type="password"
                style={{
                  backgroundColor: mode === "light" ? "" : "#667574",
                  color: mode === "light" ? "" : "white",
                }}
                className="form-control"
                value={SignUpInfo.password}
                onChange={ValueChanged}
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group col-md-6">
              <label
                htmlFor="cpassword"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                style={{
                  backgroundColor: mode === "light" ? "" : "#667574",
                  color: mode === "light" ? "" : "white",
                }}
                className={`form-control ${
                  SignUpInfo.password !== SignUpInfo.cpassword
                    ? "border border-danger"
                    : ""
                }`}
                value={SignUpInfo.cpassword}
                onChange={ValueChanged}
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form-group form-check col-md-6 my-1">
              <input
                type="checkbox"
                className="form-check-input mx-1"
                required={true}
              />
              <label
                className="form-check-label"
                style={{ color: mode === "light" ? "" : "#dee4ce" }}
              >
                I agree{" "}
                <a
                  href="/terms-and-condition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Condition
                </a>{" "}
                &{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <div className="my-2">
            <button
              type="submit"
              disabled={SignUpInfo.password !== SignUpInfo.cpassword}
              className="btn btn-primary my-3"
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className={`mx-3 link-${
                mode !== "light" ? "light" : "dark"
              } align-middle`}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
