"use client";

import { User } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [isNick, setNick] = useState("");
    const [isPass, setPass] = useState("");

    const [isFormValid, setFormValid] = useState(false);

    useEffect(() => {
        setFormValid(isNick.trim() !== "" && isPass.trim() !== "");
    }, [isNick, isPass]);

    const handleNickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNick(e.target.value);
    };

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNick === "ezii" && isPass === "ez123") {
            onLoginSuccess();
        } else {
            alert("Nickname atau Password salah!");
        }
    };

    return (
        <>
            <section className="flex items-center justify-center gap-2 p-2 shadow-inner rounded-xl bg-color-lg shadow-color-xl">
                <User
                    weight="thin"
                    size={90}
                    className="border-2 rounded-lg bg-color-md"
                />

                <form className="flex flex-col w-full gap-2 font-mono text-black">
                    <input
                        required
                        type="text"
                        value={isNick}
                        onChange={handleNickChange}
                        placeholder="Nickname.."
                        className="rounded-md outline-none indent-3"
                    />
                    <input
                        required
                        type="password"
                        value={isPass}
                        onChange={handlePassChange}
                        placeholder="Password.."
                        className="rounded-md outline-none indent-3"
                    />
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                        className="rounded-md bg-color-accent"
                    >
                        Login
                    </button>
                </form>
                <br />
            </section>
            <br />
            <div className="text-center">
                Tap{" "}
                {
                    <Link
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://wa.me/628872979779"}
                        className="italic underline text-color-green animate-pulse"
                    >
                        disini
                    </Link>
                }{" "}
                untuk mendapatkan Nickname & Password yang dibutuhkan
            </div>
        </>
    );
};

export default Login;
