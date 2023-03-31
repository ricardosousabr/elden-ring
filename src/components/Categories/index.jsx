import Link from 'next/link'
import Button from '../Button'
import { BoxButton } from './styles'
import axios from 'axios'
import { useState } from 'react'

export default function Categories() {
  const [responseApi, setResponseApi] = useState(null)
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

  function getData() {
    axios
      .get('https://eldenring.fanapis.com/api/armors?name=All-knowing%20Armor')
      .then((response) => {
        console.log(response.data)
        setResponseApi(response.data)
      })
  }

  return (
    <BoxButton>
      {categoriesName.map((categorie, index) => {
        return (
          <Link href="/subcategory" key="link">
            <Button key={index}>{categorie}</Button>
          </Link>
        )
      })}
    </BoxButton>
  )
}
