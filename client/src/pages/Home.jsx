import { useEffect, useState } from "react";
import API from "../services/api";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>

      {users.length === 0 ? (
        <p>No Users Found</p>
      ) : (
        users.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))
      )}
    </div>
  );
};

export default Home;