module.exports = {
  Client: {
    token: "BOT_TOKEN",
    prefix: "BOT_PREFIX",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    aoiAutoUpdate: true,
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
}
