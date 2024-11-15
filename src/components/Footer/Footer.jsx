import React from "react";

function Footer() {
  return (
    <section className="flex flex-col justify-center items-center h-screen gap-16">
      <div className="text-center" id="contact">
        <h1 className="text-4xl font-bold mb-16">CONTACT ME</h1>
        <ul className="text-2xl">
          <li>
            <a href="mailto:huzaifazaki92@gmail.com">Email</a>
          </li>

          <li>
            <a href="https://wa.me/923262371179">WhatsApp</a>
          </li>
          <li>
            <a href="tel:+923262371179">Phone: +92 3262371179</a>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-16">FIND ME ON</h1>
        <ul className="text-2xl">
          <li>
            <a href="https://github.com/HUXAIFAZAKI">GitHub</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=AAdFiG2PkEo">
              Youtube (Automated)
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/4l8GHjEz73eJhyGQjniVel">
              SPOTIFY
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
