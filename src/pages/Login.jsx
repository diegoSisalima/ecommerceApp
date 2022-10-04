import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        data
      )
      .then((res) => {
        alert(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        alert("usuario logueado");
        navigate("/");
        // localStorage.getItem("name")
        // localStorage.clearItem("name")
      })
      .catch((error) => {
        alert(error.response);
        if (error.response?.status === 404) alert("credenciales inválidas");
      });
  };

  const clear = () => {
    reset({
      first_name: "",
      last_name: "",
      birthday: "",
      email: "",
      password: "",
    });
    // deselectedUser();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form-users">
      <h1>Login</h1>
      <input
        className="input"
        type="email"
        placeholder="email *"
        required
        {...register("email")}
      />
      <input
        className="input"
        type="password"
        placeholder="password *"
        required
        {...register("password")}
      />
      <button className="button">REGISTER</button>
      <button className="button" onClick={clear} type="button">
        {" "}
        Clear
      </button>
      {/*type="button" para que no actue como un submit */}
    </form>
  );
};

export default Login;
