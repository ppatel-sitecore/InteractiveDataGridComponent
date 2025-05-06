import React from "react";
import UserCellRenderer from "../components/UserCellRenderer";

const useRenderer = (type) => {
  switch (type) {
    case "text":
      return (data) => <span>{data ?? "—"}</span>;
    case "link":
      return (data) => (
        <a
          href={typeof data === "string" ? data : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data ?? "No Link"}
        </a>
      );
    case "tag":
      return (data) => <div className="tag">{data ?? "Tag"}</div>;
    case "number":
      return (data) => (
        <span>{typeof data === "number" ? data.toLocaleString() : "N/A"}</span>
      );
    case "user-multi-select":
      return (data) => (
        <UserCellRenderer users={Array.isArray(data) ? data : []} />
      );
    default:
      return () => <span>Unsupported type</span>;
  }
};

export default useRenderer;
