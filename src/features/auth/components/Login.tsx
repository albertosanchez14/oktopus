import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../hooks/authSlice";
import { useLoginMutation } from "../hooks/authApiSlice";

export default function Login() {
  const userRef = useRef<HTMLInputElement>(document.createElement("input"));
  const errRef = useRef<HTMLParagraphElement>(document.createElement("p"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const errClass = errMsg ? "error" : "hidden";

  if (isLoading) return <p>Loading...</p>;

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/files");
    } catch (error: any) {
      if (!error.status) {
        setErrMsg("Network error. Please try again later.");
      } else if (error.status === 400) {
        setErrMsg("Missing username or password.");
      } else if (error.status === 401) {
        setErrMsg("Invalid username or password.");
      } else {
        setErrMsg("Unknown error. Please try again later.");
      }
      errRef.current.focus();
    }
  };

  const content = (
    <div>
      <h1>Login</h1>
      <p className={errClass} ref={errRef}>
        {errMsg}
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={username}
          onChange={handleUserInput}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePwdInput}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );

  return content;
}
