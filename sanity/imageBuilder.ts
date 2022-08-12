import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from '../sanity/client'
import { T_SanityImageRef } from '../types/sanity';

export const sanityImageBuilder = imageUrlBuilder(sanityClient)
export function urlFor(source: T_SanityImageRef) {
  return sanityImageBuilder.image(source)
}
