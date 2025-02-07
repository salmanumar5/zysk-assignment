
import {
    Settings,
    Keyboard,
    Building2,
    Users,
    UserPlus,
    GitCompare,
    MessageCircle,
    HelpCircle,
    Blocks,
    LogOut,
    User,
} from "lucide-react"


export default function ProfileDropdown() {

    return (
        <div className="absolute top-12 right-0 bg-white border w-[250px] rounded-md">
                    <div className="grid gap-1 p-2">
                        <div href="/profile" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <User className="h-4 w-4" />
                            <span className="flex-1">View profile</span>
                            <span className="text-xs">⌘P</span>
                        </div>

                        <div href="/settings" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <Settings className="h-4 w-4" />
                            <span className="flex-1">Settings</span>
                            <span className="text-xs ">⌘S</span>
                        </div>

                        <div href="/shortcuts" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <Keyboard className="h-4 w-4" />
                            <span className="flex-1">Keyboard shortcuts</span>
                            <span className="text-xs ">?</span>
                        </div>

                        <div href="/company" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <Building2 className="h-4 w-4" />
                            <span className="flex-1">Company profile</span>
                            <span className="text-xs ">⌘C</span>
                        </div>

                        <div href="/team" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <Users className="h-4 w-4" />
                            <span className="flex-1">Team</span>
                            <span className="text-xs ">⌘T</span>
                        </div>

                        <div href="/invite" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <UserPlus className="h-4 w-4" />
                            <span className="flex-1">Invite colleagues</span>
                            <span className="text-xs ">I</span>
                        </div>

                        <div href="/changelog" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <GitCompare className="h-4 w-4" />
                            <span className="flex-1">Changelog</span>
                            <span className="text-xs ">⌘C</span>
                        </div>

                        <div href="/community" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <MessageCircle className="h-4 w-4" />
                            <span className="flex-1">Slack Community</span>
                            <span className="text-xs ">⌘S</span>
                        </div>

                        <div href="/support" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <HelpCircle className="h-4 w-4" />
                            <span className="flex-1">Support</span>
                            <span className="text-xs ">/</span>
                        </div>

                        <div href="/api" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100">
                            <Blocks className="h-4 w-4" />
                            <span className="flex-1">API</span>
                            <span className="text-xs ">A</span>
                        </div>
                    </div>

                    <div className="border-t p-2">
                        <button
                            onClick={() => console.log("Logging out...")}
                            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100"
                        >
                            <LogOut className="h-4 w-4" />
                            <span className="flex-1">Log out</span>
                            <span className="text-xs ">⌘Q</span>
                        </button>
                    </div>

        </div>
    )
}

