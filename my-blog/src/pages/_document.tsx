import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
      const meta = {
          title: 'Mikihiro Saito Blog',
          description: 'フィリピン在住エンジニアのブログ',
      }
    return (
      <Html lang="ja">
        <Head>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={meta.description} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
