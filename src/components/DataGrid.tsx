import React from "react";
import { cellRenderers } from "../utils/renderers";

interface ColumnDefinition {
  key: string;
  label: string;
  type: string;
}

interface DataGridProps {
  data: any[];
  columns: ColumnDefinition[];
}

export const DataGrid: React.FC<DataGridProps> = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>
                {cellRenderers[col.type]?.(row[col.key]) || row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
