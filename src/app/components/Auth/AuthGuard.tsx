import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";

interface IProps {
    children: ReactNode,
}

export const AuthGuard = (props: IProps) => {
    const userEmail = useAppSelector((state: RootState) => state.auth.email);

    if (!userEmail) {
      return <Navigate to={'/login'} replace />;
    }
  
    return props.children;
  };