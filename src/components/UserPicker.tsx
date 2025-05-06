import React, { useState, useEffect } from "react";

interface User {
  name: string;
  avatar: string;
}

export const UserPicker: React.FC<{ onChange: (users: User[]) => void }> = ({
  onChange,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <select
      multiple
      onChange={(e) => {
        const selectedUsers = Array.from(e.target.selectedOptions).map(
          (opt) => JSON.parse(opt.value) as User
        );
        setSelected(selectedUsers);
        onChange(selectedUsers);
      }}
    >
      {users.map((user) => (
        <option key={user.name} value={JSON.stringify(user)}>
          {user.name}
        </option>
      ))}
    </select>
  );
};
