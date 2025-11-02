import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div>
      <div>
        <Image alt="vercel icon" src="/vercel.png" width={50} height={50} />
        <div>
          NEXT<span>.JS</span>
        </div>
        <div>Showcase</div>
        <div>Docs</div>
        <div>Blog</div>
        <div>Templates</div>
        <div>Enterprise</div>
      </div>
      <div>
        <input placeholder="Search documentation"></input>
        <button className="bg-black text-white">Deploy</button>
        <Button>Learn</Button>
      </div>
    </div>
  );
}
