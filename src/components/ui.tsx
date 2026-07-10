import type { ReactNode } from 'react'
import type { VerdictKind } from '../types'

interface VerdictProps {
  kind: VerdictKind
  children: ReactNode
  className?: string
}

const kindClass: Record<VerdictKind, string> = {
  engage: 'v-engage',
  monitor: 'v-monitor',
  route: 'v-route',
  ignore: 'v-ignore',
}

export function Verdict({ kind, children, className = '' }: VerdictProps) {
  return (
    <span className={`verdict ${kindClass[kind]} ${className}`.trim()}>
      {children}
    </span>
  )
}

export function PlayTag({ children }: { children: ReactNode }) {
  return <span className="play-tag">{children}</span>
}

interface NoteProps {
  tag: string
  children: ReactNode
}

export function Note({ tag, children }: NoteProps) {
  return (
    <div className="note">
      <span className="tag">{tag}</span>
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: string
  lede?: string
}

export function SectionHeader({ eyebrow, title, lede }: SectionHeaderProps) {
  return (
    <>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="part">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </>
  )
}

export function MajorRule() {
  return <hr className="major" />
}

export function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a className="inl" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
