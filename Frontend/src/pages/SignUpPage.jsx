import { useState } from "react" ;


const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  return <div>SignUpPage</div>
};

export default SignUpPage ;