import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Mona Sans',
  				'sans-serif'
  			],
  			zentry: [
  				'zentry',
  				'sans-serif'
  			],
  			general: [
  				'general',
  				'sans-serif'
  			],
  			'circular-web': [
  				'circular-web',
  				'sans-serif'
  			],
  			'robert-medium': [
  				'robert-medium',
  				'sans-serif'
  			],
  			'robert-regular': [
  				'robert-regular',
  				'sans-serif'
  			]
  		},
  		colors: {
  			white: {
  				'50': '#d9ecff',
  				DEFAULT: '#ffffff'
  			},
  			black: {
  				'50': '#1c1c21',
  				'100': '#0e0e10',
  				'200': '#282732',
  				DEFAULT: '#000000'
  			},
  			blue: {
  				'50': '#839cb5',
  				'75': '#dfdff2',
  				'100': '#f0f2fa',
  				'200': '#010101',
  				'300': '#4fb7dd'
  			},
  			violet: {
  				'300': '#5724ff'
  			},
  			yellow: {
  				'100': '#8e983f',
  				'300': '#edff66'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
