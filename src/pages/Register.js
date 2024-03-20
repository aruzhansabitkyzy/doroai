import RegisterLayout from "../components/RegisterLayout";
import arrow from "../images/Arrow.png";
const Register = ({setAuthType}) => {
  return (
    <div className="w-1/2">
      <div className="pl-7 w-1/2">
        <div className="flex justify-between mt-5">
          <span
            className="font-medium text-lg flex gap-3 cursor-pointer font-nunito"
            onClick={() => setAuthType("login")}
          >
            <span className="inline-block w-10 h-8 bg-gray-100 rounded-2xl">
              <img src={arrow} className="pt-3 pl-3" />
            </span>
            Назад
          </span>
          <span className="ml-7 font-bold text-xl font-nunito">
            Регистрация
          </span>
        </div>
      </div>
      <RegisterLayout setAuthType={setAuthType}/>
    </div>
  );
};
export default Register;
