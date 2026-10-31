import { connection } from "next/server";
import { profile } from "../data/portfolio";

export default async function Footer() {
  await connection();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} {profile.name}. Built with Next.js.</p>
      </div>
    </footer>
  );
}
