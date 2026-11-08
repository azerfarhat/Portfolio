import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import SayHi from "./components/SayHi";
import { projects, path, tools } from "./data";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap">
          <a className="logo" href="#top">Azer Farhat</a>
          <div className="right">
            <nav>
              <a href="#work">Work</a>
              <a href="#path">Path</a>
              <a href="#contact">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <div className="wrap hero">
          <div className="hero-main">
            <h1 aria-label="Azer Farhat">
              <span><i>Azer</i></span>
              <span><i><b className="ghost" aria-hidden="true">Az</b>Farhat</i></span>
            </h1>
            <div className="photo">
              <Image src="/portrait.jpg" alt="Portrait of Azer Farhat" width={800} height={1000} priority />
            </div>
          </div>
          <div className="hero-foot">
            <p>Software engineer who builds mobile and web products, from the first idea to the live app.</p>
            <div className="meta">Montreal, Canada<br />M.Eng. Software Engineering, UQAM · ÉTS</div>
            <div className="meta">Spring Boot · .NET · Angular<br />Flutter · Next.js</div>
          </div>
        </div>

        <section className="about">
          <div className="wrap">
            <p>I like turning a rough idea into something people actually open every day.</p>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <h2>Selected work</h2>
            <p className="hint">Swipe to see more</p>
            <div className="grid">
              {projects.map((p) => (
                <div className="tile" key={p.name}>
                  <span className="tag">{p.tag}</span>
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <span className="stack">{p.stack}</span>
                    {p.link ? (
                      <a className="cta" href={p.link.href} target="_blank" rel="noopener noreferrer">
                        {p.link.label}
                      </a>
                    ) : (
                      <span className="status">{p.status}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="more">
              <h3>And a lot of other projects</h3>
              <p>Smaller apps, experiments and team builds that didn&apos;t fit here. Ask me and I&apos;ll show you.</p>
              <a href="#contact">Ask me</a>
            </div>
            <div className="more">
              <h3>Plot twist: I also do data engineering</h3>
              <p>Yes, the spreadsheets are scared of me.</p>
            </div>
          </div>
        </section>

        <section id="path" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2>Path</h2>
            {path.map((r) => (
              <div className="row" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className="when">{r.when}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2>Tools</h2>
            <div className="skills">
              {tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="langs">Arabic (native) · French (professional) · English (professional)</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <h2>Say hi.</h2>
            <a className="mail" href="mailto:azerfarhat6@gmail.com">azerfarhat6@gmail.com</a>
            <div className="where">Laval · Montreal, Canada</div>
          </div>
        </section>
      </main>

      <SayHi />
      <footer>
        <div className="wrap">© Azer Farhat</div>
      </footer>
    </>
  );
}
