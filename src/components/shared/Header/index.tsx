import i18n from '@/i18n/i18n'
import { Link } from 'react-router-dom'

export default function Header() {
  const currentLanguage = i18n.language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="py-3 bg-banner">
      <div className="max-w-7xl flex mx-auto px-4">
        <nav className="flex items-end">
          <Link to="/">
            <img src="./src/assets/images/logo.png" alt="" className="h-5 lg:h-7" />
          </Link>
        </nav>
        <select
          className="text-sm ml-auto"
          defaultValue={currentLanguage}
          onChange={(e) => {
            changeLanguage(e.target.value)
          }}
        >
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  )
}
