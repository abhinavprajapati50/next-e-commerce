import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title + " - Amazone" : "Amazone"} </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="flex min-h-screen flex-col justify-between ">
                <header>
                    <nav className="flex h-12 items-center px-4 shadow-md justify-between">

                        <Link href="/" className="font-bold">      amazon </Link>
                        <div>

                            <Link href="/cart" className="p-2">      Cart </Link>
                            <Link href="/login" className="p-2">      Login </Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4 " > {children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner ">CopyRight 2023</footer>
            </div>
        </>
    );
};

// export default Layout;
