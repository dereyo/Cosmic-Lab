/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#020205',
        'neon-cyan': '#00f7ff',
        'neon-purple': '#9400d3',
      },
      backgroundImage: {
        // ضعي رابط الصورة هنا أو مسار الصورة المحلية
        'nebula-pattern': "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2563.jpg?t=st=1715391632~exp=1715395232~hmac=0a7d9b93540e109867c858544d67389a9f5d3765e6480e6080e72f8832a82928&w=1380')", 
      }
    },
  },
  plugins: [],
}