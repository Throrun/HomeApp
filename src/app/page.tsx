import styles from "./page.module.css";
import Header from "./ui/reusable/header";
import Input from "./ui/reusable/input";
import LoginForm from "./ui/unique/loginForm";
export default function Home() {
  return (
    <main>
      <Header variant="login" />
      <LoginForm />
    </main>
  );
}
