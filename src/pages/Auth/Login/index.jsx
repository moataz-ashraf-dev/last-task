import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../components/shared/Button";
import { loginValidation } from "./validation";
import { useContext, useEffect } from "react";
import { GlobalStore } from "../../../stores/MainStore";
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  // Hooks
  const { token, setToken, setUserData } = useContext(GlobalStore);
  const navigate = useNavigate();

  // Vars
  const base_url = "http://localhost:1337/api";
  const endpoint = "auth/local";

  // Protected Route
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  // Functions
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(`${base_url}/${endpoint}`, values);

      setToken(res.data.jwt);
      setUserData(res.data.user)

      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("userData", JSON.stringify(res.data.user));

      toast.success("Login Successfully", {
        duration: 2500,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.error.message, {
        duration: 5000,
      });
    }
  };
  return (
    <div className="h-full flex justify-center items-center">
      <Formik
        initialValues={{
          identifier: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginValidation}
      >
        <Form className="bg-white w-120 max-w-full p-5 rounded-lg flex flex-col gap-5">
          <h2 className="text-center text-2xl font-bold">Welcome</h2>
          <Field
            name="identifier"
            className="outline-0 border focus:border-2 border-gray-300 focus:border-indigo-500 rounded-lg py-1 px-2"
            placeholder="User Name or Email:"
          />
          <ErrorMessage
            name="identifier"
            component={"p"}
            className="text-red-500 font-bold"
          />
          <Field
            name="password"
            className="outline-0 border focus:border-2 border-gray-300 focus:border-indigo-500 rounded-lg py-1 px-2"
            type="password"
            placeholder="Password:"
          />
          <ErrorMessage
            name="password"
            component={"p"}
            className="text-red-500 font-bold"
          />
          <Button width="w-full">Login</Button>
        </Form>
      </Formik>
    </div>
  );
}
