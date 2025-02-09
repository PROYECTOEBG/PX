const handler = async (m, { conn }) => {
  let gifUrl = "https://f.uguu.se/HyNLgazF.mp4";

  let text = `
 ╭────────⚔──────╮  
        DESARROLLADORES  
╰────────⚔──────╯  

🔹 *SOBRE EL BOT:*  
Barboza Bot es una herramienta creada con el objetivo de mejorar la interacción y experiencia de los usuarios en diversas plataformas, ofreciendo funcionalidades avanzadas y soporte constante.

🔹 *CONTACTO DE LOS DESARROLLADORES*  
╭─────────────────────────╮  
│🏆 **ELITE BOT . PROYECTO X**  
│  
│👤 *KEVIN*
│📌 [+593993370003]  
╰─────────────────────────╯  

🔹 *AGRADECIMIENTOS:*
Un agradecimiento especial para los colaboradores y usuarios que hacen posible la constante evolución de este proyecto.  

🔹 *¿DUDAS O SUGERENCIAS?*
Contacta a cualquiera de los desarrolladores para resolver dudas, enviar sugerencias o reportar problemas.  

`.trim();


  await conn.sendMessage(
    m.chat,
    {
      video: { url: gifUrl },
      gifPlayback: true, 
      caption: text,
      mentions: [m.sender], 
    },
    { quoted: m }
  );
};

handler.command = /^(desarrolladores)$/i; 
export default handler;
