import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
	{
		category: 'Frontend (Angular Ecosystem)',
		skills: [
			{ name: 'Angular (8 to 17)', level: 95 },
			{ name: 'TypeScript', level: 92 },
			{ name: 'NgRx / RxJS', level: 90 },
			{ name: 'Tailwind / SCSS', level: 85 },
		],
		icon: '🅰️',
		color: 'from-red-500 to-red-700',
	},
	{
		category: 'Backend & Architecture',
		skills: [
			{ name: 'Java / Spring Boot', level: 65 },
			{ name: 'REST / Kafka APIs', level: 55 },
			{ name: 'Microservices', level: 60 },
			{ name: 'MongoDB / Redis / MySQL', level: 60 },
		],
		icon: '🖧',
		color: 'from-yellow-500 to-yellow-700',
	},
	{
		category: 'DevOps & Tooling',
		skills: [
			{ name: 'GitLab CI/CD', level: 50 },
			{ name: 'Docker & Containers', level: 50 },
			{ name: 'Nx Monorepo', level: 50 },
			{ name: 'Agile / Scrum', level: 60 },
		],
		icon: '⚙️',
		color: 'from-teal-500 to-teal-700',
	},
	{
		category: 'AI & Prompt Engineering',
		skills: [
			{ name: 'Prompt Engineering (LLMs)', level: 70 },
			{ name: 'Gemini / Gemini Pro', level: 65 },
			{ name: 'Vertex AI (Google Cloud)', level: 60 },
			{ name: 'LangChain / LLM APIs', level: 55 },
		],
		icon: '🧠',
		color: 'from-indigo-500 to-indigo-700',
	}
]

.map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
