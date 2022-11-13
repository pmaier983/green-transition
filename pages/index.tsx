import type { NextPage } from "next"

import { ChromeExtension } from "@/components/ChromeExtension"
import { AppWrapper } from "@/components/AppWrapper"

const Home: NextPage = () => (
  <AppWrapper>
    <ChromeExtension />
  </AppWrapper>
)

export default Home
