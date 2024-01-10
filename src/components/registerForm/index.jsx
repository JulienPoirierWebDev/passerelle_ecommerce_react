import { useRef, useState } from "react";
import InputWithLabel from "../common/InputWithLabel";
import Typography from "../common/Typography";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  return (
    <div className="mb-4">
      <InputWithLabel label="Adresse" name="addressLine1" id="addressLine1" />
      <InputWithLabel label="Ville" name="city" id="city" />
      <InputWithLabel label="Etat" name="state" id="state" />
      <InputWithLabel label="Code postal" name="postalCode" id="postalCode" />
      <InputWithLabel label="Pays" name="country" id="country" />
    </div>
  );
};

const PersonalForm = () => {
  return (
    <div className="mb-4">
      <InputWithLabel label="Votre nom" name="name" id="name" />
      <InputWithLabel label="Email" name="email" id="email" type="email" />
      <InputWithLabel
        label="Mot de passe"
        name="password"
        id="password"
        type="password"
      />
      <InputWithLabel
        label="Confirmation du mot de passe"
        name="passwordConfirm"
        id="passwordConfirm"
        type="password"
      />
    </div>
  );
};

function RegisterForm() {
  const navigate = useNavigate();

  const [error, setError] = useState([]);

  const formRef = useRef(null);

  const handleRegister = async (event) => {
    setError([]);
    event.preventDefault();

    const formData = new FormData(formRef.current);

    let listElements = formRef.current.elements;
    let isEmptyInput = false;
    for (let i = 0; i < listElements.length; i++) {
      if (listElements[i].tagName === "INPUT") {
        if (listElements[i].value === "") {
          isEmptyInput = true;
        }
      }
    }
    if (isEmptyInput) {
      setError((previousValue) => {
        return [...previousValue, "Merci de remplir tout les champs"];
      });
      return;
    }

    // est-ce que password et passwordConfirm sont identiques ? Il faut vérifier !

    if (formData.get("password") !== formData.get("passwordConfirm")) {
      setError((previousValue) => {
        return [...previousValue, "Les mots de passe ne sont pas identiques"];
      });
    }

    // est-ce que l'email est valide ? Il faut vérifier !

    //todo possible : améliorer la regex pour être plus précis

    if (!formData.get("email").includes("@")) {
      setError((previousValue) => {
        return [...previousValue, "L'email n'est pas valide"];
      });
    }

    const myBody = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      address: {
        addressLine1: formData.get("addressLine1"),
        city: formData.get("city"),
        state: formData.get("state"),
        postalCode: formData.get("postalCode"),
        country: formData.get("country"),
      },
    };

    // handle cors
    const request = await fetch(
      "http://passerelle-shop-api.julienpoirier-webdev.com/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(myBody),
      }
    );

    const data = await request.json();
    if (data.error == true) {
      setError((previousValue) => {
        return [...previousValue, "La soumission du formulaire a échoué"];
      });
      return;
    }

    navigate("/connexion");
  };

  return (
    <div className="m-16 mt-20 bg-dark-primary p-20">
      <Typography
        variant="white"
        tag="h1"
        customClasses={"text-4xl font-semibold mb-4 text-center"}
      >
        S&apos;inscrire
      </Typography>

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form ref={formRef}>
          <div className="flex gap-8">
            <PersonalForm />
            <AddressForm />
          </div>
          <button
            onClick={handleRegister}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
          >
            S&apos;inscrire
          </button>
        </form>

        <div>
          {error.map((oneError) => {
            return <p key={oneError}>{oneError}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
