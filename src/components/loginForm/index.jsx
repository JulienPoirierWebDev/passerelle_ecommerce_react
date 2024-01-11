import Typography from "../common/Typography";
import InputWithLabel from "../common/InputWithLabel";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

function LoginForm() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setErrors([]);

    const email = formRef.current.elements[0].value;
    const password = formRef.current.elements[1].value;

    if (!email.includes("@")) {
      setErrors((previousValue) => {
        return [...previousValue, "Format d'email incorrect"];
      });
    }

    if (password === "") {
      setErrors((previousValue) => {
        return [...previousValue, "Pas de password"];
      });
    }

    if (errors.length > 0) {
      return;
    }

    console.log("here");

    try {
      setLoading(true);
      const request = await fetch(
        "https://passerelle-shop-api.julienpoirier-webdev.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await request.json();

      setLoading(false);

      if (data.error) {
        setErrors([data.message]);
      } else {
        if (data.jwt) {
          setUser(true);
          navigate("/");
        }
      }

      console.log(data);
    } catch (error) {
      setErrors(["oups"]);
      setLoading(false);
    }
  };

  return (
    <div className="m-16 mt-20 bg-dark-primary p-20">
      <Typography
        variant="white"
        tag="h1"
        customClasses={"text-4xl font-semibold mb-4 text-center"}
      >
        Se connecter
      </Typography>

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form ref={formRef}>
          <div className="flex gap-8">
            <InputWithLabel
              label="Email"
              name="email"
              id="email"
              type="email"
            />
            <InputWithLabel
              label="Mot de passe"
              name="password"
              id="password"
              type="password"
            />
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
          >
            S&apos;inscrire
          </button>
        </form>

        {errors.length > 0
          ? errors.map((error) => <p key={error}>{error}</p>)
          : null}
        {loading ? <p>Chargement</p> : null}
      </div>
    </div>
  );
}

export default LoginForm;
