import React, { useState } from "react";
import { DataGrid } from "./components/DataGrid";
import { UserPicker } from "./components/UserPicker";

const columns = [
  { key: "id", label: "ID", type: "text" },
  { key: "name", label: "Name", type: "text" },
  { key: "assignee", label: "Assignee", type: "user-multi-select" },
];

const initialData = [
  {
    id: "1",
    name: "Task A",
    assignee: [{ name: "Alice", avatar: "alice.jpg" }],
  },
  { id: "2", name: "Task B", assignee: [{ name: "Bob", avatar: "bob.jpg" }] },
];

const App: React.FC = () => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <UserPicker
        onChange={(users) =>
          setData((prev) => prev.map((row) => ({ ...row, assignee: users })))
        }
      />
      <DataGrid data={data} columns={columns} />
    </div>
  );
};

export default App;
