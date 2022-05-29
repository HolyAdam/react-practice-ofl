function App() {
  return (
    <div className="wrapper clear">
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
            <img width={18} height={18} src="/img/favorite.svg" alt="Иконка любимых" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="Иконка пользователя" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="content__title mb-40">
          Все кроссовки
        </h1>
        ...

        <div className="snickers d-flex ">
        <div className="card">
          <img width={133} height={112} src="img/snickers/1.png" alt="Кроссовки модели один" />
          <h5 className="mb-20">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-info d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <strong>12 999 руб.</strong>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" alt="Иконка добавить" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="img/snickers/2.png" alt="Кроссовки модели один" />
          <h5 className="mb-20">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-info d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <strong>12 999 руб.</strong>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" alt="Иконка добавить" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="img/snickers/3.png" alt="Кроссовки модели один" />
          <h5 className="mb-20">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-info d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <strong>12 999 руб.</strong>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" alt="Иконка добавить" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="img/snickers/4.png" alt="Кроссовки модели один" />
          <h5 className="mb-20">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-info d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <strong>12 999 руб.</strong>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plus.svg" alt="Иконка добавить" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
