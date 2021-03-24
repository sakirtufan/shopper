import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { signin } from "../redux/actions/userActions"

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search? props.location.search.split('=')[1]:'/'

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo,loading,error } = userSignin;
  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email,password))
  };

 useEffect(() => {
  if(userInfo){
    props.history.push(redirect);
  }
 }, [props.history, redirect,userInfo])
 
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Anmelden</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">E-Mail-Addresse</label>
          <input
            type="email"
            id="email"
            placeholder="Email eingeben"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            id="password"
            placeholder="Passwort eingeben"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit" onClick={submitHandler}>
            Anmelden
          </button>
        </div>
        <div>
          <label />
          <div>
            Neukunde? <Link to="/register">Erstelle deinen Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
