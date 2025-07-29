import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Migration Project: AngularJS to Angular 14 - Accion Labs',
							description: 'Full application migration from legacy AngularJS to a modular Angular 14 Nx workspace.',
							metrics: {
								performance: 92,
								accessibility: 95,
								seo: 97,
							},
							techDetails: [
					
								'Migration Angular JS with AI Copilot',
								'Building Dashboard Insight',
								'Service refactoring & shared UI modules'
							],
							image: '/migration-project.jpg',
						},
						{
							title: 'GDPR-Compliant Dashboard with AI & Power BI',
							description: 'Analytics dashboard built for GDPR compliance, integrating Power BI with AI for enhanced reporting.',
							metrics: {
								performance: 94,
								accessibility: 96,
								seo: 98,
							},
							techDetails: [
								'Angular 14 & Java 7 backend integration',
								'Power BI embedding and API control',
								'CI/CD with GitLab & Docker',
								'Microservice communication'
							],
							image: '/gdpr-dashboard.jpg',
						},
						
						{
							title: 'Bank Reporting System for Multinational Insurance',
							description: 'International financial reporting tool with real-time data processing and multilingual support.',
							metrics: {
								performance: 93,
								accessibility: 94,
								seo: 99,
							},
							techDetails: [
								'Angular frontend with dynamic form rendering',
								'Kafka and Redis for real-time streams',
								'Java EE backend with MySQL persistence',
								'Role-based access & country-specific logic'
							],
							image: '/bank-reporting.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

