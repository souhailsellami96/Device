# Labforward device and driver communication
The main purpose of this project is to asynchronously emulate IoT device communication  

## Development time taken for the project:
  * 35 minutes for Brainstorming
  * 1 hour for Developement
# Pre-reqs
To build and run this app locally you will need a few things:

  * Install [Node.js](https://nodejs.org/en/download/current/)
  * Install [VS Code](https://code.visualstudio.com/Download)
  * MQTT Broker [Mosquitto](https://test.mosquitto.org/)

# Getting started
## Clone the repository
 git clone  https://github.com/souhailsellami96/Device.git
## Install dependencies
 ### cd <project_name>
 ` npm install `
 ### configure .env file 
``` Javascript
# Configure your env file
 intMQUsername=''

 intMQPassword=''

 intMQClientId=''

 intMQHost='mqtt://test.mosquitto.org'

 intMQPort=1883
```
# Run the project
npm start
### Console Output:
 `Device response to request from driver
Device is online : Sat Aug 3 2021 23:13:06 
Listening...
Received request from driver as ASCII:   ....
Received request from driver as string:  {"param_name":"Temperature-F","request_type":"command"}
Received : { param_name: 'Temperature-F', request_type: 'command' }
param_name temperature
Initating a 5 second delay to emulate slow network...
Sending response to driver...
 `
# Why testing ?
Testing allows us to refactor,maintain and expect alias.


# Deploying the app
There are many ways to deploy an Node app and almost nothing changes.
