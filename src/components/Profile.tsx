import { app } from "pages/firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const onSignOut = useCallback(()=>{
    try {
      signOut(auth);
      toast.success('로그아웃 하셨습니다');
      navigate('/');
    } catch (err: any) {
      console.error(err);
      toast.error(err);
    } 
  },[auth, navigate]);
  return (
    <>
      <div className="profile__box">
        <div className="flex__box-log">
          <div className="profile__image" />
          <div>
            <div className="profile__email">{auth.currentUser?.email}</div>
            <div className="profile__name">{auth.currentUser?.displayName || '사용자'}</div>
          </div>
        </div>
        <div className="profile__logout" onClick={onSignOut}>로그아웃</div>
      </div>
    </>
  );
}