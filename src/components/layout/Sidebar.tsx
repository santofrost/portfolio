export interface SidebarProps {
    currentView: 'portfolio' | 'game';
    onViewChange: (view: 'portfolio' | 'game') => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
    return (
        <aside className="w-full md:w-64 flex-shrink-0 md:mr-8 mb-8 md:mb-0 terminal-border p-4 bg-[rgba(10,64,5,0.2)]">
            <h2 className="text-xl font-bold mb-6 border-b border-[#1e8712] pb-2">
                <span className="animate-pulse">_</span>MAIN_MENU
            </h2>

            <nav className="flex flex-col space-y-4">
                <button
                    onClick={() => onViewChange('portfolio')}
                    className={`text-left text-lg p-2 transition-all duration-300 flex items-center gap-2 ${currentView === 'portfolio'
                            ? 'bg-[var(--term-green-dark)] text-white shadow-[0_0_10px_var(--term-green)] border-l-4 border-[var(--term-green)]'
                            : 'hover:bg-[rgba(57,255,20,0.1)] hover:pl-4 text-[var(--term-green)] border-l-4 border-transparent'
                        }`}
                >
                    {currentView === 'portfolio' ? '[x]' : '[ ]'} PORTFOLIO.exe
                </button>

                <button
                    onClick={() => onViewChange('game')}
                    className={`text-left text-lg p-2 transition-all duration-300 flex items-center gap-2 ${currentView === 'game'
                            ? 'bg-[var(--term-green-dark)] text-white shadow-[0_0_10px_var(--term-green)] border-l-4 border-[var(--term-green)]'
                            : 'hover:bg-[rgba(57,255,20,0.1)] hover:pl-4 text-[var(--term-green)] border-l-4 border-transparent'
                        }`}
                >
                    {currentView === 'game' ? '[x]' : '[ ]'} MINIGAME.bat
                </button>
            </nav>

            <div className="mt-12 text-sm opacity-70 border-t border-[#1e8712] pt-4">
                <p>SYSTEM STATUS: OK</p>
                <p>NETWORK: CONNECTED</p>
            </div>
        </aside>
    );
};
