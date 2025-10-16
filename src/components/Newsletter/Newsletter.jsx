import Button from '../Button/Button'
import s from './Newsletter.module.css'
export default function Newsletter() {
    return (
        <>
            <div className={s.Newsletter}>
                <h2 className={s.title}>
                    Подпишитесь на рассылку
                </h2>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt laborum libero in, tenetur odit, provident molestias magni reprehenderit vel consectetur saepe eaque minima. Doloremque magnam laborum ab dolor hic.</p>
                <div className={s.Newsletter_input}>
                    <input type="text" placeholder='Email' />
                    {Button("Подписаться", s.btn)}
                </div>
            </div>
        </>
    )
}