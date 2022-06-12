import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const url = "https://jsonplaceholder.typicode.com/users/1";

const User = () => {
  const [owner, setOwner] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await axios(url);
      const data = await response.data;
      //   console.log(data);
      setOwner(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 1500);
  }, []);

  return (
    <div>
      <h1>user</h1>

      {owner && (
        <div className="profile">
          <h2>{owner.name}</h2>
          <h3>{owner.username}</h3>
          <p>{owner.email}</p>
          <a href={owner.website}>{owner.website}</a>
        </div>
      )}

      {!owner && <SkeletonProfile />}
    </div>
  );
};

export default User;
