import { site } from '../../../data/site'
import { IconArrowRight } from '../../icons/Icons'
import { ButtonLink } from '../../shared/Button'
import { Section, SectionHeader } from '../../shared/Section'

export function TechTalks() {
  return (
    <Section id="tech-talks" tone="white">
      <SectionHeader label="Meetup" title={site.techTalksName}>
        <ButtonLink href={site.techTalksUrl} variant="dark" external>
          Visit {site.techTalksName}
          <IconArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </ButtonLink>
      </SectionHeader>
      <div className="flex max-w-3xl flex-col gap-6 text-md text-navy/80">
        <p className="text-xl text-navy">
          No conference yet, but the community already meets.
        </p>
        <p>
          {site.techTalksName} is our quarterly meetup to connect, share and
          discuss. Join us for in-person talks about software development,
          DevOps, AI and more.
        </p>
      </div>
    </Section>
  )
}
