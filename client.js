import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "r0kdzywp",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);

export default client;
