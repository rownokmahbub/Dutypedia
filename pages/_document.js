import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#FFF" />
          <link rel="icon" href="/favicon.svg" />
        
         
        </Head>
        <body className="bg-[#F8FAFB] dark:bg-bg text-[#333333] dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
