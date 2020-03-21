export interface BaseColors {
  primary: String
  primary100: String
  primary200: String
  primary300: String
  accent: String
  danger: String
  warning: String
  success: String
  info: String
}

export interface TextColors {
  txt1: String
  txt2: String
  txt3: String
}

export interface ViewColors {
  bg1: String
  bg2: String
  bg3: String
  bg4: String
}

export interface Theme extends BaseColors, ViewColors, TextColors {}

export interface ThemeProps {
  theme: Theme
}
