import { Layout } from '../../layout/Layout'
import { Meta } from '../../layout/Meta'
import { Community } from './Community'
import { Hero } from './Hero'
import { TechTalks } from './TechTalks'

export function HomePage() {
  return (
    <Layout>
      <Meta />
      <Hero />
      <TechTalks />
      <Community />
    </Layout>
  )
}
