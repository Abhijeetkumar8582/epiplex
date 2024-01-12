import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your chatbot configuration script */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.difyChatbotConfig = { 
                  token: 'P9Q2eKZFAECYJK8x'
                };
              `,
            }}
          />
          <script
            defer
            src="https://udify.app/embed.min.js"
            id="P9Q2eKZFAECYJK8x"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
