import Head from 'next/head';
import { SeoProps } from '@utils/types/client';

function Seo(props: SeoProps) {
  const {
    title,
    description = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = '',
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </Head>
    </>
  );
}

export default Seo;
