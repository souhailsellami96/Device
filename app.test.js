const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./src/converter')

test('Should convert 50 F to 50 C', () => {
    const temp = fahrenheitToCelsius(50)
    expect(temp).toBe(10)

})
test('Should convert 10 C to 50 F', () => {
    const temp = celsiusToFahrenheit(10)
    expect(temp).toBe(50)
})