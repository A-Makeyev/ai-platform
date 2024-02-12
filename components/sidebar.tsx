"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"
import { 
    Code, 
    ImageIcon, 
    LayoutDashboard, 
    MessageSquare, 
    Music, 
    Settings, 
    VideoIcon 
} from "lucide-react"

const montserrat = Montserrat({ 
    weight: '600',
    subsets: ['latin']
})

const routes = [
    {
        href: '/dashboard',
        label: 'Dashboard',
        color: 'text-sky-500',
        icon: LayoutDashboard,
    },
    {
        href: '/conversation',
        label: 'Conversation',
        color: 'text-violet-500',
        icon: MessageSquare,
    },
    {
        href: '/image',
        label: 'Image Generation',
        color: 'text-pink-700',
        icon: ImageIcon,
    },
    {
        href: '/video',
        label: 'Video Generation',
        color: 'text-orange-700',
        icon: VideoIcon,
    },
    {
        href: '/music',
        label: 'Music Generation',
        color: 'text-emerald-500',
        icon: Music,
    },
    {
        href: '/code',
        label: 'Code Generation',
        color: 'text-green-700',
        icon: Code,
    },
    {
        href: '/settings',
        label: 'Settings',
        color: 'text-white-500',
        icon: Settings,
    },
]

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image src="/logo.png" alt="Logo" fill />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Genius
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link 
                            href={route.href} 
                            key={route.href} 
                            className="text-sm group flex p-3 w-full justify-start font-medium 
                            cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar