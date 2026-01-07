import React from "react";

const DynamicTable = ({ data }) => {
  const { columns, rows } = data;
  const groupedColumns = columns.filter((col) => col.subColumns);
  const hasSubHeaders = groupedColumns.length > 0;
  const allLeafColumns = columns.reduce((acc, col) => {
    if (col.subColumns) {
      return [...acc, ...col.subColumns];
    }
    return [...acc, col];
  }, []);
  return (
    <div className="my-20 max-w-5xl mx-auto">
      <h3 className=" text-2xl font-bold dark:text-gray-900 text-[#111418] mb-6">
        Características Técnicas
      </h3>

      {/* VISTA MÓVIL (Cards) */}
      <div className="md:hidden space-y-6">
        {rows.map((row, rIdx) => (
          <div
            key={rIdx}
            className="bg-[#fafbfd] p-4 rounded-lg border border-gray-200 shadow-sm"
          >
            {/* Título de la fila (generalmente el primer valor) */}
            <div className="mb-4 border-b-2 border-primary pb-1">
              <span className="text-lg font-bold text-gray-800">
                {row[allLeafColumns[0].key]}
              </span>
            </div>

            {columns.map((group, gIdx) => {
              if (group.subColumns) {
                return (
                  <div key={`group-${gIdx}`} className="mt-4 mb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-primary bg-blue-50 p-1 px-2 rounded">
                      {group.header}
                    </h4>
                    <div className="pl-2">
                      {group.subColumns.map((subCol, sIdx) => (
                        <div
                          key={`sub-${sIdx}`}
                          className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="font-semibold text-sm text-gray-500">
                            {subCol.header}:
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {row[subCol.key] || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              if (gIdx !== 0) {
                return (
                  <div
                    key={`simple-${gIdx}`}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span className="font-semibold text-sm text-gray-500">
                      {group.header}:
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {row[group.key] || "—"}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>

      {/* VISTA DESKTOP (Table) */}
      <div className="overflow-x-auto hidden md:block sm:rounded-lg">
        <table className="min-w-full text-sm text-left divide-y divide-[#f0f2f4] dark:divide-[#2a3441]">
          {/* --- THEAD --- */}
          <thead className="bg-[#fafbfd] dark:bg-[#111827] border-1">
            {/* Primera Fila de Cabeceras */}
            <tr className="border-1 border-white">
              {columns.map((col, idx) => (
                <th
                  key={`th-row1-${idx}`}
                  colSpan={
                    col.subColumns ? col.colSpan || col.subColumns.length : 1
                  }
                  rowSpan={!col.subColumns && hasSubHeaders ? 2 : 1}
                  className={`px-4 py-3 font-semibold text-[#111418] dark:text-white border-1 border-white ${
                    col.subColumns ? "text-center" : "text-left"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>

            {/* Segunda Fila de Cabeceras (Solo si existen subcolumnas) */}
            {hasSubHeaders && (
              <tr>
                {columns.map((col) => {
                  if (col.subColumns) {
                    return col.subColumns.map((subCol, subIdx) => (
                      <th
                        key={`th-sub-${subIdx}`}
                        className="px-3 py-2 font-medium text-gray-600 dark:text-gray-300 border-1 border-white"
                      >
                        {subCol.header}
                      </th>
                    ));
                  }
                  return null;
                })}
              </tr>
            )}
          </thead>

          {/* --- TBODY --- */}
          <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2a3441]">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="bg-[#fafbfd] dark:bg-[#111827]">
                {allLeafColumns.map((col, cIdx) => (
                  <td
                    key={`td-${rIdx}-${cIdx}`}
                    className={`px-3 py-2 border-1 border-white ${
                      cIdx === 0
                        ? "font-semibold text-[#111418] dark:text-white px-4 py-3"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {row[col.key] || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DynamicTable;
