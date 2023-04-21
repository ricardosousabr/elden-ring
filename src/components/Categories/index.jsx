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
        const keyLink = 20 + index

        return (
          <Link href={'/surveyForm/' + category} key={keyLink}>
            <Button key={index}>{category}</Button>
          </Link>
        )
      })}
    </BoxButton>
  )
}
