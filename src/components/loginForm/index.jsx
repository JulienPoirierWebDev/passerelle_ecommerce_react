import Typography from "../common/Typography"
import InputWithLabel from "../common/InputWithLabel" 

function LoginForm() {
  return (
    <div className="m-16 mt-20 bg-dark-primary p-20">
    <Typography variant="white" tag="h1" customClasses={"text-4xl font-semibold mb-4 text-center"}>Se connecter</Typography>

    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form>

        <div className="flex gap-8">
          <InputWithLabel label="Email" name="email" id="email" type="email" />
          <InputWithLabel label="Mot de passe" name="password" id="password" type="password" />
          
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">S'inscrire</button>

      </form>
    </div>
  </div>
  )
}

export default LoginForm