let os = require('os');
let cssPath = '';

if (os.platform() === 'win32') {
  // Windows
  cssPath = 'css/windows.css';
} else if (os.platform() === 'android') {
  // Mac
  cssPath = 'css/android.css';
} else if (os.platform() === 'linux') {
  // Linux
  cssPath = 'css/linux.css';
} else {
  // Outro sistema
  cssPath = 'css/default.css';
}
console.log('O sistema operacional do usuário é ' + os.platform());
