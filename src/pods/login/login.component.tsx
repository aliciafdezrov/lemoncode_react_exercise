import React from "react";

interface Props {
    onNavigate: () => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const {onNavigate} = props;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === "admin" && password === "test") {
            onNavigate();
        } else {
            alert("User / password not valid, psst... admin / test");
        }
    };

    return (
        <form onSubmit={handleNavigation}>
            <h2>Hello from login page</h2>
            <div>
                <div>
                    <label>Username: </label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">login</button>
        </form>
    );
};
