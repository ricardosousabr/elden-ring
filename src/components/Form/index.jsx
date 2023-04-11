import { useState } from 'react'
import axios from 'axios'

export default function Form() {
  const [responseApi, setResponseApi] = useState(null)
  const [inputSearch, setInputSearch] = useState('')
  function getData() {
    axios
      .get('https://eldenring.fanapis.com/api/bosses?name=' + inputSearch)
      .then((response) => {
        console.log(response.data)
        setResponseApi(response.data)
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    getData()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder=""
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
