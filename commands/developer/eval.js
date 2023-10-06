module.exports = {
  name: "eval",
  aliases: ["e"],
  $if: "old",
  nonPrefixed: false,
  code: `
  $if[$message[1]==aoi]
    $onlyIf[$messageSlice[1]!=;:x: kod girmedin.]
    $eval[$messageSlice[1]]
  $elseif[$message[1]==djs]
    $onlyIf[$messageSlice[1]!=;:x: kod girmedin.]
    $djseval[$messageSlice[1]]
  $endelseif
  $endif
  
  $onlyIf[$message[1]!=;:x: örnek kullanım: \`.e <kod>\`]
  $onlyForIds[$clientOwnerIDs[\;];:x: Kullanamazsın.]
`
}
