"use client";
import { INavItem } from "@/types";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";

export default function Navigation({ navData }: { navData: INavItem[] }) {
	const [currentNav, setCurrentNav] = useState<INavItem[]>(navData || []);
	const [navHistory, setNavHistory] = useState<INavItem[][]>([]);
	const [isSlidingOut, setIsSlidingOut] = useState(false);
	const [isSlidingIn, setIsSlidingIn] = useState(false);

	const handleNavClickFunction = (item: INavItem) => {
		if (item.children) {
			setIsSlidingOut(true);
			setTimeout(() => {
				setNavHistory([...navHistory, currentNav]);
				setCurrentNav(item.children || []);
				setIsSlidingOut(false);
				setIsSlidingIn(true);
				setTimeout(() => setIsSlidingIn(false), 300);
			}, 300);
		} else if (item.url) {
			window.location.href = item.url;
		}
	};

	const onBackHistoryBtnFunction = () => {
		if (navHistory.length > 0) {
			setIsSlidingOut(true);
			setTimeout(() => {
				const previousNav = navHistory.pop();
				if (previousNav) {
					setCurrentNav(previousNav);
					setNavHistory([...navHistory]);
					setIsSlidingOut(false);
					setIsSlidingIn(true);
					setTimeout(() => setIsSlidingIn(false), 500);
				}
			}, 500);
		}
	};

	return (
		<div className="relative bg-[#1d1f21] shadow-md rounded-lg p-6 overflow-hidden m-2">
			{navHistory.length > 0 && (
				<button
					onClick={onBackHistoryBtnFunction}
					className="flex items-center text-[#4f46e5] hover:text-[#281fda]  mb-4"
				>
					<FaChevronLeft className="h-5 w-5 mr-2" />
					<span className="font-medium">Back</span>
				</button>
			)}

			<ul
				className={`space-y-3 transition-all transform ${
					isSlidingIn ? "animate-slide-in" : ""
				} ${isSlidingOut ? "animate-slide-out" : ""}`}
			>
				{currentNav.map((item) => (
					<li
						key={item.id}
						onClick={() => handleNavClickFunction(item)}
						className="flex justify-between items-center p-3 bg-[#101720] hover:bg-[#101723] rounded-md cursor-pointer transition-all"
					>
						<span className="text-[#f2f0ef] font-medium">{item.title}</span>
						{item.children ? (
							<FaChevronRight className="h-5 w-5 text-gray-600" />
						) : (
							<span className="text-green-500">
								<HiLink />
							</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
