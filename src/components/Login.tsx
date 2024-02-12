import { Link } from "react-router-dom";
import { app } from "pages/firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import useInput from "hooks/useInput";
import { toast } from "react-toastify";

export default function Login() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [error, setError] = useState<boolean>(false);

  const onSubmit = useCallback(async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('로그인 성공하였습니다');
      console.log({email, password});
    } catch (err: any) {
      console.error(err);
      toast.error(err?.code);
    }
  },[email, password]);
  return (
    <>
      <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title">로그인</h1>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="email" name="email" id="email" value={email} onChange={onChangeEmail} required/>
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" id="password" value={password} onChange={onChangePassword} required/>
        </div>
        <div className="form__block">
          계정이 없으신가요? <Link to="/signup" className="form__link">회원가입하기</Link>
        </div>
        <div className="form__block">
          <input type="submit" value="로그인" className="form__btn--submit" />
        </div>
      </form>
    </>
  );
}