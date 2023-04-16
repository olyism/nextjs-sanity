import Link from "next/link"
import client from "../lib/client"

const HomePage = async () => {
  const data = await getData();

  return (
    <div>
      <h1 className="text-red-700">Hello there</h1>
      {data.map((item) => {
        const { _id, name, slug } = item

        return (
          <Link key={_id} href={`/${slug}`}>{name}</Link>
        )
      })}
    </div>
  )
}

async function getData() {
  const data = await client.fetch(`*[_type == "page"]`)

  return data;
}

export default HomePage
