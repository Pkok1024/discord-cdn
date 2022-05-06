# Motivación
****
Acelerar el desarrollo utilizando el potencial de Discord para almacenar archivos.
## Configuración
****
### ES Modules (ESM)
````js
import DiscordClient from "discord-cdn-client"
````
### Crear cliente
Para utilizarlo se requiere tener una aplicación en  [discord](https://discord.com/developers/applications) 
````js
const discordClient = new DiscordClient({
    token : TOKEN,
    channelId : CHANNEL_ID
})
````
- **TOKEN** : Proporcionado por discord. (se obtiene en la sección **BOT** de tu [aplicación](https://discord.com/developers/applications) )
- **CHANNEL_ID**: Id del canal donde se subirán los archivos. (activando el modo desarrollador de discord, clic derecho en el canal deseado y copiar id)

## USO
----
````js
discordClient.send(fileName, fileBuffer).then(res => ...)
````
- **fileName**: Nombre del archivo, incluyendo su extensión.
- **fileBuffer**: Array Buffer del archivo que se desea subir.

Ejemplo de respuesta:
````js
{
  id: '97201145542',
  filename: 'test.mp3',
  size: 5244210,
  url: 'https://cdn.discordapp.com/attachments/CHANNEL_ID/FILE_ID/test.mp3',
  proxy_url: 'https://media.discordapp.net/attachments/CHANNEL_ID/FILE_ID/test.mp3',
  content_type: 'audio/mpeg'
}
````
## Casos de errores
----
 ### El archivo excede el tamaño límite.
 Discord limita el tamaño máximo a los archivos que intentamos subir, dependiendo del nivel de Boost que tenga el servidor.
 - **BOOST Nivel 0 y 1** : Límite 8mib.
 - **BOOST Nivel 2**: Límite 50mib.
 - **BOOOST Nivel 3**: Límite 100mib.

 De suceder, el cliente lanzará un error especificando el límite del servidor.

## Errores sin manejar
----
### Exceder el limite de peticiones
Para prevenir spam, discord limita la tasa de peticiones.