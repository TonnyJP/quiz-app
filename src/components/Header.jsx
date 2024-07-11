import logoImg from '../assets/quiz-logo.png';
export const Header = () => {
  return (
    <header>
      <img src={logoImg} alt='Quiz logo' />
      <h1>Reactquiz</h1>
    </header>
  );
};
