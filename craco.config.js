module.exports = {
  babel: {
    presets: [["@babel/preset-typescript", { onlyRemoveTypeImports: true }]],
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }], "babel-plugin-parameter-decorator"],
  },
};
