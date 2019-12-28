const { Client, Attachment } = require('discord.js');

const client = new Client();
const ytdl = require('ytdl-core');
const request = require("request");
const crypto = require("crypto");
const fs = require("fs");
const ownerID = '297713975012098058';

const activities_list = [
  "안녕! 나는 희망이라고 해!", 
  "꾸준히 업데이트 중!",
  "문의는 유선민#7777 !", 
  "희망을 찾아서!"
  ];

// console
client.on('ready', () => {
  console.log("희망을 찾아서! 희망봇 가동!")
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
});

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.get("660559238258622475").send(x.join(" "));
})

client.on("guildCreate", guild => {
  console.log(`새로운 등록! 서버명: ${guild.name} (id: ${guild.id}). 총${guild.memberCount}명의 새로운 멤버`);
});

client.on("guildDelete", guild => {
  console.log(`봇 삭제 서버명: ${guild.name} (id: ${guild.id})`);
});

// chat
client.on('message', message => {
    if (message.content === '희망아 안녕') {
      message.channel.send('네 안녕하세요! :blush: ');
    }
  });

client.on('message', message => {
  if (message.content === '희망아 반가워') {
    message.channel.send('저도 반가워요!');
  }
});

client.on('message', message => {
  if (message.content === '희망아 ㅎㅇ') {
    message.channel.send('네 안녕하세요! 👋');
  }
});

client.on('message', message => {
  if (message.content === '희망아 안뇽') {
    message.channel.send('나도 안뇽');
  }
});

client.on('message', message => {
  if (message.content === '희망아 안녕하세요') {
    message.channel.send('네 안녕하세요! :slight_smile: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 바보') {
    message.channel.send('**자기소개 잘 들었어요ㅎㅎ** :stuck_out_tongue_closed_eyes: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 희망이란?') {
    message.channel.send('**희망은 찾는게 아니라, 만드는 거랍니다.** :slight_smile: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 희망이란') {
    message.channel.send('**희망은 찾는게 아니라, 만드는 거랍니다.** :slight_smile: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 힘들어') {
    message.channel.send('무슨일 있으셨나요?');
  }
});

client.on('message', message => {
  if (message.content === '희망아 사랑해') {
    message.channel.send('저도 사랑해요! :smiling_face_with_3_hearts: ');
  }
});

client.login(const { Client, Attachment } = require('discord.js');

const client = new Client();
const ytdl = require('ytdl-core');
const request = require("request");
const crypto = require("crypto");
const fs = require("fs");
const ownerID = '297713975012098058';

const activities_list = [
  "안녕! 나는 희망이라고 해!", 
  "꾸준히 업데이트 중!",
  "문의는 유선민#7777 !", 
  "희망을 찾아서!"
  ];

// console
client.on('ready', () => {
  console.log("희망을 찾아서! 희망봇 가동!")
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
});

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.get("660559238258622475").send(x.join(" "));
})

client.on("guildCreate", guild => {
  console.log(`새로운 등록! 서버명: ${guild.name} (id: ${guild.id}). 총${guild.memberCount}명의 새로운 멤버`);
});

client.on("guildDelete", guild => {
  console.log(`봇 삭제 서버명: ${guild.name} (id: ${guild.id})`);
});

// chat
client.on('message', message => {
    if (message.content === '희망아 안녕') {
      message.channel.send('네 안녕하세요! :blush: ');
    }
  });

client.on('message', message => {
  if (message.content === '희망아 반가워') {
    message.channel.send('저도 반가워요!');
  }
});

client.on('message', message => {
  if (message.content === '희망아 ㅎㅇ') {
    message.channel.send('네 안녕하세요! 👋');
  }
});

client.on('message', message => {
  if (message.content === '희망아 안뇽') {
    message.channel.send('나도 안뇽');
  }
});

client.on('message', message => {
  if (message.content === '희망아 안녕하세요') {
    message.channel.send('네 안녕하세요! :slight_smile: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 바보') {
    message.channel.send('**자기소개 잘 들었어요ㅎㅎ** :stuck_out_tongue_closed_eyes: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 희망이란?') {
    message.channel.send('**희망은 찾는게 아니라, 만드는 거랍니다.** :slight_smile: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 희망이란') {
    message.channel.send('**희망은 찾는게 아니라, 만드는 거랍니다.** :slight_smile: ');
  }
});

client.on('message', message => {
  if (message.content === '희망아 힘들어') {
    message.channel.send('무슨일 있으셨나요?');
  }
});

client.on('message', message => {
  if (message.content === '희망아 사랑해') {
    message.channel.send('저도 사랑해요! :smiling_face_with_3_hearts: ');
  }
});

client.login(process.env.BOT_TOKEN)
