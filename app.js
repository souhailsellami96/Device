
global.__base = __dirname + '/';


if (process.env.prod !== 'yes') {
    require('dotenv').config();
}

const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./src/converter')

const mqttService = require(__base + "src/connect/mqtt");


// subscribe to communication topic 
mqttService.subscribe('labforward/iot-sensors/req', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening...')
    }
});

// capture incoming messages 
mqttService.on('message', function (topic, message, packet) {
    if (topic == `labforward/iot-sensors/req`) {

        let string_message = message.toString();
        let ascii_payload = '';
        for (var i = 0; i < string_message.length; i++) {
            ascii_payload += ` ${string_message.charCodeAt(i)}`;
        }
        console.info('Received request from driver as ASCII: ', ascii_payload);
        console.info('Received request from driver as string: ', string_message);
        let parsedMessage = JSON.parse(string_message);
        console.info(`Received :`, parsedMessage);
        let param_name = parsedMessage['param_name'];
        console.info('param_name', param_name);

        // custom processing logic
        switch (param_name) {
            case 'Temperature-F':
                sendMessage(celsiusToFahrenheit(10))
                break;
            case 'Temperature-C':
                sendMessage(fahrenheitToCelsius(50))
                break;
            case 'Humidity':
                sendMessage('15%')
                break;
            default:
                sendMessage('command not recognized.');
        }
    }
});



const sendMessage = (value) => {
    //publish response to driver
    console.log('Initating a 5 second delay to emulate slow network...');

    // please note that timeout is not required here for realife scenario and should be removed when used in production

    setTimeout(function () {
        mqttService.publish(`labforward/iot-sensors/res`, `{"response":"${value}"}`, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Sending response to driver...`);
                console.log(' ');
            }
        });
    }, 5000)
}
