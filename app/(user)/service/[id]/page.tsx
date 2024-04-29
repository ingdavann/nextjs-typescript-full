import CardProductDetail from "@/components/card/CardProductDetail";

type PropsParams = {
    params: {
        id: number 
    };
    // searchParam: any
}
const ENDPOINT = "https://fakestoreapi.com/products/";
const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
}  

export default async function Detail(props: PropsParams) {
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
