`|⬡════════════════════════════════════════════|❝ ©Trina | Tech Transformation ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)Trina 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ ©Trina | Tech Transformation ❞|═══════════════════════════════════════════⬡|`;
require(`dotenv`);
const Kron = require("node-cron");
const Heroku = require(`heroku-client`);
console.log("🚀Trina 𝐀𝐮𝐭𝐨𝐋𝐦 𝐒𝐜𝐫𝐢𝐩𝐭 𝐒𝐭𝐚𝐫𝐭𝐞𝐝...");
const HerokuClient = new Heroku({
token: process.env.HEROKU_API_KEY,
});
console.log(HerokuClient);
Kron.schedule("0 */15 * * * *", async () => {
console.log("⚡𝐑𝐞𝐛𝐨𝐭𝐢𝐧𝐠 Trina 𝐞𝐯𝐞𝐫𝐲 𝟏𝟓𝐦𝐢𝐧𝐬!");
await HerokuClient.delete(
`/apps/` + process.env.HEROKU_APP_NAME + `/dynos/` + `worker`
).catch((error) => console.log(error));
});
`|⬡════════════════════════════════════════════|❝ ©Trina | Tech Transformation ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)Trina 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ ©Trina | Tech Transformation ❞|═══════════════════════════════════════════⬡|`;
