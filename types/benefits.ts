import { I_SanityResponse, I_SanityResponseImage} from "./sanity"

export interface I_Benefit extends I_SanityResponse{
	icon: I_SanityResponseImage
	text: string
	title: string
}
