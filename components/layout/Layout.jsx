import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Esimo CRM</h2>
        <Link href={"/add-customer"}>Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://github.com/xe4at/" target="_blank" rel="noreferrer">
          Esimo
        </a>
        Next.js course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
