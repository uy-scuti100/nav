import { INavItem } from "@/types";
export const navData: INavItem[] = [
	{
		id: "home",
		title: "Home",
		url: "/",
	},
	{
		id: "about",
		title: "About",
		children: [
			{ id: "about-team", title: "Team", url: "/about/team" },
			{ id: "about-company", title: "Company", url: "/about/company" },
			{
				id: "about-history",
				title: "History",
				children: [
					{
						id: "about-history-founders",
						title: "Founders",
						url: "/about/history/founders",
					},
					{
						id: "about-history-milestones",
						title: "Milestones",
						url: "/about/history/milestones",
					},
				],
			},
		],
	},
	{
		id: "services",
		title: "Services",
		children: [
			{
				id: "services-consulting",
				title: "Consulting",
				children: [
					{
						id: "3-1-1",
						title: "IT Consulting",
						url: "/services/consulting/it",
					},
					{
						id: "3-1-2",
						title: "Business Consulting",
						url: "/services/consulting/business",
					},
				],
			},
			{
				id: "services-development",
				title: "Development",
				children: [
					{
						id: "services-development-web",
						title: "Web Development",
						url: "/services/development/web",
					},
					{
						id: "services-development-mobile",
						title: "Mobile Development",
						url: "/services/development/mobile",
					},
					{
						id: "services-development-game",
						title: "Game Development",
						children: [
							{
								id: "services-development-game-unity",
								title: "Unity",
								url: "/services/development/game/unity",
							},
							{
								id: "services-development-game-unreal",
								title: "Unreal",
								url: "/services/development/game/unreal",
							},
						],
					},
				],
			},
		],
	},
	{
		id: "products",
		title: "Products",
		children: [
			{
				id: "products-software",
				title: "Software",
				children: [
					{
						id: "products-software-saas",
						title: "SaaS",
						url: "/products/software/saas",
					},
					{
						id: "products-premise",
						title: "On-premise",
						url: "/products/software/on-premise",
					},
				],
			},
			{
				id: "products-hardware",
				title: "Hardware",
				children: [
					{
						id: "products-hardware-laptops",
						title: "Laptops",
						url: "/products/hardware/laptops",
					},
					{
						id: "products-hardware-desktops",
						title: "Desktops",
						url: "/products/hardware/desktops",
					},
					{
						id: "products-hardware-servers",
						title: "Servers",
						url: "/products/hardware/servers",
					},
				],
			},
		],
	},
	{
		id: "contact",
		title: "Contact",
		children: [
			{ id: "contact-support", title: "Support", url: "/contact/support" },
			{ id: "contact-sales", title: "Sales", url: "/contact/sales" },
			{
				id: "contact-locations",
				title: "Locations",
				children: [
					{
						id: "contct-locations-us ",
						title: "US",
						url: "/contact/locations/us",
					},
					{
						id: "contact-locations-uk",
						title: "Europe",
						url: "/contact/locations/europe",
					},
					{
						id: "contact-locations-asia",
						title: "Asia",
						children: [
							{
								id: "contact-locations-asia-china",
								title: "China",
								url: "/contact/locations/asia/china",
							},
							{
								id: "contact-locations-asia-india",
								title: "India",
								url: "/contact/locations/asia/india",
							},
							{
								id: "contact-locations-asia-japan",
								title: "Japan",
								url: "/contact/locations/asia/japan",
							},
						],
					},
				],
			},
		],
	},
	{
		id: "blog",
		title: "Blog",
		url: "/blog",
	},
	{
		id: "careers",
		title: "Careers",
		children: [
			{
				id: "careers-open",
				title: "Open Positions",
				url: "/careers/open-positions",
			},
			{
				id: "careers-dept",
				title: "Departments",
				children: [
					{
						id: "careers-dept-eng",
						title: "Engineering",
						url: "/careers/departments/engineering",
					},
					{
						id: "careers-dept-mark",
						title: "Marketing",
						url: "/careers/departments/marketing",
					},
					{
						id: "7careers-dept-sales",
						title: "Sales",
						url: "/careers/departments/sales",
					},
				],
			},
		],
	},
];
