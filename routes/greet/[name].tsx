// routes/greet/[name].tsx

import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>
        Hello to you, {name}!
      </p>
    </main>
  );
}
