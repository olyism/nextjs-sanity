import { PortableText } from '@portabletext/react'
import client from "lib/client"

interface Props {
  params: {
    page: string
  }
}

const ContentPage = async ({ params }: Props) => {
  const data = await getData(params.page)

  return (
    <div>
      <h1>{data[0].name}</h1>
      <PortableText value={data[0].content} />
    </div>
  )
}

export default ContentPage;

async function getData(page: string) {
  const data = await client.fetch(`*[_type == "page" && slug == "${page}"]`)

  return data;
}
