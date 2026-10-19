import Link from 'next/link'
import { site } from '../../data/site'
import { Logo } from '../shared/Logo'

const navigation = [
  { href: '/#tech-talks', label: 'Meetup' },
  { href: '/#community', label: 'Community' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-navy/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Logo className="w-11" />
          <span className="hidden text-md font-semibold md:inline">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm md:gap-2 md:text-base">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block whitespace-nowrap rounded-full p-2 transition-colors hover:bg-slate focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
