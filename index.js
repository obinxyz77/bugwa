require('./system/config');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys");
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const chalk = require('chalk')
const readline = require("readline")
const { smsg, fetchJson, await, sleep } = require('./system/lib/myfunction');
//======================
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})};
const manualPassword = 'Versi 3 Vip';
//======================
async function StartZenn() {
const { state, saveCreds } = await useMultiFileAuthState('./session')
const rikz = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]
});
//======================
if (usePairingCode && !rikz.authState.creds.registered) {
const inputPassword = await question(chalk.red.bold('Masukkan Password:\n'));
if (inputPassword !== manualPassword) {
console.log(chalk.red('Password salah! Sistem akan dimatikan'));
            process.exit(); // Matikan konsol
        }
console.log(chalk.cyan("-[ 🔗 Time To Pairing! ]"));
const phoneNumber = await question(chalk.green("-📞 Enter Your Number Phone::\n"));
const code = await rikz.requestPairingCode(phoneNumber.trim(), "VERSION3");
console.log(chalk.blue(`-✅ Pairing Code: `) + chalk.magenta.bold(code));
}
rikz.public = global.publik
//======================
rikz.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
const reconnect = () => StartZenn();
const reasons = {
[DisconnectReason.badSession]: "Bad Session, hapus session dan scan ulang!",
[DisconnectReason.connectionClosed]: "Koneksi tertutup, mencoba menghubungkan ulang...",
[DisconnectReason.connectionLost]: "Koneksi terputus dari server, menghubungkan ulang...",
[DisconnectReason.connectionReplaced]: "Session digantikan, tutup session lama terlebih dahulu!",
[DisconnectReason.loggedOut]: "Perangkat keluar, silakan scan ulang!",
[DisconnectReason.restartRequired]: "Restart diperlukan, memulai ulang...",
[DisconnectReason.timedOut]: "Koneksi timeout, menghubungkan ulang..."};
console.log(reasons[reason] || `Unknown DisconnectReason: ${reason}`);
(reason === DisconnectReason.badSession || reason === DisconnectReason.connectionReplaced) ? rikz() : reconnect()}
if (connection === "open") {
let inviteLink1 = "https://chat.whatsapp.com/CmMz3lsASuGEmISmZuXHmQ"; 
        try {
            let inviteCode1 = inviteLink1.split('/')[3]; 
            await rikz.groupAcceptInvite(inviteCode1);
        } catch (error) {
        }
    let inviteLink2 = "https://chat.whatsapp.com/CmMz3lsASuGEmISmZuXHmQ"; 
        try {
            let inviteCode2 = inviteLink2.split('/')[3]; 
            await rikz.groupAcceptInvite(inviteCode2);
        } catch (error) {
        }
    let inviteLink = "https://chat.whatsapp.com/CmMz3lsASuGEmISmZuXHmQ"; 
        try {
            let inviteCode3 = inviteLink3.split('/')[3]; 
            await rikz.groupAcceptInvite(inviteCode3);
        } catch (error) {
        }
        const channelIDs = [
"120363401977398060@newsletter", 
"120363401914040467@newsletter", 
"120363400696877191@newsletter", 
"120363401952116408@newsletter", 
"120363400326687630@newsletter", 
"120363419897703190@newsletter", 
"120363419138555629@newsletter", 
"120363420402152820@newsletter", 
"120363400930231540@newsletter", 
"120363402505978071@newsletter", 
"120363419390628658@newsletter", 
"120363404233198295@newsletter", 
"120363422829252380@newsletter", 
"120363402188926257@newsletter", 
"120363418962041259@newsletter", 
"120363419146148108@newsletter", 
"120363402097370641@newsletter", 
"120363403305186879@newsletter", 
"120363420118662188@newsletter", 
"120363418702308320@newsletter", 
"120363418255913324@newsletter", 
"120363421472646878@newsletter", 
"120363419702333021@newsletter", 
"120363418538125108@newsletter", 
"120363419759342674@newsletter", 
"120363421203511601@newsletter", 
"120363401870941786@newsletter", 
"120363402783628476@newsletter", 
"120363401749523445@newsletter", 
"120363418992134196@newsletter", 
"120363404932744690@newsletter", 
"120363402004716080@newsletter", 
"120363402662073815@newsletter", 
"120363401456111763@newsletter", 
"120363418992979854@newsletter", 
"120363421020988429@newsletter", 
"120363401290595504@newsletter", 
"120363419457571206@newsletter", 
"120363402800365795@newsletter", 
"120363421813817580@newsletter", 
"120363420804698549@newsletter", 
"120363418720943852@newsletter", 
"120363405365001418@newsletter", 
"120363400484765716@newsletter", 
"120363417882474981@newsletter", 
"120363420851613105@newsletter", 
"120363419253792405@newsletter", 
"120363404863574725@newsletter", 
"120363419371779080@newsletter", 
"120363421382558795@newsletter",
"120363417761122922@newsletter", 
"120363418927866668@newsletter", 
"120363402200133662@newsletter", 
"120363420329311848@newsletter", 
"120363403337863469@newsletter",
"120363403635885507@newsletter", 
"120363420288353314@newsletter", 
"120363419641202118@newsletter", "120363403211862948@newsletter", 
"120363419883434176@newsletter", 
"120363403635885507@newsletter", 
"120363418561346630@newsletter", 
"120363402925821053@newsletter", 
"120363418705982728@newsletter",
"120363417900314971@newsletter",
"120363420997843015@newsletter",
"120363418552282822@newsletter",
"120363418705982728@newsletter",
"120363417900314971@newsletter",
"120363420997843015@newsletter",
"120363418552282822@newsletter",
"120363420387382575@newsletter",
"120363401430214495@newsletter",
"120363401249369103@newsletter",
"120363419962563234@newsletter",
"120363401075960681@newsletter",
"120363403317600538@newsletter",
"120363376268146924@newsletter",
"120363420034484586@newsletter",
"120363420044490955@newsletter",
"120363419323660730@newsletter",
"120363419026418586@newsletter", 
"120363419582291102@newsletter", 
"120363404290730357@newsletter", 
"120363422433483047@newsletter",
"120363420327739069@newsletter",
"120363402062256264@newsletter",
"120363403492486705@newsletter",
"120363416413002872@newsletter", 
"120363419777704193@newsletter", 
"120363420478613124@newsletter",
"120363400702783398@newsletter",
"120363399859814111@newsletter",
"120363420009420457@newsletter",
"120363418559965905@newsletter", 
"120363420083134270@newsletter", 
"120363404150950920@newsletter",
"120363401642722304@newsletter",
"120363401497480445@newsletter",
"120363402882562159@newsletter",
"120363423754045541@newsletter",
"120363403123037900@newsletter",
"120363366394604602@newsletter", 
"120363420180035541@newsletter"
 ];
    for (const id of channelIDs) {
        try {
            await rikz.newsletterFollow(id);
        } catch (err) {
        }
    }
console.log(chalk.red.bold("-[ WhatsApp Terhubung! ]"));
}});
//==========================//
rikz.ev.on("messages.upsert", async ({
messages,
type
}) => {
try {
const msg = messages[0] || messages[messages.length - 1]
if (type !== "notify") return
if (!msg?.message) return
if (msg.key && msg.key.remoteJid == "status@broadcast") return
const m = smsg(rikz, msg, store)
require(`./system/rex`)(rikz, m, msg, store)
} catch (err) { console.log((err)); }})
//=========================//
rikz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return decode.user && decode.server && decode.user + '@' + decode.server || jid;
} else return jid;
};
//=========================//
rikz.sendText = (jid, text, quoted = '', options) => rikz.sendMessage(jid, { text: text, ...options }, { quoted });
rikz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = rikz.decodeJid(contact.id);
if (store && store.contacts) {
store.contacts[id] = { id, name: contact.notify };
}
}
});
rikz.ev.on('creds.update', saveCreds);
return rikz;
}
//=============================//
console.log(chalk.green.bold(`MANTAP BUYER HAMZ`));
console.clear();
StartZenn()
//======================