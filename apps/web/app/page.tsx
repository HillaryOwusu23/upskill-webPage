import Link from "next/link";
import { TextComponent } from "@repo/ui";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <TextComponent content="Hello World" />
    </div>
  );
}
