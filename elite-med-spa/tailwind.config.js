/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {
    colors: { ink: 'var(--color-ink)', ivory: 'var(--color-ivory)', lilac: 'var(--color-lilac)', muted: 'var(--color-muted)', paper: 'var(--color-paper)' },
    fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['DM Sans', 'sans-serif'] },
    letterSpacing: { editorial: '-.065em' }
  } },
  plugins: []
};
