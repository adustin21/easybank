export interface I_SanityResponse {
	_createdAt: string
	_id: string
	_rev: string
	_type: string
	_updatedAt: string
}
export interface I_SanityResponseImage {
		_type: string
		asset:{
			_ref: T_SanityImageRef
			_type: string
		}
	}
export type T_SanityImageRef = string

