import { RegisterOptions, UseFormRegister } from 'react-hook-form'

type TProps = {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({ type, errorMessage, placeholder, className, name, register, rules }: TProps) {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-inputBg text-inputText p-2 rounded-sm border border-inputBorder focus:border-inputBorder/50 outline-none"
        {...register(name, rules)}
      />
      <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errorMessage}</div>
    </div>
  )
}
