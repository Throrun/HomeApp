import Header from "@/app/ui/reusable/header";
import LoginForm from "@/app/ui/unique/loginForm";

export default function Home() {
    return (
        <main>
            <Header variant="login" />
            <LoginForm />
        </main>
    );
}
