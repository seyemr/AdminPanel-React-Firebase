import { useContext, useState, useEffect } from "react";
import "./login.scss";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, GoogleAuthProvider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../images/google.png";

const Login = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        setSuccess(false);
        console.error("Giriş Hatası:", error.message);
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } catch (error) {
      setError(true);
      setSuccess(false);
      console.error("Google Giriş Hatası:", error.message);
    }
  };


  useEffect(() => {
    // Temizlik işlemi
    return () => {
      // Asenkron işlemleri iptal et veya diğer temizlik işlemlerini yap
    };
  }, []);

  return (
    <div className="login">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-posta"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn">
        <button type="submit">Giriş Yap</button> <br />
        {/* Link içinde to prop'unu düzeltilmiş hali */}
        <button><Link className="link" to="/signup">Kayıt Ol</Link> </button>
        </div>
        <button type="button" style={{backgroundColor:"white", marginTop:"15px"}} onClick={handleGoogleLogin}>
          <img style={{width:"200px", height:"50px", backgroundColor:"white"}} src={logo} alt="" />
        </button>
      </form>

 
    </div>
  );
};

export default Login;
