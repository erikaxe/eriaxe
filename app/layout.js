import { Roboto } from "next/font/google";
import "./styles/globals.scss";
import Providers from "@/app/providers";
import Globals from "@/app/_components/Globals/Globals";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Erik Axelsson | Front end developer",
    description: "Portfolio of Front end developer Erik Axelsson",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} m-b-70`}>
                <Providers>
                    <Globals />
                    {children}
                    <SpeedInsights />
                </Providers>
            </body>
        </html>
    );
}
