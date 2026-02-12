import React, { useEffect, useState } from "react";
import UserForm from "../components/userForm";
import UserList from "../components/userList";
import Loader from "../components/Loader";
import { getUsers, createUser, updateUser, deleteUser } from "../api/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, data);
      } else {
        await createUser(data);
      }
      setEditingUser(null);   // exit edit mode
      fetchUsers();           // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <UserForm
        onSubmit={handleSubmit}
        defaultValues={editingUser || { firstName: "", lastName: "", phone: "", email: "" }}
      />
      {loading ? (
        <Loader />
      ) : (
        <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default Home;
