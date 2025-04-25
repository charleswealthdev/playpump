export default {
    base: '/', // Ensures assets load from root
    build: {
      outDir: 'dist', // Vercel expects this
      assetsDir: 'assets', // Organizes JS/CSS
      sourcemap: true, // Helps debug production issues
    },
  };