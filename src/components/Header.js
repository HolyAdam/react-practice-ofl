const Header = () => {
    
    return (
        <header className="header d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="Логотип" />
            <div className="headerInfo">
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="d-flex">
            <li className="mr-20">
                <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Иконка корзины" />
                <span>1205 руб.</span>
            </li>
            <li className="mr-20">
                <img width={18} height={18} src="/img/favorite-prof.svg" alt="Иконка любимых" />
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="Иконка пользователя" />
            </li>
        </ul>
      </header>
    )
}

export default Header