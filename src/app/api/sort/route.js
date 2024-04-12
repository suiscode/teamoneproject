import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const url = req.nextURL.searchParams.get("typeItems");
  console.log(url);
  try {
    return NextResponse.json({ data: "hi" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Car name exists" }, { status: 500 });
  }
};
