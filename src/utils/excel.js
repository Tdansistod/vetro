import { read, utils } from "xlsx";

/**
 * Procesa un archivo .xlsx y devuelve su contenido.
 * @param {Buffer} fileBuffer - El buffer del archivo .xlsx.
 * @returns {Object} Un objeto con el header y las filas procesadas.
 */
export const processExcelFile = (fileBuffer) => {
  // Leer el archivo Excel
  const workbook = read(new Uint8Array(fileBuffer), { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convertir la hoja a JSON
  const data = utils.sheet_to_json(sheet, { header: 1, defval: "" });

  // Filtrar filas vacías
  const filteredData = data.filter((row) => row.some((cell) => cell !== ""));

  if (filteredData.length === 0) {
    throw new Error("El archivo está vacío o no contiene datos válidos.");
  }

  // Filtrar columnas vacías
  const validColumns = filteredData[0]
    .map((col, index) => (col !== "" ? index : null))
    .filter((index) => index !== null);

  const cleanedData = filteredData.map((row) =>
    validColumns.map((index) => row[index])
  );

  const header = cleanedData[0];
  const rows = cleanedData.slice(1);

  return { header, rows };
};
