import CardProductDetail from "@/components/card/CardProductDetail";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: {id: string};
    searchParams: {[key: string]: string | string[] | undefined};
}

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
}  

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      images: product.image
    },
  }
}

export default async function Detail(props: Props) {
  const data = await getData(props.params.id);
  return (
    <div className='h-screen grid place-content-center'>
      <CardProductDetail 
        title={data.title}
        image={data.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oruMfmenl0Gf8qmyupis5g9F-YyXyh9K4xunOWJJtg&s"}
        description={data.description || "No Description"}
      />
    </div>
  )
}
