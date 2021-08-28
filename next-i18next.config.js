const path = require("path");

const defaultLocale = "en-US";
const locales = ["en-US"];

const localePath = path.resolve("./public/locales");

module.exports = {
	i18n: {
		locales,
		defaultLocale,
	},
	ns: ["common"],
	localePath,
};
