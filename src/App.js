import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />


      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">
            Все кроссовки
          </h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Поиск" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="snickers d-flex">
        
        <Card />
        <Card />
        <Card />

        
        </div>
      </div>
    </div>
  );
}

export default App;
