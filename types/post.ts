import { I_SanityResponse, I_SanityResponseImage} from "./sanity"

export interface I_Post extends I_SanityResponse{
	author: string
	cover: I_SanityResponseImage
	previewText: string
	title: string
}
