import { NextRequest } from "next/server";
import Joi from "joi";
import { NextResponse } from "next/server";

const documentSchema = Joi.object({
  Document: Joi.string().required(),
});

const validateDocument = (documentVariable: any) => {
  const validationResult = documentSchema.validate({
    Document: documentVariable,
  });
  if (validationResult.error) {
    throw new Error("Please upload atleast one file");
  }
};

const check = (image: string): void => {
  function determineFileFormat(inputValue: string): string {
    switch (inputValue) {
      case "/":
        return "jpeg";
      case "i":
        return "png";
      case "U":
        return "webp";
      case "R":
        return "gif";
      case "A":
        return "heif";
      default:
        return "Unknown";
    }
  }
  const allowedFile = ["png", "jpeg", "jpg", "gif"];
  const fileExtension = determineFileFormat(image.charAt(0));
  if (!allowedFile.includes(fileExtension)) {
    const error = new Error("Invalid File Format. Please upload Image files.");
    throw error;
  }
};

const checkSize = (image: string): void => {

  const maxSize = 5 * 1024 * 1024;
  const base64Part = image.replace(/^data:[^;]+;base64,/, "");
  const buffer = Buffer.from(base64Part, "base64");
  const fileSizeInBytes = buffer.length;
  const fileSizeInKB = fileSizeInBytes;
  if (fileSizeInKB > maxSize) {
    throw new Error(
      "Invalid File Size. Please upload an image smaller than 5 MB."
    );
  } else {
    return;
  }
};

export async function validateImage(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    console.log({ pathname });

    const data = await request.json();
    let bd;
    if (data.body) {
      bd = data.body;
    } else {
      bd = data;
    }
    for (const fieldname in bd.files) {
      validateDocument(bd.files[fieldname]);
      check(bd.files[fieldname]);
      checkSize(bd.files[fieldname]);
    }
    return { success: true, message: "Success", status: 200 };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message, status: 400 };
    }
  }
}
