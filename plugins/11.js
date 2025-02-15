require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const yts = require('yt-search') 
const ytdl = require('ytdl-core') 
const fg = require('api-dylux') 
const {savefrom, lyrics, lyricsv2, youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getFile, getRandom, msToTime, downloadMediaMessage} = require('../libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('../libs/youtube') 
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
let user = global.db.data.users[m.sender]
let limit = 320

async function descarga(m, command, conn, text, command, args, fkontak, from, buffer, getFile, q, includes, lolkeysapi) {
if (global.db.data.users[m.sender].banned) return

if (command == 'playBotones') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 

const yt_play = await search(args.join(' '))
const texto1 = `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${yt_play[0].title}
│║◈ ${lenguaje.descargar.ago} ${yt_play[0].ago}
│║◈ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}
│║◈ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}
│║◈ ${lenguaje.descargar.autor} ${yt_play[0].author.name}
│║◈ Link: ${yt_play[0].url}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`.trim()

let listSections = [];             
listSections.push({
title: yt_play[0].title, 
rows: [{ header: "Audio (opción 1)", title: "", id: `${prefix}musica ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "Audio Doc (Opcion 2)", title: "", id: `${prefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "Video (Opción 1)", title: "", id: `${prefix}video ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "Video Doc (Opcion 2)", title: "", id: `${prefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{header: "Mas Resultados", title: "", id: `${prefix}yts ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});

await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `.musica ${text}`], ['Video', `.ytmp4 ${text}`], ['Mas resultados', `.yts ${text}`]], null, null, m)

await conn.sendList(m.chat, `*𝙴𝙻𝙸𝙹𝙰𝚁 𝚀𝚄𝙴 𝚅𝙰 𝙷𝙰𝙲𝙴𝚁 𝙲𝙾𝙽:* ${text}`, wm, `Click Aqui`, listSections, m)
}

if (command == 'play3' || command == 'play4') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
conn.sendMessage(m.chat, {
        react: {
          text: '⏱️',
          key: m.key,
        },
      });
const yt_play = await search(args.join(' '))
const texto1 = `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${yt_play[0].title}
│║◈ ${lenguaje.descargar.ago} ${yt_play[0].ago}
│║◈ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}
│║◈ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}
│║◈ ${lenguaje.descargar.autor} ${yt_play[0].author.name}
│║◈ Link: ${yt_play[0].url}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`.trim()
const pene2 = `${yt_play[0].url}`
await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `.audiomp32 ${pene2}`], ['Video', `.videomp42 ${pene2}`], ['Mas resultados', `.yts ${text}`]], null, null, m)}

if (command == 'play' || command == 'musica') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${yt_play[0].title}
│║◈ ${lenguaje.descargar.ago} ${yt_play[0].ago}
│║◈ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}
│║◈ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}
│║◈ ${lenguaje.descargar.autor} ${yt_play[0].author.name}
│║◈ Link: ${yt_play[0].url}
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤\n\n${lenguaje.descargar.music}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp3?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react("❌");
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch {
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
const audioData = await res.json()

if (audioData.status && audioData.result?.downloadUrl) {
    await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
}
} catch {
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch {
try {
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m})
m.react(done) 
} catch {
try {
let chat = global.db.data.chats[m.chat]
let res = await yts(text)
//let vid = res.all.find(video => video.seconds < 3600)
let vid = res.videos[0]
if (!vid) return `⚠️ Audio no encontrado`
let isVideo = /vid$/.test(command)
let q = isVideo ? '360p' : '128kbps' 
let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
let { title, dl_url, quality, size, sizeB } = yt
let isLimit = limit * 1024 < sizeB 
if (!isLimit) conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', asDocument: chat.useDocument }, { quoted: m})
m.react(done)
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, mimetype: 'audio/mpeg' }, { quoted: m})
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg' }, { quoted: m})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}}}}

if (command == 'play2' || command == 'video') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${yt_play[0].title}
│║◈ ${lenguaje.descargar.ago} ${yt_play[0].ago}
│║◈ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}
│║◈ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}
│║◈ ${lenguaje.descargar.autor} ${yt_play[0].author.name}
│║◈ Link: ${yt_play[0].url}
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤\n\n${lenguaje.descargar.vid}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
try { 
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp3?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react("❌");
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${yt_play[0].title}` }, { quoted: m });
} catch {
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
const audioData = await res.json()

if (audioData.status && audioData.result?.downloadUrl) {
    await conn.sendMessage(m.chat, { document: { url: audioData.result.downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${yt_play[0].title}` }, { quoted: m });
}
} catch {
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `${yt_play[0].title}` }, { quoted: m });
} catch {
try {
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${ttl}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
let chat = global.db.data.chats[m.chat]
let res = await yts(text)
//let vid = res.all.find(video => video.seconds < 3600)
let vid = res.videos[0]
if (!vid) return `⚠️ Vídeo no encontrado`
let isVideo = /vid$/.test(command)
let q = isVideo ? '360p' : '128kbps' 
let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
let { title, dl_url, quality, size, sizeB } = yt
let isLimit = limit * 1024 < sizeB 
if (!isLimit) conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', asDocument: chat.useDocument }, { quoted: m})
m.react(done)
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {video: {url: dl_url}, caption: wm, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${n}`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}}}}

if (command == 'ytmp3' || command == 'ytmp3doc') {
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${yt_play[0].title}
│║◈ ${lenguaje.descargar.ago} ${yt_play[0].ago}
│║◈ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}
│║◈ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}
│║◈ ${lenguaje.descargar.autor} ${yt_play[0].author.name}
│║◈ Link: ${yt_play[0].url}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤\n\n${lenguaje.descargar.text6}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}

if (command == 'playdoc2' || command == 'playvideodoc' || command == 'ytmp4doc' || command == 'ytmp4') {
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║◈ ${lenguaje.descargar.title} ${yt_play[0].title}
│║◈ ${lenguaje.descargar.ago} ${yt_play[0].ago}
│║◈ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}
│║◈ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}
│║◈ ${lenguaje.descargar.autor} ${yt_play[0].author.name}
│║◈ Link: ${yt_play[0].url}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤\n\n${lenguaje.descargar.text7}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
 let q = args[1] || '360p'
try {  
const yt = await fg.ytv(args[0], q)
let { title, dl_url, quality, size, sizeB } = yt
 conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, sizeB, dl_url, quality } = yt
conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done)	
} catch {
try {		
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${ttl}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸 ${lenguaje.lengua.titulo} ${n}\n┆🔸️${lenguaje.lengua.Peso} ${n3}\n╰─────────────────`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}}

if (command == 'play.1' || command == 'play.2') {
let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
if (enviando) return;
enviando = true
m.react(rwait) 
try {
const apiUrls = [`https://api.cafirexos.com/api/ytplay?text=${text}`, `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}` ];
for (const url of apiUrls) {
try {
const res = await fetch(url);
data = await res.json();
if (data.resultado && data.resultado.url) {
break;
}} catch {}
}
if (!data.resultado || !data.resultado.url) {
enviando = false;
} else {
try {
if (command == 'play.1') {
m.reply(lenguaje.descargar.audio) 
apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp3?url=${data.resultado.url}`;
mimeType = 'audio/mpeg';
fileName = 'error.mp3';
buff = await conn.getFile(apiUrl);
m.react(done) 
} else if (command == 'play.2' || command == 'video') {
m.reply(lenguaje.descargar.video) 
apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp4?url=${data.resultado.url}`;
mimeType = 'video/mp4';
fileName = 'error.mp4';
buff = await conn.getFile(apiUrl);
m.react(done) 
}} catch {
try {
if (c
