import React from 'react';
import Link from "next/link";
import { TextComponent } from "@repo/ui";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
  
      <TextComponent content="Hello World" />
    </div>
  );
}
