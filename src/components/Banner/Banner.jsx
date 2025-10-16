import banner from '/banner.png'
import s from './Banner.module.css'
import Button from '../Button/Button'
export default function Banner() {
    return (
        <>
            <div className={s.banner}>
                <img src={banner} alt="" />
            </div>
            <div className={s.text}>
                <h1>LOFT <br /> МЕБЕЛЛЬ</h1>
                <p className={s.title}>Современная и удобная мебель в Казани</p>
                {Button("Смотреть каталог", s.btn)}
            </div>
        </>
    )
}