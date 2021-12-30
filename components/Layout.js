import YumLayout from '@@yum/layout/Layout'
import { ThemeProvider } from 'styled-components'
import Theme from './Theme'
import Config from '../config/Config'
import Footer from '@@components/Footer'


export default function Layout(props) {
  return (
    <ThemeProvider theme={Theme}>
      <YumLayout config={Config} page={props.page} footer={<Footer />} style={props.style}>
        {props.children}
      </YumLayout>
    </ThemeProvider>
  )
}