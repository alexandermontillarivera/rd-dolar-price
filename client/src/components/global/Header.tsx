import styles from '@styles/components/global/Header.module.css'
import { Link } from 'react-router-dom'
import { menuHeader } from '@data/menu'

export function Header () {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src='/dolar.png' width="30px" height="30px" />
          <h2>
            Precio del dólar RD
          </h2>
        </div>
        <nav>
          <ul>
            {menuHeader.map(({ Icon, id, path, text }) => (
              <li key={id}>
                <Link to={path}>
                  <Icon stroke={1} />
                  <span>
                    {text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
