

@startuml

autonumber
skinparam legendBackgroundColor #FEFECE

<style>
      header {
        HorizontalAlignment left
        FontColor purple
        FontSize 14
        Padding 10
      }
    </style>

header Insights by Truffle

title Txn Hash: 0xe08cb4748aacdc7cfaea04a930aad8ffa70efddac4d76fb1a08b967d845f14c6


actor EOA as "EOA"
participant TToken_01 as "TToken_01"

"EOA" -> "TToken_01" ++: approve(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| address | dst | 0x32091C89Fad0E1722aFDE2525801c9b4b5aD29eb |\n\
| uint | amt | 115792089237316195423570985008687907853269984665640564039457584007913129639935 |\n\
) { 0.0 GWEI }
"TToken_01" -> "EOA" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool |  | true |\n\
)

legend
Participant details
<#FEFECE,#D0D000>|= Alias |= Contract name |= Address |
<#FEFECE>| EOA | Externally Owned Account | 0xD365202063c9c6B460f43D9b61CfcE2C3f518fa8 |
<#FEFECE>| TToken_01 | TToken | 0xEA9AE06202c1B686507538fc0c98bfbBfB961101 |
endlegend

@enduml