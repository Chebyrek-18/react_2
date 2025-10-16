import logo from '/LOGO.svg'
import search from '/search-icon.svg'
import profile from '/profile-icon.svg'
import wish from '/wishlist-icon.svg'
import bag from '/bag.svg'
import s from './Header.module.css'
export default function Header() {
    return (
        <>
            <header className={s.header}>
                <div className="container">
                    <div className={s.header_inner}>
                        <img src={logo} alt="Логотип" className={s.logo} />
                        <nav className={s.nav}>
                            <a href="#" className={s.nav_item}>Главная</a>
                            <a href="#" className={s.nav_item}>О нас</a>
                            <a href="#" className={s.nav_item}>Контакты</a>
                        </nav>
                        <div className={s.search}>
                            <label htmlFor="search_input"><img src={search} alt="" /></label>
                            <input type="text" id='search_input' placeholder='Поиск' />
                        </div>
                        <div className={s.profile_nav}>
                            <a href="#"><img src={wish} alt="" /></a>
                            <a href="#"><img src={bag} alt="" /></a>
                            <a href="#"><img src={profile} alt="" /></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
