import Form from '@/src/components/Form'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'Ammos' } },
      { params: { category: 'Armors' } },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  return {
    props: context.params,
  }
}

export default function Subcategory({ category }) {
  console.log(category)
  return (
    <div>
      <Form />
    </div>
  )
}
