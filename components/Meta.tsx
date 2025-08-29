import { NextSeo } from 'next-seo';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = "Balloon'd - Pop into Something Real",
  description = "A playful way to meet real matches. Voice pops, video intros, and smart matching for genuine connections.",
  image = "/og-image.png",
  url = "https://balloond.com"
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: 'Balloon\'d Dating App',
            type: 'image/png',
          },
        ],
        siteName: 'Balloon\'d',
        type: 'website',
      }}
      twitter={{
        handle: '@balloond',
        site: '@balloond',
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180'
        }
      ]}
    />
  );
};

export default Meta;
