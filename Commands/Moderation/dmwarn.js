module.exports =({
      name: "warn",
 aliases: "w",
      code: `$dm[$mentioned[1]]
      $title[You Have Been Warned In Giveaway Hub]
      $description[
You have been warned!
Reason:$noMentionMessage
Moderator: <@$authorID>]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]`
})