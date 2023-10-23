import { Html, Head, Main, NextScript } from 'next/document'
import { globalStyle } from '@/theme/theme.css';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={globalStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
