/* Components Types */
export type ProvidersProps = {
  children: React.ReactNode
}

export type LayoutProps = {
  children: React.ReactNode
}

export type SeoProps = {
  description?: string
  ogDescription?: string
  ogImage?: string
  ogTitle?: string
  title: string
}

export type ThemeMode = 'light' | 'dark'
