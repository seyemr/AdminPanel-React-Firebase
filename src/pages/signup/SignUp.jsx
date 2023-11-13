import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, GoogleAuthProvider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./signup.scss";
import logoo from "../../images/googlee.png";

const SignUp = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch({ type: "LOGIN", payload: user });
            navigate("/");
        } catch (error) {
            setError(true);
            setSuccess(false);
            console.error("Giriş Hatası:", error.message);
        }
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

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            dispatch({ type: "LOGIN", payload: user });
            setSuccess(true);
            // Başarılı kayıt sonrasında isteğe bağlı olarak sayfa yönlendirmesi yapabilirsin
            // navigate("/");
        } catch (error) {
            setError(true);
            setSuccess(false);
            
        }
    };

    return (
        <div className="login">
            <h1>Kayıt Ol</h1>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder="Ad-Soyad" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="E-posta" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
                <div className="btn">
                    <button type="submit">Kayıt Ol</button>
                    <button>
                        <Link className="link" to="/login">
                            Giriş Yap
                        </Link>
                    </button>
                </div>
                <button type="button" style={{ backgroundColor: "white", marginTop: "15px" }} onClick={handleGoogleLogin}>
                    <img style={{ width: "200px", height: "50px", backgroundColor: "white" }} src={logoo} alt="" />
                </button>
            </form>

            {success && <p>Kayıt işlemi başarıyla gerçekleştirildi!</p>}
            {error && <p>Bir hata oluştu. Lütfen tekrar deneyin.</p>}
        </div>
    );
};

export default SignUp;
