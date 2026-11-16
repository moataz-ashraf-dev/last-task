import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../components/shared/Button";
import { registerValidation } from "./validation";
import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalStore } from "../../../stores/MainStore";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Register() {
  // Hooks
  const { token, setToken, setUserData } = useContext(GlobalStore);
  const navigate = useNavigate();

  // Protected Route
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  // Vars
  const base_url = "http://localhost:1337/api";
  const endpoint = "auth/local/register";

  // States

  // Functions

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(`${base_url}/${endpoint}`, values);

      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("userData", JSON.stringify(res.data.user));

      setToken(res.data.jwt);
      setUserData(res.data.user);

      toast.success("Account Created Successfully", {
        duration: 2500,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error.message, {
        duration: 5000,
      });
    }

    // axios
    //   .post(`${base_url}/${endpoint}`, values)
    //   .then((res) => {
    //     setToken(res.data.jwt);
    //     toast.success("Account Created Successfully", {
    //       duration: 2000,
    //     });
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.error.message, {
    //       duration: 5000,
    //     });
    //   });
  };

  return (
    <div className="h-full flex justify-center items-center">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={registerValidation}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white w-120 max-w-full p-5 rounded-lg flex flex-col gap-5">
          <h2 className="text-center text-2xl font-bold">Welcome</h2>

          <Field
            name="username"
            className="outline-0 border focus:border-2 border-gray-300 focus:border-indigo-500 rounded-lg py-1 px-2"
            placeholder="User Name:"
          />
          <ErrorMessage
            name="userName"
            component={"p"}
            className="text-red-500 font-bold"
          />
          <Field
            name="email"
            className="outline-0 border focus:border-2 border-gray-300 focus:border-indigo-500 rounded-lg py-1 px-2"
            placeholder="Email:"
          />
          <ErrorMessage
            name="email"
            component={"p"}
            className="text-red-500 font-bold"
          />
          <Field
            name="password"
            type="password"
            className="outline-0 border focus:border-2 border-gray-300 focus:border-indigo-500 rounded-lg py-1 px-2"
            placeholder="Password:"
          />
          <ErrorMessage
            name="password"
            component={"p"}
            className="text-red-500 font-bold"
          />

          <Button width="w-full">Register</Button>
        </Form>
      </Formik>
    </div>
  );
}
