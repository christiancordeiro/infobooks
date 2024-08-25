import { ReactNode } from "react"

export interface UserContextProps<T = unknown> {
  data: T | null
  loading: boolean
  maxResults: number
  apiKey: string
}

export interface UserStorageProps {
  children: ReactNode
}

export interface Volume {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo?: SearchInfo
}

interface VolumeInfo {
  title: string
  authors?: string[]
  publisher?: string
  publishedDate?: string
  description?: string
  industryIdentifiers?: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount?: number
  printType: string
  categories?: string[]
  averageRating?: number
  ratingsCount?: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary?: PanelizationSummary
  imageLinks?: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: Price
  retailPrice?: Price
  buyLink?: string
}

interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Format
  pdf: Format
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

interface SearchInfo {
  textSnippet: string
}

interface IndustryIdentifier {
  type: string
  identifier: string
}

interface ReadingModes {
  text: boolean
  image: boolean
}

interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

interface Price {
  amount: number
  currencyCode: string
}

interface Format {
  isAvailable: boolean
  acsTokenLink?: string
}
