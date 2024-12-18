const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    target: "web",
    entry: "./src/client.ts", // Client entry point
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "/", // Ensures correct resource paths
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|mp3|svg|ico)$/,
                type: "asset/resource",
                generator: {
                    filename: "media/[name][ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/pages/report/index.html", // Input HTML
            filename: "index.html", // Output HTML
        }),
    ],
};
