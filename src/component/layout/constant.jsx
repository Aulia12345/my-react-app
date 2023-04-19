import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
    {
        label: <Link to="/home">Home</Link>,
        key: "/home",
    },
    {
        label: <Link to="/form">Form</Link>,
        key: "/form",
    },
    {
        label: <Link to="/about-me">About Me</Link>,
        key: "/about-me",
    },

    {
        label: (
            <Link to="/">
                <Button
                    type="primary"
                    onClick={() => {
                        localStorage.removeItem("token");
                    }}
                    danger
                >
                    Logout
                </Button>
            </Link>
        ),
        key: "5",
    },
];