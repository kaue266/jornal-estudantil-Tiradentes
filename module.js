var OSName = "Unknown OS";
		if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
		if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
		if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
		if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";


let cssPath = '';

if (OSName === 'Windows') {
  // Windows
  cssPath = 'css/windows.css';
} else if (OSName === 'android') {
  // Mac
  cssPath = 'css/android.css';
} else if (OSName === 'linux') {
  // Linux
  cssPath = 'css/linux.css';
} else if(OSName === Macintosh){
 //mac
 cssPath = 'css/default' 
} else {
  // Outro sistema
  cssPath = 'css/default.css';
}
