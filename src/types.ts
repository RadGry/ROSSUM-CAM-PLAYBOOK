export type VerdictKind = 'engage' | 'monitor' | 'route' | 'ignore'

export interface NavLink {
  id: string
  label: string
  number?: string
  sub?: boolean
}

export interface NavGroup {
  title: string
  links: NavLink[]
}

export interface Primitive {
  key: string
  index: string
  values: string
  source: string
}

export interface CompetencyLayer {
  name: string
  content: string
  resource?: { title: string; method: string }
}

export interface Competency {
  id: string
  number: string
  title: string
  layers: CompetencyLayer[]
}

export interface KnotCoordinate {
  key: string
  value: string
}

export interface KnotStep {
  label: 'read' | 'verdict' | 'convert'
  text: string
}

export interface Knot {
  id: string
  title: string
  coordinates: KnotCoordinate[]
  verdict: string
  verdictKind: VerdictKind
  play: string
  steps: KnotStep[]
  talkTrack: string
}

export interface Resource {
  source: string
  subtitle?: string
  forTopic: string
  take: string
}
