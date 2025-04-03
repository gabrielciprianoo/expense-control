import { PropsWithChildren } from "react";


export default function ErrorMessage({ children } : PropsWithChildren) {
  return (
    <p className="bg-red-700 p-2 uppercase text-red-100 font-bold text-sm text-center">{children}</p>
  )
}
