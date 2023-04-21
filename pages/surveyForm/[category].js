import Form from '../../src/components/Form'
import categoriesName from '../../constant/categaory'

export async function getStaticPaths() {
  const paths = categoriesName.map((categoryName) => ({
    params: { category: categoryName },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  return {
    props: context.params,
  }
}

export default function Subcategory({ category }) {
  return (
    <div>
      <Form category={category} />
    </div>
  )
}
