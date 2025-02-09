import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
import axios from 'axios';
import fs from 'fs';

const loadMarriages = () => {
    if (fs.existsSync('./storage/databases/marry.json')) {
        const data = JSON.parse(fs.readFileSync('./storage/databases/marry.json', 'utf-8'));
        global.db.data.marriages = data;
    } else {
        global.db.data.marriages = {};
    }
};

var handler = async (m, { conn }) => {
    loadMarriages();

    let who;
    if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender;
    } else {
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    }

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/WVyWh.jpg');
    let { premium, level, genre, birth, description, estrellas, exp, registered, age, role } = global.db.data.users[who] || {};
    let username = conn.getName(who);

    genre = genre === 0 ? 'No especificado' : genre || 'No especificado';
    age = registered ? (age || 'Desconocido') : 'Sin especificar';
    birth = birth || 'No Establecido';
    description = description || 'Sin Descripción';
    role = role || 'Aldeano';

    let isMarried = who in global.db.data.marriages;
    let partner = isMarried ? global.db.data.marriages[who] : null;
    let partnerName = partner ? conn.getName(partner) : 'Nadie';

    // Obtener nacionalidad
    let userNationality = 'Desconocido';
    try {
        const phone = new PhoneNumber(who.replace('@s.whatsapp.net', ''), 'US'); // Cambiar 'US' por el código de país predeterminado
        if (phone.isValid()) {
            const internationalNumber = phone.getNumber('international');
            const apiResponse = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${internationalNumber}`);
            const userNationalityData = apiResponse.data.result;
            userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido';
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }

    // Perfil no premium
    let noprem = `
「 👤 *PERFIL DE USUARIO* 」
☁️ *Nombre:* ${username}
💠 *Edad:* ${age}
⚧️ *Genero:* ${genre}
🎂 *Cumpleaños:* ${birth} 
👩‍❤️‍👩 *Casad@:* ${isMarried ? partnerName : 'Nadie'}
📜 *Descripción:* ${description}
🌀 *Registrado:* ${registered ? '✅': '❌'}
🌐 *Pais:* ${userNationality}

「 💰 *RECURSOS* 」
💴 *Estrellas:* ${estrellas || 0}
✨ *Experiencia:* ${exp || 0}
⚜️ *Rango:* ${role}
👑 *Premium:* ${premium ? '✅': '❌'}
`.trim();

    // Perfil premium
    let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* *${username}*
│⧼💠⧽ *ᴇᴅᴀᴅ:* *${age}*
│⧼⚧️⧽ *ɢᴇɴᴇʀᴏ:* *${genre}*
│⧼🎂⧽ *ᴄᴜᴍᴘʟᴇᴀɴ̃ᴏs:* ${birth}
│⧼👩‍❤️‍👩⧽ *ᴄᴀsᴀᴅᴏ:* ${isMarried ? partnerName : 'Nadie'}
📜 *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:* ${description}
│⧼🌀⧽ *ʀᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}
│⧼🌐⧽ *ᴘᴀɪs:* ${userNationality}

╰─────────────────⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼💴⧽ *estrellas:* ${estrellas || 0}
│⧼✨⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp || 0}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${role}
╰───⪨ *𝓤𝓼𝓾𝓪𝓻𝓲𝓸 𝓓𝓮𝓼𝓽𝓪𝓬𝓪𝓭𝓸* ⪩`.trim();

    conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, { mentions: [who] });
};

handler.help = ['profile'];
handler.register = true;
handler.group = true;
handler.tags = ['rg'];
handler.command = ['profile', 'perfil'];

export default handler;