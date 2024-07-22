import { createClient } from "contentful";

type Item = {
  fields?:{
  title?: string;
  slug?: string;
  description?: {
     nodeType?: string;
     data?: {} ;
     content?: Array<{
        content?: Array<{
          value?: string;
        }>;
     }>; };
};
};

export function useContentfulData(title: string) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const fetchData = async () => {
    try {
      const client = createClient({
        space: space,
        accessToken: accessToken,
      });
      const res = await client.getEntries({ content_type: "imageEnhancer" });
      const item = res.items.find((item:Item) => item?.fields?.title === title);
      const description =
        (item as Item)?.fields?.description?.content?.[0]?.content?.[0]?.value ||
        "";
      return description;
      
    } catch (error) {
      return "";
    }
  };

  return { fetchData };
}
