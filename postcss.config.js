if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      "postcss-preset-env",
      [
        "cssnano",
        {
          preset: "default",
        },
      ],
      ["tailwindcss", {}],
    ],
  };
} else {
  module.exports = {
    plugins: ["postcss-preset-env", ["tailwindcss", {}]],
  };
}
