import axios from "axios";  // Faqat bitta import qiling
import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isPassword, setIsPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setErrorMessage("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    try {
      const token = "64bebc1e2c6d3f056a8c85b7";
      const api = import.meta.env.VITE_API;

      const res = await axios.post(
        `${api}/user/sign-in?access_token=${token}`,
        {
          email: formData.email.trim(),
          password: formData.password.trim(),
        }
      );

      console.log("API Response:", res.data);

      if (res.data && res.data.data && res.data.data.user) {
        const userData = res.data.data.user;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));

        setSuccessMessage("Muvaffaqiyatli kirdingiz!");
        setErrorMessage("");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
        console.log("User saqlandi:", userData);
      } else {
        console.error("Foydalanuvchi topilmadi!");
        setErrorMessage("Foydalanuvchi topilmadi!");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Login xatosi:", error.response?.data || error.message);
      setErrorMessage("Login xatosi! Email yoki parol noto‘g‘ri.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="w-[472px] h-[500px] flex flex-col items-center">
      <div className="absolute">
        <h3 className="text-sm mr-[100px] mt-8 font-normal">
          Foydalanuvchi nomi va parolingizni kiriting.
        </h3>
        {errorMessage && (
          <p className="text-red-600 relative text-center top-[-50px]">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-green-600 text-center relative top-[-50px]">
            {successMessage}
          </p>
        )}
      </div>

      {/* Email Input */}
      <input
        placeholder="almamun_uxui@outlook.com"
        name="email"
        type="email"
        aria-required="true"
        onChange={handleChange}
        className="pl-[15px] w-[377px] h-[40px] relative top-[50px] mt-[14px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />

      {/* Parol Input */}
      <input
        name="password"
        placeholder="*********"
        type={isPassword ? "password" : "text"}
        aria-required="true"
        onChange={handleChange}
        className="pl-[15px] w-[377px] mt-[50px] relative top-[50px] h-[40px]  border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />

      {/* Parolni ko'rsatish tugmasi */}
      <button
        type="button"
        className="absolute right-[86px] cursor-pointer top-[251px] transform -translate-y-1/2"
        onClick={() => setIsPassword(!isPassword)}
      >
        {isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>

      {/* "Forgot Password?" havolasi */}
      <p className="ml-[250px] my-[25px] relative top-[50px] cursor-pointer text-green-600 font-[600]">
        Parolni unutdingizmi?
      </p>

      {/* Foydalanuvchi ma'lumotlari */}
      {user ? (
        <div className="flex gap-2 relative top-[40px]">
          <button
            className="w-[200px] bg-gray-300 hover:bg-gray-500 cursor-pointer text-black p-2 rounded"
            disabled
          >
            Salom, {user.name}!
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
            className="w-[150px] hover:bg-red-600 bg-red-500 cursor-pointer text-white p-2 rounded"
          >
            Chiqish
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="w-[377px] hover:bg-green-600 relative top-[40px] bg-green-500 cursor-pointer text-white p-2 rounded"
        >
          {user ? `Salom, ${user.name}!` : "Kirish"}
        </button>
      )}

      <div className="flex items-center relative top-[50px]">
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
        <p className="my-[16px] mx-[10px]">Yoki kirish orqali</p>
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
      </div>

      {/* Ijtimoiy tarmoqlar bilan kirish */}
      <div className="w-[377px] relative top-[50px]">
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <span
            role="img"
            aria-label="facebook"
            className="anticon anticon-facebook pl-[15px]"
          >
            {/* Facebook ikonkasi */}
          </span>
          Facebook orqali kirish
        </button>

        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
          <span
            role="img"
            aria-label="google"
            className="anticon anticon-google pl-[15px]"
          >
            {/* Google ikonkasi */}
          </span>
          Google orqali kirish
        </button>

        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mt-[15px]">
          <span
            role="img"
            aria-label="scan"
            className="anticon anticon-scan pl-[15px]"
          >
            {/* QR kod orqali kirish ikonkasi */}
          </span>
          QR kod orqali kirish
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
