import { useRecoilState } from "recoil";
import { userState } from "../userState";
import { useEffect } from "react";
import { auth } from "../../../firebase";
import { User } from "firebase/auth";

const useAuthenticatedUser = () => {
  const [user, setUser] = useRecoilState<User | null>(userState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }

      return () => unsubscribe();
    });
  }, [setUser]);

  return user;

};

export default useAuthenticatedUser;
