import React from "react";

export const UserCellRenderer: React.FC<{
  users: { name: string; avatar: string }[];
}> = ({ users }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    {users.slice(0, 2).map((user) => (
      <img
        key={user.name}
        src={user.avatar}
        alt={user.name}
        width="30"
        height="30"
        style={{ borderRadius: "50%" }}
      />
    ))}
    {users.length > 2 && <span>+{users.length - 2}</span>}
  </div>
);
