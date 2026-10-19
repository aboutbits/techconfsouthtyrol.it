import { site } from '../../../data/site'
import { IconDiscord } from '../../icons/Icons'
import { ButtonLink } from '../../shared/Button'
import { Section, SectionHeader } from '../../shared/Section'

export function Community() {
  return (
    <Section id="community" tone="pastel">
      <SectionHeader label="Community" title="The community on Discord">
        <ButtonLink href={site.discordUrl} variant="dark" external>
          <IconDiscord className="size-5" />
          Join us on Discord
        </ButtonLink>
      </SectionHeader>
      <div className="flex max-w-3xl flex-col gap-6 text-md text-navy/80">
        <p className="text-xl text-navy">
          The tech community of South Tyrol shares insights every day.
        </p>
        <p>
          On our Discord server, you can post what you learn, ask questions and
          discuss with the developers, engineers and designers of South Tyrol.
          News about a future conference lands there first.
        </p>
        <p>
          To keep the community a friendly place, we approve each request to
          join by hand. Tell us a few words about yourself and we let you in.
        </p>
      </div>
    </Section>
  )
}
