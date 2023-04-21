import Image from 'next/image'
import Categories from '@/src/components/Categories'

export default function homeCategories() {
  return (
    <div>
      <div>
        <Image
          src="/img/img-elden-ring-logo.png"
          alt=""
          width={600}
          height={200}
        />
      </div>
      <Categories />
    </div>
  )
}
