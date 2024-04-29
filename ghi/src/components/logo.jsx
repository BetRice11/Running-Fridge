import {cn} from './utils.js'
import '../index.css'

export const Logo = () => {
    return (
        <div className="flex items-center gap-x-4 hover:opacity-75 transition">
            <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
                <img src="/logo.png" alt="Logo" height="50" width="50" />
            </div>
            <div className={cn('hidden lg:block')}>
                <p className="text-lg font-semibold">Running Fridge</p>
                <p className="text-xs text-muted-foreground">Better Catch It</p>
            </div>
        </div>
    )
}
