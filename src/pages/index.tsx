import { logout } from '@/apis/auth.api'
import { AppContext } from '@/contexts/app.context'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const { setIsAuthenticated } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-6xl text-transparent">
        {t('hello')}
      </div>
      <button className="hover:text-gray-600" onClick={handleLogout}>
        {t('logout')}
      </button>
    </div>
  )
}
