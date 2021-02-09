import styles from './App.module.scss';
import Logo from './assets/logo.svg';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <figure className={styles.left}>
          <img src={Logo} alt="Vercel Logo" />
        </figure>

        <nav className={styles.middle}>
          <ul>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </nav>

        <div className={styles.right}>
          <button>Next.js Conf</button>

          <a href="#">Login</a>

          <button>Sign Up</button>
        </div>
      </header>

      <main>
        <h1>
          <span>Develop.</span>
          <span>Preview.</span>
          <span>Ship.</span>
        </h1>

        <div className={styles.buttonsContainer}>
          <button>Start coding</button>

          <button className={styles.outline}>Get a demo</button>
        </div>

        <h2>
          Vercel combines the best developer expirience with an obsessive focus
          on end-user performance.
          <br />
          Our platform enables frontend teams to do their best work.
        </h2>
      </main>

      <footer>Explore the Vercel way</footer>
    </div>
  );
};

export default App;
