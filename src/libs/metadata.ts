import type { Metadata } from "next";

export const makeMetadata = (): Metadata => {
  return {
    title: "My Page Title",
    description: "My Page Description",
    keywords: ["keyword1", "keyword2", "keyword3"],
    openGraph: {
      title: "My Page Title",
      description: "My Page Description",
      url: "https://example.com",
      siteName: "My Site Name",
      images: [
        {
          url: "https://example.com/image.jpg",
          width: 800,
          height: 600,
          alt: "My Image Alt Text",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "My Page Title",
      description: "My Page Description",
      images: ["https://example.com/image.jpg"],
    },
  };
};
