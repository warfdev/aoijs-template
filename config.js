module.exports = {
  other: {
    clientInvite: "YOUR_BOT_INVITE",
    clientOwnerIDs: ["YOUR_ID", "ID2"]
  },
  Client: {
    token: "BOT_TOKEN",
    prefix: [".", "!"],
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    aoiAutoUpdate: true,
    errorMessage: true,
    aoiWarning: true,
    aoiLogs: true,
    database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
  }
};