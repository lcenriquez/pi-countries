import style from './App.module.css';

function App() {
  return (
    <div className={style.landingPageContainer}>
      <div className={style.banner}>
        <h1>Henry Countries</h1>
        <h2>Made by Luis Carlos Enríquez</h2>
        <button className={style.cta}>Start</button>
      </div>
    </div>
  );
}

export default App;
