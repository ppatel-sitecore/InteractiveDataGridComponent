export const cellRenderers = {
  text: (data) => <span>{data ?? "—"}</span>,
  link: (data) => <a href={data ?? "#"}>{data ?? "No Link"}</a>,
  tag: (data) => <div className="tag">{data ?? "Tag"}</div>,
  number: (data) => (
    <span>{typeof data === "number" ? data.toLocaleString() : "N/A"}</span>
  ),
  "user-multi-select": (data) => (
    <UserCellRenderer users={Array.isArray(data) ? data : []} />
  ),
  html: (data) => (
    <div
      dangerouslySetInnerHTML={{
        __html: typeof data === "string" ? data : "<span>Invalid HTML</span>",
      }}
    />
  ),
};
