import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Full stack Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
	{
		title: 'Angular Development',
		icon: '🅰️',
		features: ['Standalone Components', 'NgRx / Reactive Forms', 'Lazy Loading Modules'],
	},
	{
		title: 'Enterprise Migration',
		icon: '♻️',
		features: ['AngularJS to Angular 14+', 'Java 7 to Spring Boot', 'Monolith to Nx Workspace'],
	},
	{
		title: 'Dashboard & Visualization',
		icon: '📊',
		features: ['D3.js & ECharts', 'Power BI integration', 'Real-time KPIs'],
	},
	{
		title: 'Back-End Integration',
		icon: '🔗',
		features: ['Java EE / Spring Boot', 'REST APIs & Kafka', 'MongoDB / Redis'],
	},
	{
		title: 'DevOps & CI/CD',
		icon: '⚙️',
		features: ['GitLab Pipelines', 'Docker', 'Automated Deployments'],
	},
	{
		title: 'Security & Auth',
		icon: '🔐',
		features: ['Role-based access', 'Secure APIs', 'Auth0 / JWT integration'],
	},
]
.map((category) => (
						<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
