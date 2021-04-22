function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer root__footer" aria-label="Footer">
      <p className="footer__copyright">&copy; {date} Артем Мезенов</p>
    </footer>
  );
}

export default Footer;
