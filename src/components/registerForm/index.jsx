import InputWithLabel from "../common/InputWithLabel"
import Typography from  "../common/Typography";


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
      <InputWithLabel label="Mot de passe" name="password" id="password" type="password" />
      <InputWithLabel label="Confirmation du mot de passe" name="passwordConfirm" id="passwordConfirm" type="password" />
    </div>
  );
};

function RegisterForm() {
  return (
    <div className="m-16 mt-20 bg-dark-primary p-20">
     <Typography variant="white" tag="h1" customClasses={"text-4xl font-semibold mb-4 text-center"}>S'inscrire</Typography>

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form>

          <div className="flex gap-8">
              <PersonalForm /> 
              <AddressForm />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">S'inscrire</button>

        </form>
      </div>
    </div>
  )
}

export default RegisterForm