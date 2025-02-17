"use client";

import React, { useEffect, useState } from "react";
import Login from "./comp/Login";
import Loading from "./comp/Loading";
import TypeIt from "typeit-react";
import Link from "next/link";

const page = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    const [isConfess, setConfess] = useState(false);

    const handleConfes = () => {
        setTimeout(() => {
            setConfess(true);
        }, 2000);
    };

    return (
        <>
            {!isLoggedIn ? (
                <section className="">
                    <Login onLoginSuccess={handleLoginSuccess} />
                </section>
            ) : (
                <>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <section className="flex flex-col gap-4">
                            <div className="p-2 text-sm rounded-lg shadow-inner bg-color-lg shadow-color-xl">
                                <TypeIt
                                    options={{
                                        speed: 80,
                                        cursor: false,
                                        afterComplete: () => {
                                            handleConfes();
                                        },
                                    }}
                                    getBeforeInit={(instance) => {
                                        instance
                                            .pause(3000)
                                            .type(
                                                "- It's dedicated to my girl -",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .break({ delay: 500 })
                                            .break({ delay: 500 })
                                            .type(
                                                "Di hari yang istimewa ini..",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                " kamu tidak hanya sekedar bertambah usia",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", tetapi juga membuka lembaran baru yang akan dijalani.",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .break({ delay: 500 })
                                            .break({ delay: 500 })
                                            .type(
                                                "Semoga semakin matang dalam berpikir",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", bijaksana dalam bertindak",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", dan dewasa dalam menghadapi sesuatu.",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .break({ delay: 500 })
                                            .break({ delay: 500 })
                                            .type(
                                                "Ini hari dimana kamu harus melangkah",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", kayuh kapalmu dimana pun kamu berada",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", karena aku sedang menunggumu diujung Dermaga.",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .break({ delay: 500 })
                                            .break({ delay: 500 })
                                            .type("Masa depanmu kian menanti", {
                                                delay: 1000,
                                            })
                                            .type(
                                                ", nikmati jejak tak perlu berlari",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", biar kubantu tuk menuntunmu keujung hari",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .type(
                                                ", Selamat Ulang Tahun sang Kekasih.",
                                                {
                                                    delay: 1000,
                                                }
                                            )
                                            .break({ delay: 500 })
                                            .break({ delay: 500 })
                                            .type("- Ezii", {
                                                delay: 1000,
                                            });
                                        return instance;
                                    }}
                                />
                            </div>

                            {isConfess ? (
                                <div className="flex flex-col items-center justify-center gap-2 p-2 text-sm rounded-lg shadow-inner bg-color-lg shadow-color-xl">
                                    Ingin membalas pesan ini?
                                    <div className="flex items-center justify-center w-full gap-2">
                                        <button
                                            onClick={handleLogout}
                                            className="w-1/2 rounded-md bg-color-red"
                                        >
                                            Tidak
                                        </button>
                                        <Link
                                            passHref
                                            target="_blank"
                                            href={"https://wa.me/628872979779"}
                                            className="w-1/2 text-center rounded-md bg-color-green"
                                        >
                                            Balas
                                        </Link>
                                    </div>
                                </div>
                            ) : null}
                        </section>
                    )}
                </>
            )}
        </>
    );
};

export default page;
