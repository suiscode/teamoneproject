import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    console.log("hi");
    return NextResponse.json({ data: "hi" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Car name exists" }, { status: 500 });
  }
};
