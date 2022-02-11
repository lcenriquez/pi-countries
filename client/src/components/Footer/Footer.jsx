import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <p className={style.message}>Created with ❤️ by <a href="https://github.com/lcenriquez" target="_blank" rel="noreferrer">Luis Carlos Enríquez</a></p>
    </footer>
  );
}