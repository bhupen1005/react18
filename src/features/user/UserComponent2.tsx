import React from "react";
import { useGetUserByIdQuery } from "./userApiSlice";

const UserComponent: React.FC<{ userId: number }> = ({ userId }) => {
  const { data: user, error, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
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
