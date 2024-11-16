import { NextResponse } from "next/server";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: Request) {
  const body: SheetForm = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:B1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.phone]],
      },
    });

    return NextResponse.json({
      data: response.data,
    });
  } catch (error) {
    console.error("Google Sheets API error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
