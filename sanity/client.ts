import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId:'j18md9ix',
  dataset: 'production',
  apiVersion: '2022-08-12',
  useCdn: false
})
