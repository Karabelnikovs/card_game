import { PropsWithChildren } from "react";

export default function CardHolder(props: PropsWithChildren) {
  return (
<div className="relative flex h-card-height w-card-width items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-pink-500 to-blue-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:outline-none">
    {props.children}
    </div>
  );
}
