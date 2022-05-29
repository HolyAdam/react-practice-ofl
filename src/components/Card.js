const Card = () => {

    return (
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
    )
}

export default Card