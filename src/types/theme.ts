export interface BaseColors {
  primary: string
  primary100: string
  primary200: string
  primary300: string
  accent: string
  danger: string
  warning: string
  success: string
  info: string
}

export interface TextColors {
  txt1: string
  txt2: string
  txt3: string
}

export interface ViewColors {
  bg1: string
  bg2: string
  bg3: string
  bg4: string
}

export interface Theme extends BaseColors, ViewColors, TextColors {}

export interface ThemeProps {
  theme: Theme
}
