import Link from "next/link";

export default function Home() {

  return (
    <div style={{ padding: "40px" }}>
      <h1>Adaptive Rendering Engine</h1>

      <p>
        Dynamic Rendering Strategy Selection Framework
      </p>

      <Link href="/dashboard">
        Go To Dashboard
      </Link>
    </div>
  );
}