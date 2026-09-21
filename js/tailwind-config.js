tailwind.config = {
    theme: {
        extend: {
            colors: {
                accent: {
                    100:'#f2fdf4', 150:'#d8f7dd', 200:'#baeec0', 250:'#a4e5ac',
                    300:'#7ed68e', 350:'#54c46a', 400:'#32ad52', 450:'#178f3b',
                    550:'#01712b', 600:'#016826', 650:'#015720', 700:'#01481a',
                    750:'#093815', 800:'#082c11', 850:'#06210d', 900:'#041609'
                },
                fore: {
                    50:'#fafafa', 100:'#f4f4f5', 200:'#e4e4e7', 300:'#d4d4d8',
                    400:'#a1a1aa', 500:'#71717a', 600:'#52525b', 700:'#3f3f46',
                    800:'#27272a', 850:'#1e1e21', 900:'#18181b', 950:'#0f0f11'
                }
            },
            fontFamily: {
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['Inter', 'system-ui', 'sans-serif']
            }
        }
    }
}
