import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* <Script
          id="top-navbar"
          strategy="afterInteractive" // Setara dengan defer
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', () => {
                const navbar = document.querySelector('.top-navbar');

                window.addEventListener('scroll', () => {
                  if (window.scrollY > 50) {
                      navbar.classList.add('bg-blue-500');

                  } else {
                      navbar.classList.remove('bg-blue-500');
                  }
                });
              });
            `,
          }}
        /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
