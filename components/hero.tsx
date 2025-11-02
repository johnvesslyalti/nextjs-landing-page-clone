import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div>
      <div>The React Framework for the Web</div>
      <div>
        Used by some of the world&apos;s largest companies, Next.js enables you
        to create high-quality web applications with the power of React
        components.
      </div>
      <div>
        <div>
          <Button>Get Started</Button>
          <Button>Learn Next.js</Button>
        </div>
        <div>npx create-next-app@latest</div>
      </div>
    </div>
  );
}
