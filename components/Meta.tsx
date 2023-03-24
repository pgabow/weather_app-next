import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Weather App</title>

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Weather app' />
      <meta
        name='keywords'
        content='weather app, next.js, typescript, tailwind css, open weather'
      />
      <meta http-equiv='author' content='P.Gabov' />
      <meta name='robots' content='noindex,follow' />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Weather App' />
      <meta property='og:description' content='Weather app' />
      <meta property='og:url' content='https://skill.gabow.ru' />
      <meta property='og:site_name' content='Code of Relevancy' />
      <meta property='og:image' content='http://skill.gabow.ru/images/new_logo.png' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='ru_RU' />
      <meta name='Address' content='Россия, Москва' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='Weather App' />
      <meta name='twitter:description' content='Weather app' />
      <meta name='twitter:image' content='http://skill.gabow.ru/images/new_logo.png' />
      <meta name='twitter:image:alt' content='Skill' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@paul.gabow' />

      {/* App Favicon */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Meta;
