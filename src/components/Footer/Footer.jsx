import logo from '/logo_footer.svg'
import phone from '/phone.svg'
import mail from '/mail.svg'
import inst from '/inst.svg'
import s from './Footer.module.css'
export default function Footer() {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.footer_content}>

                    <div className={s.nav}>
                        <h4>НАВИГАЦИЯ</h4>
                        <nav>
                            <div className={s.row}>
                                <a href="#">Кухни</a>
                                <a href="#">Спальни</a>
                                <a href="#">Гостинные</a>
                            </div>
                            <div className={s.row}>
                                <a href="#">Прихожие</a>
                                <a href="#">Офисная мебель</a>
                                <a href="#">Детская</a>
                            </div>
                            <div className={s.row}>
                                <a href="#">Шкафы</a>
                                <a href="#">Матрасы</a>
                                <a href="#">Мягкая мебель</a></div>
                        </nav>
                        <div className={s.nav_end}>
                            <a className={s.a_red} href="#">Акции</a>
                            <a href="#">Новинки</a>
                        </div>
                    </div>
                    <div className={s.right}>
                        <img src={logo} alt="" />
                        <div className={s.adress}>
                            <p>г. Казань, Горьковское шоссе, <br />
                                30 Ж/К Черное море
                            </p>
                        </div>
                        <div className={s.social_media}>
                            <a href="tel:+78005553535"><img src={phone} alt="" />8 (800) 555 35 35</a>
                            <a href="#"><img src={inst} alt="" />INSTAGRAM</a>
                            <a href="mailto:mebel_loft_kazan@mail.ru"><img src={mail} alt="" />mebel_loft_kazan@mail.ru</a>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}