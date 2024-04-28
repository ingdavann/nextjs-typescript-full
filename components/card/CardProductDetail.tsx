
import { Card } from "flowbite-react";

type PropsType = {
    title: string;
    image: string;
    description: string;
}

export default function CardProductDetail({title, image, description}: PropsType) {
  return (
    <Card className="max-w-sm p-5" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
