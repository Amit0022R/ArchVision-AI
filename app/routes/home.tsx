import Navbar from "components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ArchVision AI" },
    { name: "description", content: "ArchVision AI is a platform for creating and sharing AI-generated architecture visualizations." },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-indigo-800 font-extrabold">Hello World</h1>
    </>
  )
}
