---
title: Bedrock
description: ''
position: 9
category: Basics
---

## Bedrock

For servers allowing Bedrock players to join, this page will provide necessary steps to make sure your bedrock players have no issues.  

### LuckPerms setup  

Set `allow-invalid-usernames` to `true` in LuckPerm's `config.yml`.  

### Inventory GUI  

GriefDefender provides 2 GUI's for players : Chat and Inventory. The Chat GUI will not function properly with Bedrock players as they are unable to click chat.  
All Bedrock players should be given the permission `griefdefender.login.inventory-gui` in order to default to the Inventory GUI when executing command `/gd`.  

### Confirm  
There are various commands that may prompt bedrock players with confirmations in Chat. If this occurs, bedrock players can use the command `/gdconfirm` in order to trigger the confirm.  