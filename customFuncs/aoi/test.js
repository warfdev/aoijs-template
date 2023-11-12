module.exports = {
  name : '$say',
  params : ['authorid','message'],
  type : 'aoi.js',
  code : `**$userTag[{authorid}]** says: **{message}**`
}