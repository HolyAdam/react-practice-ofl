const Drawer = () => {

    return (
    <div style={{ display: 'none' }} className="overlay">
        <div className="drawerBlock d-flex flex-column">
          <h3 className="d-flex justify-between mb-30">
            Корзина
            <img className="cu-p" src="img/button-remove.svg" alt="Закрыть" />
          </h3>
          <div className="drawerTop flex">


          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{
              width: 68, 
              height: 68, 
              backgroundImage: "url(/img/snickers/1.png)",
              backgroundSize: 'contain',
              backgroundPosition: '0 -5px',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{
              width: 68, 
              height: 68, 
              backgroundImage: "url(/img/snickers/1.png)",
              backgroundSize: 'contain',
              backgroundPosition: '0 -5px',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{
              width: 68, 
              height: 68, 
              backgroundImage: "url(/img/snickers/1.png)",
              backgroundSize: 'contain',
              backgroundPosition: '0 -5px',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{
              width: 68, 
              height: 68, 
              backgroundImage: "url(/img/snickers/1.png)",
              backgroundSize: 'contain',
              backgroundPosition: '0 -5px',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{
              width: 68, 
              height: 68, 
              backgroundImage: "url(/img/snickers/1.png)",
              backgroundSize: 'contain',
              backgroundPosition: '0 -5px',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{
              width: 68, 
              height: 68, 
              backgroundImage: "url(/img/snickers/1.png)",
              backgroundSize: 'contain',
              backgroundPosition: '0 -5px',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
          </div>
          </div>
          </div>

          <div className="drawerBottom">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ
            <img src="img/arrow.svg" alt="Стрелка" />
          </button>
          </div>
          
        </div>

    </div>

    )
}

export default Drawer