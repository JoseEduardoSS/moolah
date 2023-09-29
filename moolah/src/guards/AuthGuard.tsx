import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { User } from "firebase/auth";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		const checkAndUpdateUser = async () => {
			const currentUser = auth.currentUser;

			if (!currentUser) {
				const localStorageUserString: string | null =
					localStorage.getItem("user");
				const localStorageUser: User =
					localStorageUserString && JSON.parse(localStorageUserString);

				console.log("localStorageUser: ", localStorageUser);

				if (localStorageUser) {
					try {
						await auth.updateCurrentUser(localStorageUser);
						console.log("Usuário atualizado com sucesso!");
					} catch (error) {
						console.error("Erro ao atualizar o usuário:", error);
					}
				}
			}
		};

		checkAndUpdateUser();
	}, []);

	return <>{auth.currentUser ? children : <Navigate to="/login" replace />}</>;
};

export default AuthGuard;
