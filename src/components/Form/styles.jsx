import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const FormSurvey = styled.form`
  width: 400px;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
`
export const InputSurvey = styled.input`
  width: 200px;
  height: 30px;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid white;
  ::placeholder {
    color: white;
  }
  :focus {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid white;
    outline: 0;
  }
`

export const ContainerTitle = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  color: white;
`

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
`
export const Text = styled.p`
  color: white;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImageItem = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 12px;
`
