import { Header } from '@/components/shared'

type TProps = {
  children?: React.ReactNode
}

export default function AuthLayout({ children }: TProps) {
  return (
    <div>
      <Header />
      <main className="w-full">{children}</main>
    </div>
  )
}
