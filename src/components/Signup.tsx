import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../pages/firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    const { target: { name, value } } = e;
    
    if(name === 'email') {
      setEmail(value);
      setError(false);
    }
    
    if(name === 'password') {
      setPassword(value);
      setError(false);
    }
    
    if(name === 'passwordConfirm') {
      setPasswordConfirm(value);
      setError(false);
    }
    console.log({name, value});
  },[]);

  const onSubmit = useCallback(async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(password !== passwordConfirm) {
        setError(true);
      } else {
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("회원가입에 성공하였습니다");
        navigate('/');
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.code);
    }
  },[email, password, passwordConfirm]);
  return (
    <>
      <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title">회원가입</h1>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="email" name="email" id="email" value={email} onChange={onChange} required/>
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" id="password" value={password} onChange={onChange} required/>
        </div>
        <div className="form__block">
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input type="password" name="passwordConfirm" id="passwordConfirm" value={passwordConfirm} onChange={onChange} required/>
          { error && <div>비밀번호가 다릅니다</div> }
        </div>
        <div className="form__block">
          계정이 이미 있으신가요? <Link to="/login" className="form__link">로그인하기</Link>
        </div>
        <div className="form__block">
          <input type="submit" value="가입하기" className="form__btn--submit"/>
        </div>
      </form>
    </>
  );
}