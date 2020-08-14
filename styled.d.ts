// import original module declarations
import 'styled-components'

// probably for the dark/light modes
declare module 'styled-components' {
  export interface IGunGelMode {
    borderRadius: string

    colors: {
      main: string
      secondary: string
    }
  }
  export interface IStyledNativeComponent{
      className: string
      children: string  
      
  }
}