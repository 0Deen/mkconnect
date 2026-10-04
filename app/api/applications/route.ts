import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

function genReference() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `MKC-${new Date().getFullYear()}-${n}`;
}

export async function GET(req: NextRequest) {
  try {
    const reference = req.nextUrl.searchParams.get("reference")?.trim();
    if (!reference) return NextResponse.json({ error: "Missing reference" }, { status: 400 });

    const db = await getDb();
    const application = await db.collection("applications").findOne(
      { reference },
      { projection: { name: 1, reference: 1, status: 1, category: 1, destination: 1, createdAt: 1 } }
    );

    if (!application) return NextResponse.json({ found: false }, { status: 200 });
    return NextResponse.json({ found: true, application }, { status: 200 });
  } catch (err) {
    console.error("Application lookup error:", err);
    return NextResponse.json({ error: "Could not look that up right now." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reference = genReference();

    const db = await getDb();
    await db.collection("applications").insertOne({
      reference,
      name: body.name || "",
      phone: body.phone || "",
      email: body.email || "",
      county: body.county || "",
      category: body.category || "",
      destination: body.destination || "",
      experience: body.experience || "",
      occupation: body.occupation || "",
      status: "Submitted",
      source: "homepage-quick-apply",
      createdAt: new Date(),
    });

    return NextResponse.json({ reference }, { status: 201 });
  } catch (err) {
    console.error("Application submit error:", err);
    return NextResponse.json({ error: "Could not submit application right now. Please try again." }, { status: 500 });
  }
}
