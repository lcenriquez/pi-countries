import style from './App.module.css';

function App() {
  return (
    <div className={style.landingPageContainer}>
      <div className={style.banner}>
        <h1>Henry Countries</h1>
        <h2>Por Luis Carlos Enríquez</h2>
        <button className={style.cta}>Comenzar</button>
      </div>
    </div>
  );
}

export default App;
