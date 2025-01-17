import React, { useEffect, useState } from "react";

function UserProfile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5005/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;

