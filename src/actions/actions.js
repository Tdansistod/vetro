"use server";
import { PrismaClient } from "@prisma/client";
import { processExcelFile } from "@/utils/excel.js";
const prisma = new PrismaClient();

export async function createListFromXLSX(formData) {
  try {
    const file = formData.get("file");
    if (!file) {
      return {
        message: "No file provided",
        status: 400,
      };
    }
    const fileBuffer = await file.arrayBuffer();
    // Process xlsx file
    const { header, rows } = processExcelFile(fileBuffer);
    //save in db
    await prisma.file.create({
      data: {
        name: file.name.replace(".xlsx", ""),
        header,
        rows: JSON.stringify(rows),
      },
    });

    return {
      message: "File created successfully",
      status: 201,
    };
  } catch (error) {
    throw new Error(error.message || "Error processing file");
  }
}
