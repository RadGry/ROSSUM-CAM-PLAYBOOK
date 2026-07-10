import type { NavGroup } from '../types'

export const navigation: NavGroup[] = [
  {
    title: 'Start',
    links: [{ id: 'use', number: '00', label: 'How to use this' }],
  },
  {
    title: 'Part 1 · The grammar',
    links: [
      { id: 'primitives', number: '1.1', label: 'Primitives' },
      { id: 'spine', number: '1.2', label: 'Decision spine' },
      { id: 'unknown', number: '1.3', label: 'Decompose the unknown' },
    ],
  },
  {
    title: 'Part 2 · Competencies',
    links: [
      { id: 'c-prioritise', label: 'Prioritisation at scale', sub: true },
      { id: 'c-renewal', label: 'Renewals', sub: true },
      { id: 'c-expansion', label: 'Expansion', sub: true },
      { id: 'c-escalation', label: 'Escalation & tier politics', sub: true },
      { id: 'c-reviews', label: 'Business reviews', sub: true },
      { id: 'c-stakeholder', label: 'Stakeholder management', sub: true },
      { id: 'c-advocacy', label: 'Advocacy & product feedback', sub: true },
    ],
  },
  {
    title: 'Part 3 · Knot library',
    links: [{ id: 'knots', number: '3.0', label: '~21 worked tangles' }],
  },
  {
    title: 'Part 4 · Reference',
    links: [{ id: 'resources', number: '4.0', label: 'Resource appendix' }],
  },
]

export const heroChips = [
  { label: 'Book', value: '~100–110 commercial accounts' },
  { label: 'Gate', value: '89% quarterly renewal' },
  { label: 'VC split', value: '65 renewal / 35 expansion' },
  { label: 'Status', value: 'v0.2 — refined in first 90 days with the team' },
]
