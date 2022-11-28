import styles from "./Foot.module.css";

const footerItems = [
  {
    title: "Terms",
    link: `https://github-terms/github-terms-of-service`,
  },
  {
    title: "Privacy",
    link: `https://github-terms/github-terms-of-service`,
  },
];

export default function Foot() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
