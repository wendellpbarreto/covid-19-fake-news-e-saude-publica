module.exports = {
  async rewrites() {
    return [
      {
        source: "/sequencia-didatica",
        destination: "/following-teaching",
      },
      {
        source: "/ferramentas-de-checagem",
        destination: "/checking-tools",
      },
      {
        source: "/referencias",
        destination: "/references",
      },
    ];
  },
};
