"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	Calendar,
	Users,
	Code,
	Brain,
	Zap,
	Star,
	Award,
	Target,
	Layers,
	Cloud,
	Bot,
	Clock,
	Globe,
	Menu,
	ChevronLeft,
	ChevronRight,
	Paintbrush,
	Server,
	SquareChartGantt,
	Leaf,
	Blocks,
	Play,
} from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Carousel
const ProjectCarousel = ({ images, alt, className = "" }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isImageExpanded, setIsImageExpanded] = useState(false)

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
	}

	const goToSlide = (index) => {
		setCurrentIndex(index)
	}

	return (
		<div className={`relative group ${className}`}>
			{/* Main Image */}
			<div className="relative overflow-hidden rounded-t-lg">
				<img
					src={images[currentIndex] || "/placeholder.svg"}
					alt={`${alt} - Imagem ${currentIndex + 1}`}
					className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
				/>

				{/* Navigation Arrows */}
				{images.length > 1 && (
					<>
						<button
							onClick={prevSlide}
							className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 lg:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
							aria-label="Imagem anterior"
						>
							<ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 lg:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
							aria-label="Próxima imagem"
						>
							<ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
						</button>
					</>
				)}

				{/* Dots Indicator */}
				{images.length > 1 && (
					<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
									}`}
								aria-label={`Ir para imagem ${index + 1}`}
							/>
						))}
					</div>
				)}

				{/* Image Counter */}
				{images.length > 1 && (
					<div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
						{currentIndex + 1} / {images.length}
					</div>
				)}
			</div>
			<Dialog open={isImageExpanded} onOpenChange={setIsImageExpanded}>
				<DialogTrigger asChild>
					<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-20 cursor-pointer hover:bg-white transition-colors">
						<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
							<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
						</Button>
					</div>
				</DialogTrigger>
				<DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
					<div className="relative">
						<img
							src={images[currentIndex] || "/placeholder.svg"}
							alt={`${alt} - Imagem ${currentIndex + 1} (Expandida)`}
							className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
						/>
						{/* Navigation for expanded view */}
						{images.length > 1 && (
							<>
								<button
									onClick={(e) => {
										e.stopPropagation()
										prevSlide()
									}}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-all duration-200"
									aria-label="Imagem anterior"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation()
										nextSlide()
									}}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-all duration-200"
									aria-label="Próxima imagem"
								>
									<ChevronRight className="w-6 h-6" />
								</button>
							</>
						)}
						{images.length > 1 && (
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
								{images.map((_, index) => (
									<button
										key={index}
										onClick={(e) => {
											e.stopPropagation()
											goToSlide(index)
										}}
										className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
											}`}
										aria-label={`Ir para imagem ${index + 1}`}
									/>
								))}
							</div>
						)}
						{images.length > 1 && (
							<div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-2 rounded-full">
								{currentIndex + 1} / {images.length}
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default function Portfolio() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const projectImages = {
		smartfarm: [
			"/projects/smart_farm_1.gif?height=300&width=600&text=Smart-Farm+Dashboard",
			"/projects/smart_farm_2.gif?height=300&width=600&text=Smart-Farm+Dashboard",
		],
		invsort: [
			"/projects/inv.sort1.png?height=300&width=600&text=Inv.Sort+Dashboard",
			"/projects/inv.sort2.png?height=300&width=600&text=Inv.Sort+Dashboard",
			"/projects/inv.sort3.png?height=300&width=600&text=Inv.Sort+Dashboard",
		],
		sitecorporativo: [
			"/projects/cfi_website.gif?height=300&width=600&text=CFI+Homepage",
		],
		sistemacrm: [
			"/projects/management_cfi1.png?height=300&width=600&text=CRM+Dashboard",
			"/projects/management_cfi2.png?height=300&width=600&text=CRM+Dashboard",
			"/projects/management_cfi3.png?height=300&width=600&text=CRM+Dashboard",
			"/projects/management_cfi4.png?height=300&width=600&text=CRM+Dashboard",
		],
		checkpoint: [
			"/projects/checkpoint1.png?height=300&width=600&text=Checkpoint+Login",
			"/projects/checkpoint2.png?height=300&width=600&text=Checkpoint+Login",
			"/projects/checkpoint3.png?height=300&width=600&text=Checkpoint+Login",
			"/projects/checkpoint4.png?height=300&width=600&text=Checkpoint+Login",
			"/projects/checkpoint5.png?height=300&width=600&text=Checkpoint+Login",
			"/projects/checkpoint6.png?height=300&width=600&text=Checkpoint+Login",
			"/projects/checkpoint7.png?height=300&width=600&text=Checkpoint+Login",
		],
		streaming: [
			"/projects/streaming_cfi1.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi2.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi3.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi4.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi5.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi6.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi7.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi8.png?height=300&width=600&text=Streaming+Home",
			"/projects/streaming_cfi9.png?height=300&width=600&text=Streaming+Home",
		],
	}

	const techColors = {
		// Programming Languages
		Python: "bg-blue-500 text-white",
		Java: "bg-orange-500 text-white",
		JavaScript: "bg-yellow-500 text-black",
		TypeScript: "bg-blue-600 text-white",
		CSS: "bg-blue-400 text-white",
		HTML: "bg-orange-400 text-white",
		SQL: "bg-purple-500 text-white",
		PHP: "bg-indigo-600 text-white",

		// Frameworks & Libraries
		React: "bg-cyan-500 text-white",
		"Next.js": "bg-black text-white",
		"Spring Boot": "bg-green-600 text-white",
		Express: "bg-gray-700 text-white",
		Tailwind: "bg-teal-500 text-white",
		WordPress: "bg-blue-700 text-white",
		Flask: "bg-green-700 text-white",
		Vite: "bg-purple-700 text-white",
		Figma: "bg-pink-600 text-white",

		// Databases & Tools
		MySQL: "bg-orange-600 text-white",
		"Prisma ORM": "bg-gray-800 text-white",
		MongoDB: "bg-green-800 text-white",

		// Technologies
		Analytics: "bg-green-500 text-white",
		"Machine Learning": "bg-pink-500 text-white",
		ChatBot: "bg-indigo-500 text-white",
		RPA: "bg-teal-500 text-white",
		"Reconhecimento de Voz": "bg-red-500 text-white",
		"Intelligent Things": "bg-cyan-500 text-white",
		"Plataforma de Integração": "bg-violet-500 text-white",
		"API REST": "bg-emerald-500 text-white",
		"Desenvolvimento Mobile": "bg-purple-600 text-white",
		"Hospedagem de Site": "bg-rose-500 text-white",
	}

	const skillData = {
		"AI Agents": {
			icon: <Bot className="w-6 h-6" />,
			curso: "HuggingFace",
			ano: 2025
		},
		"Front-end": {
			icon: <Paintbrush className="w-6 h-6" />,
			curso: "Fatec e Senac",
			ano: 2022
		},
		"Back-end": {
			icon: <Server className="w-6 h-6" />,
			curso: "Fatec e Senac",
			ano: 2022
		},
		"Automação": {
			icon: <Zap className="w-6 h-6" />,
			curso: "Udemy",
			ano: 2021
		},
		"Arquitetura de Sistema": {
			icon: <Layers className="w-6 h-6" />,
			curso: "QualificaSP",
			ano: 2025
		},
		"Nuvem Distribuída": {
			icon: <Cloud className="w-6 h-6" />,
			curso: "QualificaSP",
			ano: 2025
		}
	}

	const SidebarContent = () => (
		<div className="p-4 lg:p-8 h-full overflow-y-auto">
			{/* Profile Section */}
			<div className="text-center mb-6 lg:mb-8">
				<Avatar className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-3 lg:mb-4 ring-4 ring-blue-100 flex items-end justify-center bg-gradient-to-br from-blue-500 to-purple-600">
					<AvatarImage src="/profile_photo.png?height=56&width=56" alt="João Suzuki" className="sm:w-16 sm:h-20 w-10 h-14" />
					<AvatarFallback className="text-lg lg:text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
						JS
					</AvatarFallback>
				</Avatar>
				<h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">João Suzuki</h1>
				<p className="text-blue-600 font-bold mb-1 text-sm lg:text-base">Fatec</p>
				<p className="text-gray-500 text-xs lg:text-sm">Desenvolvimento de Software Multiplataforma</p>
			</div>

			{/* Projects Navigation */}
			<div className="mb-6 lg:mb-8">
				<h3 className="text-xs lg:text-sm font-semibold text-gray-900 mb-3 lg:mb-4 uppercase tracking-wide">
					Projetos
				</h3>
				<div className="space-y-2">
					<a
						href="#projeto-2024-1-smartfarm"
						className="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-green-50 transition-colors group cursor-pointer"
						onClick={() => setSidebarOpen(false)}
					>
						<div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Leaf className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="font-medium text-gray-900 text-xs lg:text-sm group-hover:text-green-600 transition-colors">
								Smart-Farm
							</p>
							<p className="text-xs text-gray-500">BugBusters • 02/2024 - 06/2024</p>
						</div>
					</a>

					<a
						href="#projeto-2024-2-invsort"
						className="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-purple-50 transition-colors group cursor-pointer"
						onClick={() => setSidebarOpen(false)}
					>
						<div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Blocks className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="font-medium text-gray-900 text-xs lg:text-sm group-hover:text-purple-600 transition-colors">
								Inv.Sort
							</p>
							<p className="text-xs text-gray-500">BugBusters • 08/2024 - 11/2024</p>
						</div>
					</a>

					<a
						href="#projeto-2024-2-site"
						className="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-indigo-50 transition-colors group cursor-pointer"
						onClick={() => setSidebarOpen(false)}
					>
						<div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Globe className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="font-medium text-gray-900 text-xs lg:text-sm group-hover:text-indigo-600 transition-colors">
								Site Corporativo
							</p>
							<p className="text-xs text-gray-500">CFI • 06/2024 - 07/2024</p>
						</div>
					</a>

					<a
						href="#projeto-2024-2-sistema"
						className="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-teal-50 transition-colors group cursor-pointer"
						onClick={() => setSidebarOpen(false)}
					>
						<div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
							<SquareChartGantt className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="font-medium text-gray-900 text-xs lg:text-sm group-hover:text-teal-600 transition-colors">
								Sistema de gestão
							</p>
							<p className="text-xs text-gray-500">CFI • 07/2024 - 09/2024</p>
						</div>
					</a>

					<a
						href="#projeto-2025-1-checkpoint"
						className="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-teal-50 transition-colors group cursor-pointer"
						onClick={() => setSidebarOpen(false)}
					>
						<div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Clock className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="font-medium text-gray-900 text-xs lg:text-sm group-hover:text-teal-600 transition-colors">
								Checkpoint
							</p>
							<p className="text-xs text-gray-500">From Zer0_ • 02/2025 - 06/2025</p>
						</div>
					</a>

					<a
						href="#projeto-2025-1"
						className="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-orange-50 transition-colors group cursor-pointer"
						onClick={() => setSidebarOpen(false)}
					>
						<div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Play className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="font-medium text-gray-900 text-xs lg:text-sm group-hover:text-orange-600 transition-colors">
								Clube de Membros
							</p>
							<p className="text-xs text-gray-500">CFI • 12/2024 - 02/2025</p>
						</div>
					</a>
				</div>
			</div>

			{/* Contact Buttons */}
			<div className="space-y-2 lg:space-y-3">
				<a href="https://github.com/joaosuzuki98" target="_blank" rel="noopener noreferrer" className="block">
					<Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm lg:text-base" >
						<Github className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
						GitHub
					</Button>
				</a>
				<a href="https://www.linkedin.com/in/jo%C3%A3o-suzuki-6a2b02192/" target="_blank" rel="noopener noreferrer" className="block">
					<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm lg:text-base">
						<Linkedin className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
						LinkedIn
					</Button>
				</a>
				<a href="mailto:joaosuzuki98@outlook.com" className="block">
					<Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 text-sm lg:text-base">
						<Mail className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
						Contato
					</Button>
				</a>
			</div>
		</div>
	)

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
			{/* Mobile Header */}
			<div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
				<div className="flex items-center justify-between p-4">
					<div className="flex items-center gap-3">
						<Avatar className="w-8 h-8 flex items-end justify-center bg-gradient-to-br from-blue-500 to-purple-600">
							<AvatarImage src="/profile_photo.png?height=32&width=32" alt="João Suzuki" className="w-6 h-8" />
							<AvatarFallback className="text-sm font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
								FS
							</AvatarFallback>
						</Avatar>
						<div>
							<h1 className="text-sm font-bold text-gray-900">João Suzuki</h1>
							<p className="text-xs text-blue-600">Desenvolvimento de Software Multiplataforma</p>
						</div>
					</div>
					<Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="sm" className="p-2">
								<Menu className="w-5 h-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-80 p-0">
							<SidebarContent />
						</SheetContent>
					</Sheet>
				</div>
			</div>

			{/* Desktop Sidebar */}
			<aside className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-white shadow-xl border-r border-gray-200 z-10">
				<SidebarContent />
			</aside>

			{/* Main Content */}
			<main className="pt-20 lg:pt-0 lg:ml-80 min-h-screen">
				<div className="max-w-5xl mx-auto px-4 lg:px-8 py-6 lg:py-12">
					{/* Welcome Section */}
					<section className="mb-12 lg:mb-16">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl p-6 lg:p-8 text-white">
							<h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Bem-vindo ao meu Portfólio! 👋</h2>
							<p className="text-blue-100 text-base lg:text-lg leading-relaxed">
								Me chamo João Suzuki e atualmente estou cursando o 3º semetre do tecnólogo de Desenvolvimento de Software Multiplataforma pela FATEC e durante este tempo pude particapar em projetos desenvolvidos em parceria com empresas reais. Esses projetos demonstram minhas habilidades em desenvolvimento de APIs, inteligência artificial e tecnologias emergentes.
							</p>
						</div>
					</section>

					{/* Timeline de Projetos */}
					<section className="mb-12 lg:mb-16">
						<div className="flex items-center gap-3 mb-8 lg:mb-12">
							<div className="p-2 lg:p-3 bg-blue-100 rounded-full">
								<Code className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
							</div>
							<h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Meus Projetos</h2>
						</div>

						<div className="relative">
							{/* Timeline Line */}
							<div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

							<div className="space-y-8 lg:space-y-12">
								{/* Projeto 2024-1 - SmartFarm */}
								<div
									id="projeto-2024-1-smartfarm"
									className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8"
								>
									{/* Timeline Dot */}
									<div className="hidden lg:block relative z-10 flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
											<Leaf className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
											2024
										</div>
									</div>

									{/* Project Card */}
									<Card className="flex-1 bg-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
										<div className="relative">
											<ProjectCarousel images={projectImages.smartfarm} alt="Projeto Smart-Farm" />
											<div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-10">
												<Badge className="bg-green-500 text-white font-medium text-xs lg:text-sm">Acadêmico</Badge>
											</div>
											<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-10">
												<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
													<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
												</Button>
											</div>
										</div>

										<CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
											<div className="flex items-start justify-between">
												<div>
													<CardTitle className="text-lg lg:text-xl text-gray-900 mb-2">
														Projeto Smart-Farm - BugBusters
													</CardTitle>
													<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<Users className="w-3 h-3 lg:w-4 lg:h-4" />
															BugBusters
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
															Fevereiro 2024 - Junho 2024
														</div>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
											{/* Título do Projeto */}
											<div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 lg:p-4 rounded-lg border-l-4 border-green-500">
												<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
													Estufa Inteligente para Otimização Agrícola
												</h3>
												<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
													Este projeto foi realizado para a Fatec junto à equipe I9 para simular um ambiente real de
													desenvolvimento utilizando a metodologia ágil. O objetivo deste projeto era desenvolver um
													sistema para monitoramento de uma estufa inteligente.
												</p>
											</div>

											{/* Tecnologias */}
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Zap className="w-3 h-3 lg:w-4 lg:h-4" />
													Tecnologias Utilizadas
												</h4>
												<div className="flex flex-wrap gap-1.5 lg:gap-2">
													{["Flask", "HTML", "CSS", "JavaScript", "MySQL"].map((tech) => (
														<Badge
															key={tech}
															className={`${techColors[tech] || "bg-gray-500 text-white"} font-medium text-xs lg:text-sm`}
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>

											{/* Contribuições Pessoais */}
											<div className="bg-amber-50 p-3 lg:p-4 rounded-lg border border-amber-200">
												<h4 className="font-semibold text-amber-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Target className="w-3 h-3 lg:w-4 lg:h-4" />
													Contribuições Pessoais
												</h4>
												<p className="text-amber-800 leading-relaxed text-sm lg:text-base">
													Neste projeto desempenhei o papel de Product Owner, fui responsável pela criação do Product
													Backlog e pela organização dos sprints, também realizei a prototipação do projeto. Atuei no
													desenvolvimento do código, tanto no front-end como no back-end, usando tecnologias como html,
													css, javascript e flask, criando a funcionalidade de processamento dos dados vindos da estufa
													e na exibição deles na interface gráfica.
												</p>
											</div>

											{/* Hard Skills e Soft Skills */}
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
												<div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-blue-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Code className="w-3 h-3 lg:w-4 lg:h-4" />
														Hard Skills Desenvolvidas
													</h4>
													<div className="flex flex-wrap gap-1.5 lg:gap-2">
														{["HTML", "CSS", "JavaScript", "Python", "MySQL"].map((skill) => (
															<Badge key={skill} className={`${techColors[skill]} font-medium text-xs`}>
																{skill}
															</Badge>
														))}
													</div>
												</div>
												<div className="bg-green-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-green-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Brain className="w-3 h-3 lg:w-4 lg:h-4" />
														Soft Skills Desenvolvidas
													</h4>
													<p className="text-green-800 text-xs lg:text-sm leading-relaxed">
														<ul>
															<li>
																<strong>Trabalho em equipe</strong>
															</li>
															<li>
																<strong>Proatividade</strong>
															</li>
															<li>
																<strong>Liderança</strong>
															</li>
															<li>
																<strong>Comunicação</strong>
															</li>
															<li>
																<strong>Organização</strong>
															</li>
															<li>
																<strong>Resolução de Problemas</strong>
															</li>
														</ul>
													</p>
												</div>
											</div>

											{/* Links do Projeto */}
											<div className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-200">
												<a href="https://github.com/BugBustersFatecSJC/Smart-farm" target="_blank" rel="noopener noreferrer" className="block">
													<Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm lg:text-base">
														<Github className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
														Repositório GitHub
													</Button>
												</a>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Projeto 2024-2 - Inv.Sort */}
								<div
									id="projeto-2024-2-invsort"
									className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8"
								>
									{/* Timeline Dot */}
									<div className="hidden lg:block relative z-10 flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
											<Blocks className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
											2024
										</div>
									</div>

									{/* Project Card */}
									<Card className="flex-1 bg-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
										<div className="relative">
											<ProjectCarousel images={projectImages.invsort} alt="Projeto Inv.Sort" />
											<div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-10">
												<Badge className="bg-purple-500 text-white font-medium text-xs lg:text-sm">Acadêmico</Badge>
											</div>
											<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-10">
												<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
													<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
												</Button>
											</div>
										</div>

										<CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
											<div className="flex items-start justify-between">
												<div>
													<CardTitle className="text-lg lg:text-xl text-gray-900 mb-2">
														Projeto Inv.Sort - BugBusters
													</CardTitle>
													<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<Users className="w-3 h-3 lg:w-4 lg:h-4" />
															BugBusters
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
															Junho 2024 - Novembro 2024
														</div>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
											{/* Título do Projeto */}
											<div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 lg:p-4 rounded-lg border-l-4 border-purple-500">
												<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
													Sistema Inteligente de Gestão de Estoque
												</h3>
												<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
													Este projeto foi realizado para a Fatec para simular um ambiente real de desenvolvimento
													utilizando a metodologia ágil. O objetivo deste sistema era criar uma aplicação web capaz de
													armazenar dados para uma empresa de estoque fictícia, bem como a possibilidade de realizar a
													análise e o gerenciamento destes dados.
												</p>
											</div>

											{/* Tecnologias */}
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Zap className="w-3 h-3 lg:w-4 lg:h-4" />
													Tecnologias Utilizadas
												</h4>
												<div className="flex flex-wrap gap-1.5 lg:gap-2">
													{["React", "Express", "Prisma ORM", "Tailwind", "MySQL"].map((tech) => (
														<Badge
															key={tech}
															className={`${techColors[tech] || "bg-gray-500 text-white"} font-medium text-xs lg:text-sm`}
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>

											{/* Contribuições Pessoais */}
											<div className="bg-amber-50 p-3 lg:p-4 rounded-lg border border-amber-200">
												<h4 className="font-semibold text-amber-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Target className="w-3 h-3 lg:w-4 lg:h-4" />
													Contribuições Pessoais
												</h4>
												<p className="text-amber-800 leading-relaxed text-sm lg:text-base">
													Atuei como desenvolvedor full stack, contribuindo tanto no front-end quanto no back-end. No
													front-end, utilizei tecnologias como React, Tailwind CSS e Axios para criar uma interface
													moderna, responsiva e funcional. Fui responsável por componentes como o dashboard de
													gerenciamento de produtos e categorias, tabelas dinâmicas com filtros dos produtos,
													categorias, funcionários e estoque, formulários com validação e o consumo das APIs. No
													back-end, trabalhei com Express.js e Prisma ORM, desenvolvendo a estrutura de banco de dados e
													as rotas REST para operações como cadastro, atualização, remoção e listagem de itens.
												</p>
											</div>

											{/* Hard Skills e Soft Skills */}
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
												<div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-blue-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Code className="w-3 h-3 lg:w-4 lg:h-4" />
														Hard Skills Desenvolvidas
													</h4>
													<div className="flex flex-wrap gap-1.5 lg:gap-2">
														{["React", "Figma", "API RESTful", "JavaScript", "HTML", "CSS", "Express"].map((skill) => (
															<Badge key={skill} className={`${techColors[skill]} font-medium text-xs`}>
																{skill}
															</Badge>
														))}
													</div>
												</div>
												<div className="bg-green-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-green-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Brain className="w-3 h-3 lg:w-4 lg:h-4" />
														Soft Skills Desenvolvidas
													</h4>
													<p className="text-green-800 text-xs lg:text-sm leading-relaxed">
														<ul>
															<li>
																<strong>Trabalho em equipe</strong>
															</li>
															<li>
																<strong>Organização</strong>
															</li>
															<li>
																<strong>Resolução de Problemas</strong>
															</li>
															<li>
																<strong>Comunicação</strong>
															</li>
															<li>
																<strong>Proatividade</strong>
															</li>
														</ul>
													</p>
												</div>
											</div>

											{/* Links do Projeto */}
											<div className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-200">
												<a href="https://github.com/BugBustersFatecSJC/inv.sort" target="_blank" rel="noopener noreferrer" className="block"></a>
												<Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm lg:text-base">
													<Github className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
													Repositório GitHub
												</Button>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Projeto 2024-2 - Site Corporativo */}
								<div
									id="projeto-2024-2-site"
									className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8"
								>
									{/* Timeline Dot */}
									<div className="hidden lg:block relative z-10 flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
											<Globe className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full font-medium">
											2024
										</div>
									</div>

									{/* Project Card */}
									<Card className="flex-1 bg-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
										<div className="relative">
											<ProjectCarousel images={projectImages.sitecorporativo} alt="Site Corporativo CFI" />
											<div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-10">
												<Badge className="bg-indigo-500 text-white font-medium text-xs lg:text-sm">Profissional</Badge>
											</div>
											<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-10">
												<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
													<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
												</Button>
											</div>
										</div>

										<CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
											<div className="flex items-start justify-between">
												<div>
													<CardTitle className="text-lg lg:text-xl text-gray-900 mb-2">
														Site Corporativo - CFI Consultoria
													</CardTitle>
													<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<Users className="w-3 h-3 lg:w-4 lg:h-4" />
															CFI Consultoria
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
															Junho 2024 - Julho 2024
														</div>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
											{/* Título do Projeto */}
											<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 lg:p-4 rounded-lg border-l-4 border-indigo-500">
												<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
													Presença Digital Profissional e Moderna
												</h3>
												<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
													Desenvolvimento completo do site corporativo da CFI Consultoria, criando uma presença digital
													profissional e moderna que reflete a excelência dos serviços prestados pela empresa. O projeto
													envolveu desde o design responsivo até a implementação de funcionalidades avançadas para
													captação de leads e apresentação de serviços especializados em consultoria empresarial e
													jurídica.
												</p>
											</div>

											{/* Tecnologias */}
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Zap className="w-3 h-3 lg:w-4 lg:h-4" />
													Tecnologias Utilizadas
												</h4>
												<div className="flex flex-wrap gap-1.5 lg:gap-2">
													{["WordPress", "PHP", "MySQL", "JavaScript"].map((tech) => (
														<Badge
															key={tech}
															className={`${techColors[tech] || "bg-gray-500 text-white"} font-medium text-xs lg:text-sm`}
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>

											{/* Contribuições Pessoais */}
											<div className="bg-amber-50 p-3 lg:p-4 rounded-lg border border-amber-200">
												<h4 className="font-semibold text-amber-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Target className="w-3 h-3 lg:w-4 lg:h-4" />
													Contribuições Pessoais
												</h4>
												<p className="text-amber-800 leading-relaxed text-sm lg:text-base">
													Como desenvolvedor web responsável por todo o projeto, concebi e executei uma solução digital
													completa que elevou significativamente a presença online da CFI Consultoria. Desenvolvi um
													site corporativo implementando um design responsivo e moderno que se adapta
													perfeitamente a todos os dispositivos. Criei funcionalidades personalizadas em PHP para
													formulários de contato avançados, sistema de agendamento online e integração com ferramentas
													de CRM. Também fui responsável pela otimização SEO, configuração de hospedagem segura,
													implementação de medidas de segurança contra ataques, e criação de um painel administrativo
													intuitivo que permite à equipe da empresa gerenciar conteúdo de forma autônoma.
												</p>
											</div>

											{/* Hard Skills e Soft Skills */}
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
												<div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-blue-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Code className="w-3 h-3 lg:w-4 lg:h-4" />
														Hard Skills Desenvolvidas
													</h4>
													<div className="flex flex-wrap gap-1.5 lg:gap-2">
														{["Hospedagem de Site", "PHP", "MySQL", "JavaScript"].map((skill) => (
															<Badge key={skill} className={`${techColors[skill]} font-medium text-xs`}>
																{skill}
															</Badge>
														))}
													</div>
												</div>
												<div className="bg-green-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-green-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Brain className="w-3 h-3 lg:w-4 lg:h-4" />
														Soft Skills Desenvolvidas
													</h4>
													<p className="text-green-800 text-xs lg:text-sm leading-relaxed">
														<ul>
															<li>
																<strong>Atenção aos Detalhes</strong>
															</li>
															<li>
																<strong>Comunicação </strong>
															</li>
															<li>
																<strong>Organização</strong>
															</li>
														</ul>
													</p>
												</div>
											</div>

											{/* Links do Projeto */}
											<div className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-200">
												<a href="https://cfi-consultoria.com.br/" target="_blank" rel="noopener noreferrer" className="block">
													<Button
														variant="outline"
														className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 text-sm lg:text-base"
													>
														<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
														Visitar Site
													</Button>
												</a>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Projeto 2024-2 - Sistema de Gerenciamento */}
								<div
									id="projeto-2024-2-sistema"
									className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8"
								>
									{/* Timeline Dot */}
									<div className="hidden lg:block relative z-10 flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
											<SquareChartGantt className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-medium">
											2024
										</div>
									</div>

									{/* Project Card */}
									<Card className="flex-1 bg-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
										<div className="relative">
											<ProjectCarousel images={projectImages.sistemacrm} alt="Sistema CRM CFI" />
											<div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-10">
												<Badge className="bg-teal-500 text-white font-medium text-xs lg:text-sm">Profissional</Badge>
											</div>
											<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-10">
												<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
													<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
												</Button>
											</div>
										</div>

										<CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
											<div className="flex items-start justify-between">
												<div>
													<CardTitle className="text-lg lg:text-xl text-gray-900 mb-2">
														Sistema de Gerenciamento de Clientes e Vendas - CFI
													</CardTitle>
													<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<Users className="w-3 h-3 lg:w-4 lg:h-4" />
															CFI Consultoria
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
															Julho 2024 - Setembro 2024
														</div>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
											{/* Título do Projeto */}
											<div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 lg:p-4 rounded-lg border-l-4 border-teal-500">
												<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
													Sistema para Gestão Empresarial
												</h3>
												<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
													Este projeto é um sistema interno para gerenciamento e análise dos dados internos da empresa
													CFI Consultoria. O objetivo era substituir o antigo sistema que utilizava métodos mais
													antiquados e lentos, modernizando completamente os processos de gestão de clientes e vendas.
												</p>
											</div>

											{/* Tecnologias */}
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Zap className="w-3 h-3 lg:w-4 lg:h-4" />
													Tecnologias Utilizadas
												</h4>
												<div className="flex flex-wrap gap-1.5 lg:gap-2">
													{["TypeScript", "React", "Next.js", "Tailwind", "Spring Boot", "MySQL"].map((tech) => (
														<Badge
															key={tech}
															className={`${techColors[tech] || "bg-gray-500 text-white"} font-medium text-xs lg:text-sm`}
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>

											{/* Contribuições Pessoais */}
											<div className="bg-amber-50 p-3 lg:p-4 rounded-lg border border-amber-200">
												<h4 className="font-semibold text-amber-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Target className="w-3 h-3 lg:w-4 lg:h-4" />
													Contribuições Pessoais
												</h4>
												<p className="text-amber-800 leading-relaxed text-sm lg:text-base">
													Como desenvolvedor full-stack único do projeto, assumi a responsabilidade completa pela
													modernização do sistema legado da CFI Consultoria. Desenvolvi uma arquitetura robusta
													utilizando Spring Boot para o backend, garantindo escalabilidade e performance, enquanto criei
													uma interface moderna e intuitiva com React, Next.js e TypeScript. Implementei funcionalidades
													avançadas de análise incluindo dashboards analíticos, relatórios automatizados, gestão de pipeline
													de vendas e integração com sistemas externos. Também fui responsável pela migração segura de
													dados do sistema antigo, otimização de consultas MySQL para melhor performance, e
													implementação de medidas de segurança para proteção de dados empresariais sensíveis.
												</p>
											</div>

											{/* Hard Skills e Soft Skills */}
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
												<div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-blue-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Code className="w-3 h-3 lg:w-4 lg:h-4" />
														Hard Skills Desenvolvidas
													</h4>
													<div className="flex flex-wrap gap-1.5 lg:gap-2">
														{["Java", "TypeScript", "MySQL", "API REST"].map((skill) => (
															<Badge key={skill} className={`${techColors[skill]} font-medium text-xs`}>
																{skill}
															</Badge>
														))}
													</div>
												</div>
												<div className="bg-green-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-green-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Brain className="w-3 h-3 lg:w-4 lg:h-4" />
														Soft Skills Desenvolvidas
													</h4>
													<p className="text-green-800 text-xs lg:text-sm leading-relaxed">
														<ul>
															<li>
																<strong>Análise de Negócios</strong>
															</li>
															<li>
																<strong>Gestão de Mudanças</strong>
															</li>
															<li>
																<strong>Orientação a Resultados</strong>
															</li>
															<li>
																<strong>Comunicação</strong>
															</li>
															<li>
																<strong>Organização</strong>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Projeto 2025-1 - Checkpoint */}
								<div
									id="projeto-2025-1-checkpoint"
									className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8"
								>
									{/* Timeline Dot */}
									<div className="hidden lg:block relative z-10 flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
											<Clock className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-medium">
											2025
										</div>
									</div>

									{/* Project Card */}
									<Card className="flex-1 bg-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
										<div className="relative">
											<ProjectCarousel images={projectImages.checkpoint} alt="Sistema de Ponto Checkpoint" />
											<div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-10">
												<Badge className="bg-teal-500 text-white font-medium text-xs lg:text-sm">Acadêmico</Badge>
											</div>
											<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-10">
												<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
													<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
												</Button>
											</div>
										</div>

										<CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
											<div className="flex items-start justify-between">
												<div>
													<CardTitle className="text-lg lg:text-xl text-gray-900 mb-2">
														Sistema de Ponto Checkpoint - From Zer0_
													</CardTitle>
													<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<Users className="w-3 h-3 lg:w-4 lg:h-4" />
															From Zer0_
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
															Fevereiro 2025 - Junho 2025
														</div>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
											{/* Título do Projeto */}
											<div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 lg:p-4 rounded-lg border-l-4 border-teal-500">
												<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
													Sistema de Marcação e Gerenciamento de Ponto
												</h3>
												<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
													Este projeto foi feito para a FATEC em conjunto com a empresa Necto Systems para simular um
													ambiente real de desenvolvimento utilizando a metodologia ágil. O objetivo era criar um
													sistema de marcação e gerenciamento de ponto, com uma área voltada para o colaborador e outra
													para o gestor/admin.
												</p>
											</div>

											{/* Tecnologias */}
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Zap className="w-3 h-3 lg:w-4 lg:h-4" />
													Tecnologias Utilizadas
												</h4>
												<div className="flex flex-wrap gap-1.5 lg:gap-2">
													{["React", "Vite", "Spring Boot", "TypeScript", "Tailwind", "MongoDB", "MySQL"].map(
														(tech) => (
															<Badge
																key={tech}
																className={`${techColors[tech] || "bg-gray-500 text-white"} font-medium text-xs lg:text-sm`}
															>
																{tech}
															</Badge>
														),
													)}
												</div>
											</div>

											{/* Contribuições Pessoais */}
											<div className="bg-amber-50 p-3 lg:p-4 rounded-lg border border-amber-200">
												<h4 className="font-semibold text-amber-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Target className="w-3 h-3 lg:w-4 lg:h-4" />
													Contribuições Pessoais
												</h4>
												<p className="text-amber-800 leading-relaxed text-sm lg:text-base">
													Neste projeto atuei como o Product Owner, estabelecendo a comunicação entre a cliente e a
													nossa equipe. Fui responsável pela prototipação da interface do projeto e utilizei o Figma
													para criar o design, estruturei o Product Backlog com base nas necessidades da cliente, e
													conduzi a priorização das tarefas junto ao time. Também participei ativamente do
													desenvolvimento do sistema, contribuindo tanto no front-end - onde utilizei tecnologias como
													React, Tailwind e Axios - quanto no back-end - utilizei o framework Java Spring Boot.
													Colaborei na organização dos sprints, refinamento das user stories e na realização de testes
													para garantir a entrega de um produto funcional e alinhado com os requisitos do cliente.
												</p>
											</div>

											{/* Hard Skills e Soft Skills */}
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
												<div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-blue-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Code className="w-3 h-3 lg:w-4 lg:h-4" />
														Hard Skills Desenvolvidas
													</h4>
													<div className="flex flex-wrap gap-1.5 lg:gap-2">
														{["API RESTful", "Padrões de Projeto", "Java", "TypeScript", "CSS", "HTML"].map((skill) => (
															<Badge key={skill} className={`${techColors[skill]} font-medium text-xs`}>
																{skill}
															</Badge>
														))}
													</div>
												</div>
												<div className="bg-green-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-green-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Brain className="w-3 h-3 lg:w-4 lg:h-4" />
														Soft Skills Desenvolvidas
													</h4>
													<p className="text-green-800 text-xs lg:text-sm leading-relaxed">
														<ul>
															<li>
																<strong>Trabalho em equipe</strong>
															</li>
															<li>
																<strong>Proatividade</strong>
															</li>
															<li>
																<strong>Liderança</strong>
															</li>
															<li>
																<strong>Comunicação</strong>
															</li>
															<li>
																<strong>Organização</strong>
															</li>
															<li>
																<strong>Resolução de problemas</strong>
															</li>
														</ul>
													</p>
												</div>
											</div>

											{/* Links do Projeto */}
											<div className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-200">
												<a href="https://github.com/FR0M-ZER0/checkpoint" target="_blank" rel="noopener noreferrer" className="block">
													<Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm lg:text-base">
														<Github className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
														Repositório GitHub
													</Button>
												</a>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Projeto 2025-1 - Plataforma de Streaming */}
								<div id="projeto-2025-1" className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
									{/* Timeline Dot */}
									<div className="hidden lg:block relative z-10 flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
											<Play className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
											2025
										</div>
									</div>

									{/* Project Card */}
									<Card className="flex-1 bg-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
										<div className="relative">
											<ProjectCarousel images={projectImages.streaming} alt="Plataforma de Streaming CFI" />
											<div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-10">
												<Badge className="bg-orange-500 text-white font-medium text-xs lg:text-sm">Profissional</Badge>
											</div>
											<div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 z-10">
												<Button size="sm" variant="ghost" className="h-6 w-6 lg:h-8 lg:w-8 p-0">
													<ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
												</Button>
											</div>
										</div>

										<CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
											<div className="flex items-start justify-between">
												<div>
													<CardTitle className="text-lg lg:text-xl text-gray-900 mb-2">
														Plataforma de Streaming - CFI Consultoria
													</CardTitle>
													<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<Users className="w-3 h-3 lg:w-4 lg:h-4" />
															CFI Consultoria
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
															Dezembro 2024 - Fevereiro 2025
														</div>
													</div>
												</div>
											</div>
										</CardHeader>

										<CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
											{/* Título do Projeto */}
											<div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 lg:p-4 rounded-lg border-l-4 border-orange-500">
												<h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
													Plataforma de Streaming Integrada com Consultoria Jurídica
												</h3>
												<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
													Este projeto foi realizado para a empresa CFI Consultoria. O objetivo deste sistema era
													oferecer aos assinantes da empresa uma plataforma de streaming de vídeos, que também oferecia
													um canal para conversar com um advogado e o envio de oportunidades de imóveis em leilão. Ele
													está pausado por enquanto.
												</p>
											</div>

											{/* Tecnologias */}
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Zap className="w-3 h-3 lg:w-4 lg:h-4" />
													Tecnologias Utilizadas
												</h4>
												<div className="flex flex-wrap gap-1.5 lg:gap-2">
													{["Express", "React", "Tailwind", "Prisma ORM"].map((tech) => (
														<Badge
															key={tech}
															className={`${techColors[tech] || "bg-gray-500 text-white"} font-medium text-xs lg:text-sm`}
														>
															{tech}
														</Badge>
													))}
												</div>
											</div>

											{/* Contribuições Pessoais */}
											<div className="bg-amber-50 p-3 lg:p-4 rounded-lg border border-amber-200">
												<h4 className="font-semibold text-amber-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
													<Target className="w-3 h-3 lg:w-4 lg:h-4" />
													Contribuições Pessoais
												</h4>
												<p className="text-amber-800 leading-relaxed text-sm lg:text-base">
													Como desenvolvedor full-stack responsável por todo o projeto, arquitetei e implementei uma
													solução completa e inovadora. Desenvolvi desde a infraestrutura backend com Express.js e
													Prisma ORM até a interface frontend responsiva com React e Tailwind CSS. Criei um sistema de
													streaming robusto com upload e reprodução de vídeos, implementei um chat em tempo real para
													comunicação com advogados, e desenvolvi um sistema automatizado de notificações para
													oportunidades de leilões imobiliários. Também fui responsável pela integração de APIs
													externas, otimização de performance para streaming de vídeo e implementação de medidas de
													segurança para proteção de dados sensíveis.
												</p>
											</div>

											{/* Hard Skills e Soft Skills */}
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
												<div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-blue-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Code className="w-3 h-3 lg:w-4 lg:h-4" />
														Hard Skills Desenvolvidas
													</h4>
													<div className="flex flex-wrap gap-1.5 lg:gap-2">
														{["API REST", "Desenvolvimento Mobile", "JavaScript"].map((skill) => (
															<Badge key={skill} className={`${techColors[skill]} font-medium text-xs`}>
																{skill}
															</Badge>
														))}
													</div>
												</div>
												<div className="bg-green-50 p-3 lg:p-4 rounded-lg">
													<h4 className="font-semibold text-green-900 mb-2 lg:mb-3 flex items-center gap-2 text-sm lg:text-base">
														<Brain className="w-3 h-3 lg:w-4 lg:h-4" />
														Soft Skills Desenvolvidas
													</h4>
													<p className="text-green-800 text-xs lg:text-sm leading-relaxed">
														<ul>
															<li>
																<strong>Adaptabilidade</strong>
															</li>
															<li>
																<strong>Resiliência</strong>
															</li>
															<li>
																<strong>Resolução de problemas</strong>
															</li>
															<li>
																<strong>Organização</strong>
															</li>
															<li>
																<strong>Comunicação</strong>
															</li>
														</ul>
													</p>
												</div>
											</div>

											{/* Links do Projeto */}
											<div className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-200">
												<a href="https://github.com/joaosuzuki98/cfi-clube-de-membros-front" target="_blank" rel="noopener noreferrer" className="blocka">
													<Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm lg:text-base">
														<Github className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
														Repositório GitHub
													</Button>
												</a>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					</section>

					{/* Principais Conhecimentos */}
					<section className="mb-12 lg:mb-16">
						<div className="flex items-center gap-3 mb-8 lg:mb-12">
							<div className="p-2 lg:p-3 bg-purple-100 rounded-full">
								<Star className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
							</div>
							<h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Principais Conhecimentos</h2>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
							{Object.entries(skillData).map(([skill, { icon, curso, ano }], index) => {
								const gradients = [
									"from-blue-500 to-cyan-500",
									"from-purple-500 to-pink-500",
									"from-green-500 to-teal-500",
									"from-orange-500 to-red-500",
									"from-indigo-500 to-purple-500",
									"from-teal-500 to-blue-500",
								]
								return (
									<Card
										key={skill}
										className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl overflow-hidden"
									>
										<CardContent className="p-0">
											<div className={`bg-gradient-to-br ${gradients[index]} p-4 lg:p-6 text-white`}>
												<div className="flex items-center justify-between mb-3 lg:mb-4">
													{icon}
													<Award className="w-4 h-4 lg:w-5 lg:h-5 opacity-70" />
												</div>
												<h3 className="font-bold text-base lg:text-lg">{skill}</h3>
												<p className="text-white/80 text-xs lg:text-sm mt-2">{curso}</p>
											</div>
											<div className="p-3 lg:p-4 bg-white">
												<p className="text-sm font-light text-slate-500">
													{ano}
												</p>
											</div>
										</CardContent>
									</Card>
								)
							})}

						</div>
					</section>

					{/* Seção de Contatos */}
					<section>
						<div className="flex items-center gap-3 mb-8 lg:mb-12">
							<div className="p-2 lg:p-3 bg-green-100 rounded-full">
								<Target className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
							</div>
							<h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Vamos Conversar?</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
							{/* Contact Cards */}
							<Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300">
								<CardContent className="p-6 lg:p-8">
									<div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
										<div className="p-2 lg:p-3 bg-white/10 rounded-full">
											<Github className="w-5 h-5 lg:w-6 lg:h-6" />
										</div>
										<div>
											<h3 className="font-bold text-lg lg:text-xl">GitHub</h3>
											<p className="text-gray-300 text-sm lg:text-base">Confira meus repositórios</p>
										</div>
									</div>
									<p className="text-gray-300 mb-4 lg:mb-6 text-sm lg:text-base">
										Explore meus projetos open source, contribuições e código-fonte dos projetos acadêmicos.
									</p>
									<a href="https://github.com/joaosuzuki98" target="_blank" rel="noopener noreferrer" className="block">
										<Button className="w-full bg-white text-gray-900 hover:bg-gray-100 text-sm lg:text-base">
											<Github className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
											Visitar GitHub
										</Button>
									</a>
								</CardContent>
							</Card>

							<Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300">
								<CardContent className="p-6 lg:p-8">
									<div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
										<div className="p-2 lg:p-3 bg-white/10 rounded-full">
											<Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
										</div>
										<div>
											<h3 className="font-bold text-lg lg:text-xl">LinkedIn</h3>
											<p className="text-blue-100 text-sm lg:text-base">Conecte-se comigo</p>
										</div>
									</div>
									<p className="text-blue-100 mb-4 lg:mb-6 text-sm lg:text-base">
										Vamos nos conectar! Compartilho insights sobre tecnologia e minha jornada acadêmica.
									</p>
									<a href="https://www.linkedin.com/in/jo%C3%A3o-suzuki-6a2b02192/" target="_blank" rel="noopener noreferrer" className="block">
										<Button className="w-full bg-white text-blue-600 hover:bg-blue-50 text-sm lg:text-base">
											<Linkedin className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
											Conectar no LinkedIn
										</Button>
									</a>
								</CardContent>
							</Card>
						</div>

						{/* Email */}
						<Card className="mt-6 lg:mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
							<CardContent className="p-6 lg:p-8 text-center">
								<Mail className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4 opacity-90" />
								<h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Interessado em colaborar?</h3>
								<p className="text-purple-100 mb-4 lg:mb-6 max-w-2xl mx-auto text-sm lg:text-base">
									Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia. Vamos
									construir algo incrível juntos!
								</p>
								<a href="mailto:joaosuzuki98@outlook.com" className="block">
									<Button
										size="lg"
										className="bg-white text-purple-600 hover:bg-purple-50 font-medium text-sm lg:text-base"
									>
										<Mail className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
										Entrar em Contato
									</Button>
								</a>
							</CardContent>
						</Card>
					</section>
				</div>
			</main>
		</div>
	)
}
