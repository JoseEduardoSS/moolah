import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { User } from "firebase/auth";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
			if (user) {
				auth
					.updateCurrentUser(user)
					.then(() => {
						setIsAuthenticated(true);
					})
					.catch(() => {
						setIsAuthenticated(false);
					});
			} else {
				setIsAuthenticated(false);
			}
		});

		return () => unsubscribe();
	}, []);

	if (isAuthenticated === null) {
		return <div>Loading...</div>;
	}

	if (isAuthenticated) {
		return <>{children}</>;
	}

	return <Navigate to="/signin" replace />;
};

export default AuthGuard;
