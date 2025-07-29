import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Saber ZERMANI - Web Developer',
	description:
		'I am a highly experienced Angular developer with over 8 years of combined expertise in building advanced dashboards and dynamic data visualizations. My work focuses on crafting modern, responsive, and user-friendly web applications. I specialize in frontend technologies, particularly Angular across multiple versions, and excel in creating interactive user interfaces using libraries such as D3.js and Highcharts. With strong integration of tools like Copilot and Vertex AI, and a robust backend foundation in Java, I deliver engaging, data-driven web experiences that are not only impactful but also scalable and performance-optimized.',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'ngrx',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Saber ZERMANI',
	],
	authors: [{ name: 'Saber ZERMANI' }],
	creator: 'Saber ZERMANI',
	openGraph: {
		title: 'Saber ZERMANI -Angular Web Developer Portfolio',
		description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		url: 'www.linkedin.com/in/saber-saber-72a41a280',
		siteName: 'Saber ZERMANI - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Saber ZERMANI - Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
