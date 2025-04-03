import { PropsWithChildren } from "react"

export default function SuccesMessage({ children } : PropsWithChildren) {
  return (
    <p className="bg-green-700 p-2 uppercase text-green-100 font-bold text-sm text-center">{children}</p>
  )
}
