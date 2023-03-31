export default function Subcategory() {
  const [responseApi, setResponseApi] = useState(null)

  function getData() {
    axios
      .get('https://eldenring.fanapis.com/api/armors?name=All-knowing%20Armor')
      .then((response) => {
        console.log(response.data)
        setResponseApi(response.data)
      })
  }

  return (
    <div>
      {responseApi ? (
        <p>{responseApi.data[0].name}</p>
      ) : (
        <p>Busque o que deseja</p>
      )}
    </div>
  )
}
