import { ContentComponent } from "./body"
import { FooterComponent } from "./footer"
import { HeaderComponent } from "./header"

export const ManinContainer = () => {
  return <>
    <HeaderComponent />

    <ContentComponent />

    <FooterComponent />
  </>
}