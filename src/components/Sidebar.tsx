import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('use')

  useEffect(() => {
    const ids = navigation.flatMap((g) => g.links.map((l) => l.id))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="sidebar-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close menu' : 'Menu'}
      </button>

      <nav id="sidebar-nav" className={`toc ${open ? 'open' : ''}`}>
        <div className="brand">Rossum · Commercial AM</div>
        <h1>The CAM Operating Playbook</h1>

        {navigation.map((group) => (
          <div key={group.title}>
            <div className="grp">{group.title}</div>
            {group.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={[link.sub ? 'sub' : '', activeId === link.id ? 'active' : '']
                  .filter(Boolean)
                  .join(' ')}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.id)
                }}
              >
                {link.number && <span className="n">{link.number}</span>}
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </nav>

      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
