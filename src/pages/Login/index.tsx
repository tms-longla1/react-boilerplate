import { login } from '@/apis/auth.api'
import { Input } from '@/components/shared'
import { AppContext } from '@/contexts/app.context'
import { TErrorResponseApi } from '@/types/utils.type'
import { TAuthSchema, authSchema } from '@/utils/rules'
import { isAxiosUnprocessableEntityError } from '@/utils/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { t } = useTranslation()
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<TAuthSchema>({
    resolver: yupResolver(authSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: TAuthSchema) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<TErrorResponseApi<TAuthSchema>>(error)) {
          const responseError = error.response?.data.data
          if (responseError) {
            setError('password', {
              message: responseError.email,
              type: 'server'
            })
          }
        }
      }
    })
  })

  return (
    <div className="flex flex-col justify-center items-center pt-14">
      <div className="w-[428px]">
        <div className="mb-10">
          <div className="text-4xl text-center mb-6">{t('login')}</div>
          <div className="text-lg text-justify px-4">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s`}
          </div>
        </div>
        <form className="p-10 rounded-md shadow" onSubmit={onSubmit} noValidate>
          <Input
            type="email"
            name="email"
            register={register}
            className="mb-1"
            errorMessage={errors.email?.message}
            placeholder={t('email')}
          />
          <Input
            type="password"
            name="password"
            register={register}
            className="mb-1"
            errorMessage={errors.password?.message}
            placeholder={t('password')}
          />
          <div>
            <button className="w-full bg-primary text-white text-center py-3 px-2 rounded-sm">{t('login')}</button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  )
}
