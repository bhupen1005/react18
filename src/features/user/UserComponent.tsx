import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";
import { RootState, AppDispatch } from "../../app/store";

const UserComponent: React.FC<{ userId: number }> = ({ userId }) => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user?.user);
  const status = useSelector((state: RootState) => state.user?.status);
  const error = useSelector((state: RootState) => state.user?.error);

  useEffect(() => {
    dispatch(fetchUser(userId));
    console.log("User state:", { user, status, error });
  }, [dispatch, userId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          {/* Render other user details as needed */}
        </div>
      ) : (
        <div>No user data</div>
      )}
    </div>
  );
};

export default UserComponent;
