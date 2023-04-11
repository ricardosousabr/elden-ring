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
      {categoriesName.map((categorie, index) => {
        return (
          <Link href="/surveyForm" key="link">
            <Button key={index}>{categorie}</Button>
          </Link>
        )
      })}
    </BoxButton>
  )
}
