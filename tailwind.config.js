module.exports = {
    content: [
      "./views/public/**/*.ejs", 
      "./assets/public_template/src/*.css", 
      "./assets/public_template/js/*.js", 
    ],
    theme: {
        fontFamily: {
            'zcool': ['ZCOOL QingKe HuangYou', 'cursive'],
            'cinzel': ['Cinzel', 'serif']
        },
        extend: {},
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                light: {
                    primary: "#3363ff",
                    secondary: "#bd73e2",
                    accent: "#24292e",
                    neutral: "#15191c",
                    "base-100": "#ffffff",
                    info: "#11C9EE",
                    success: "#00C897",
                    warning: "#F0A500",
                    error: "#FF4848",
                },
                dark: {
                    primary: "#0066ff",
                    secondary: "#93ABD3",
                    accent: "#24292e",
                    neutral: "#15191c",
                    "base-100": "#24292e",
                    info: "#3ABFF8",
                    success: "#00C897",
                    warning: "#FF8E00",
                    error: "#FF4848",
                },
            },
        ],
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: "dark",
    },
};
