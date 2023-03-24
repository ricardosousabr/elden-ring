import { ButtonCategorie } from './styles'

export default function Button(props) {
  return (
    <>
      <ButtonCategorie>{props.children}</ButtonCategorie>
    </>
  )
}
