export default {
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
  build: {
    commonjsOptions: {
      include: [/framer-motion/, /node_modules/],
    },
  },
};
