// runclient for android

const { execSync } = require('child_process');

console.log('CLIENT BY (DISCORD) zmochas / ksvnwharf');
console.log('BOTU BASLATMAK ICIN HERHANGI BIR DUGMEYE BAS');
await new Promise(resolve => {
    process.stdin.once('data', () => resolve());
});

console.clear();
console.log('BOT BASLATILIYOR...');
execSync('node index.js', { stdio: 'inherit' });
console.log('BOT BASLATILDI.');