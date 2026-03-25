const astroConfig = {"base":"/","root":"file:///C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/","srcDir":"file:///C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
