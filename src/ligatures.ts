import plugin from "tailwindcss/plugin"

export const ligatures = () =>
  plugin(({ addUtilities }) =>
    addUtilities({
      ".ligatures-normal": {
        fontVariantLigatures: "normal",
      },
      ".ligatures-none": {
        fontVariantLigatures: "none",
      },
      ".ligatures-common": {
        fontVariantLigatures: "common-ligatures",
      },
      ".ligatures-no-common": {
        fontVariantLigatures: "no-common-ligatures",
      },
      ".ligatures-discretionary": {
        fontVariantLigatures: "discretionary-ligatures",
      },
      ".ligatures-no-discretionary": {
        fontVariantLigatures: "no-discretionary-ligatures",
      },
      ".ligatures-historical": {
        fontVariantLigatures: "historical-ligatures",
      },
      ".ligatures-no-historical": {
        fontVariantLigatures: "no-historical-ligatures",
      },
      ".ligatures-contextual": {
        fontVariantLigatures: "contextual",
      },
      ".ligatures-no-contextual": {
        fontVariantLigatures: "no-contextual",
      },
    }),
  )
