import Link from 'next/link'
import Button from '../Button'
import { BoxButton } from './styles'

export default function Categories() {
  const categoriesName = [
    'Ammos',
    'Armors',
    'Ashes of War',
    'Bosses',
    'Classes',
    'Creatures',
    'Incantations',
    'Items',
    'Locatiosn',
    'NPCs',
    'Shields',
    'Sorceries',
    'Spirits',
    'Talismans',
    'Weapons',
  ]

  return (
    <BoxButton>
      {categoriesName.map((category, index) => {
        return (
          <Link href={'/surveyForm/' + category} key="link">
            <Button key={index}>{category}</Button>
          </Link>
        )
      })}
    </BoxButton>
  )
}
