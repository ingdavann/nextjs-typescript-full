import {ConfirmIcon} from "@/components/icons/FontAwsome.js";
type Props = {
  params: {
    key: string
  },
  searchParams: any
}
export default function ConfirmEmail(props: Props) {
  return (
    <main>
        {/* Confirm Email Card */}
        <section>
            {/* Icon Confirm */}
            <ConfirmIcon/>
            {/* Title */}
            {/* Description */}
            {/* Button */}
        </section>
    </main>
  )
}
