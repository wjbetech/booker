import NavBar from "./(components)/NavBar";
import SideBar from "./(components)/SideBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Booker | @wjbetech",
	description: "A digital school library system",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex-grow`}>
				<div className="flex flex-col h-screen max-h-screen">
					<NavBar />
					<div className="flex h-full">
						<SideBar />
						<div className="w-full">{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
