import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12">
        {/* while using fill property parent container should have position and size */}
        <Image src={"/featured.png"} alt="featured product" fill />
      </div>
      <ProductList />
    </div>
  )
}

export default Homepage