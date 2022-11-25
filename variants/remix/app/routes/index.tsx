import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <header>
        <h1>Horacio Herrera</h1>
        <p>
          I'm Horacio Herrera, Designer & Developer consultant from Panama🇵🇦
          living in Barcelona. I help companies develop digital products that
          users want.
        </p>
        <p>
          Currently I'm building Mintter, a document publishing platform on top
          of Bitcoin ⚡️
        </p>
        <p>
          You can find me in the internets on twitter, twitch, youtube, github,
          dribbble & codesandbox. You can also send me an email if you prefer.
        </p>
      </header>
      <section>
        <h2>Articles</h2>
        <ul>
          <li>
            <Link to="/hello">hello</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
