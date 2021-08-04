# Labforward devie and driver communication
The main purpose of this project is to asynchronoulsy emulate IoT device communication  

Development time taken project
35 minutes for brainstorming
1 hours for Developement
# Pre-reqs
To build and run this app locally you will need a few things:

Install Node.js
Install VS Code
MQTT Broker Mosquitto

# Getting started
Clone the repository
git clone  https://github.com/JOELJOSEPHCHALAKUDY/node-async-device.git
Install dependencies
cd <project_name>
npm install
# Configure your env file
 intMQUsername=''

 intMQPassword=''

 intMQClientId=''

 intMQHost='mqtt://test.mosquitto.org'

 intMQPort=1883

# Run the project
npm start

Device response to request from driver
Device is online : Sat Jul 17 2021 14:07:06 GMT+0530 (India Standard Time)
Listening...
Received request from driver as ASCII:   ....
Received request from driver as string:  {"param_name":"Temperature-F","request_type":"command"}
Received : { param_name: 'Temperature-F', request_type: 'command' }
param_name temperature
Initating a 5 second delay to emulate slow network...
Sending response to driver...

# why testing ?
Testing allows us to refactor,maintain and expect alias.


# Deploying the app
There are many ways to deploy an Node app(heroku as example)