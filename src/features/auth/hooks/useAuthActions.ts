import { setCredentials } from "./authSlice";
import { useAppDispatch } from "../../../app/store_dispatch";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const setCreds = (accessToken: string) => {
    dispatch(setCredentials({ accessToken }));
  };

  return { setCreds };
};
