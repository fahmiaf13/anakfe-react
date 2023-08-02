import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="container mx-auto py-10">
        <ul className="flex justify-between items-center">
          <li className="font-extrabold text-2xl">
            <Link href="/">Anak Front End</Link>
          </li>
          <li className="text-extrabold">Home</li>
          <li className="text-extrabold">About</li>
        </ul>
      </div>
    </nav>
  );
}
