import { useState } from 'react'
import axios from 'axios'
import Button from '../Button'
import {
  Container,
  FormSurvey,
  InputSurvey,
  ImageItem,
  ContainerTitle,
  Title,
  Text,
  ContainerImage,
  ContainerText,
} from './styles'

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
    <Container>
      <FormSurvey onSubmit={handleSubmit}>
        <InputSurvey
          value={inputSearch}
          placeholder="digite a sua pesquisa"
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value)
          }}
        />
        <Button>Search</Button>
      </FormSurvey>
      {responseApi ? (
        <div>
          <ContainerImage>
            <ImageItem src={responseApi.data[0].image} alt="" />
          </ContainerImage>
          <ContainerTitle>
            <Title>{responseApi.data[0].name}</Title>
          </ContainerTitle>
          <ContainerText>
            <Text>{responseApi.data[0].description}</Text>
          </ContainerText>
        </div>
      ) : (
        <Text>Busque o que deseja</Text>
      )}
    </Container>
  )
}
