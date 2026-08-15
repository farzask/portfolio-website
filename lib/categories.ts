export const PROJECT_CATEGORIES = ['Flutter', 'Full Stack', 'Side Quests'] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

// Shape Keystatic's `fields.select` expects, derived so the list lives in one place.
export const PROJECT_CATEGORY_OPTIONS = PROJECT_CATEGORIES.map((value) => ({
  label: value,
  value,
})) as { label: ProjectCategory; value: ProjectCategory }[]
