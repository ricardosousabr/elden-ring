import { useState } from 'react'
import axios from 'axios'

export default function Form({ category }) {
  const [responseApi, setResponseApi] = useState(null)
  const [inputSearch, setInputSearch] = useState('')
  const typeCategory = category.toLowerCase()

  function getData() {
    axios
      .get(
        'https://eldenring.fanapis.com/api/' +
          typeCategory +
          '?name=' +
          inputSearch
      )
      .then((response) => {
        setResponseApi(response.data)
      })
      .catch((error) => console.log(error))
  }

  function clearInput() {
    setInputSearch('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    getData()
    clearInput()

    console.log(typeCategory)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputSearch}
          placeholder="digite a sua pesquisa"
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value)
          }}
        />
        <button>Search</button>
      </form>
      {responseApi ? (
        <p>{responseApi.data[0].name}</p>
      ) : (
        <p>Busque o que deseja</p>
      )}
    </div>
  )
}
