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
        <div className="flex flex-col items-center justify-center gap-4 shadow-inner rounded-xl bg-color-lg shadow-color-xl">
            <section className="flex w-full p-3">
                <User
                    weight="thin"
                    size={90}
                    className="mr-2 border-2 rounded-lg text-color-accent border-color-accent bg-color-md"
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
                        Sign In
                    </button>
                </form>
            </section>

            <section className="mb-2">
                <Link
                    passHref
                    target="_blank"
                    href={
                        "https://wa.me/628872979779?text=ini%20apa%20akunnya?"
                    }
                    className="p-4 text-center text-color-blue"
                >
                    Sign Up?
                </Link>
            </section>
        </div>
    );
};

export default Login;
