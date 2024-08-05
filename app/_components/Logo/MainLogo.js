import Link from "next/link";

const MainLogo = () => {
    return (
        <Link
            className="flex width-fit-content"
            href="/"
            aria-label="Image of logo that navigates to the Home page">
            <svg
                width="60"
                height="50"
                viewBox="0 0 65 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <title>Image of logo</title>
                <path d="M32.5 0L64.976 56.25H0.0240479L32.5 0Z" fill="white" />
            </svg>
        </Link>
    );
};

export default MainLogo;
