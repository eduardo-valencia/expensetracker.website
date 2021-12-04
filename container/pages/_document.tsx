import React from 'react'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { AppType, Enhancer, RenderPage } from 'next/dist/next-server/lib/utils'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="./favicon.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Track your transactions, bills, and budgets."
          />
          <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
          <link rel="manifest" href="./manifest.json" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="ExpenseTracker" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const addSheets =
  (sheets: ServerStyleSheets): Enhancer<AppType> =>
  (App) =>
  (props) =>
    sheets.collect(<App {...props} />)

const renderPage =
  (sheets: ServerStyleSheets, basicPageRenderer: RenderPage) => () =>
    basicPageRenderer({
      enhanceApp: addSheets(sheets),
    })

AppDocument.getInitialProps = async (context: DocumentContext) => {
  const { renderPage: basicPageRenderer } = context
  const sheets = new ServerStyleSheets()
  context.renderPage = renderPage(sheets, basicPageRenderer)
  const initialProps = await Document.getInitialProps(context)
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}

export default AppDocument
