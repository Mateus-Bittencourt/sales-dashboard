export interface ProfileEditableData {
  name: string
  phone: string
}

export interface ProfileData extends ProfileEditableData {
  email: string
}

export interface CreateProfileData extends ProfileEditableData {
  email: string
  password: string
  phone: string
  password: string
  message?: string | null
}
