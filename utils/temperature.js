const UNITS = {
    CELSIUS: 'C',
    FAHRENHEIT: 'F'
};

function convertTemperature(temperature, unit) {
    if (unit === UNITS.FAHRENHEIT) {
        return ((temperature - 32) * 5 / 9).toFixed(1);
    } else if (unit === UNITS.CELSIUS) {
        return (temperature * 9 / 5 + 32).toFixed(1);
    } else {
        throw new Error('Invalid unit');
    }
}

function getOppositeUnit(unit) {
    if (unit === UNITS.CELSIUS) {
        return UNITS.FAHRENHEIT;
    } else if (unit === UNITS.FAHRENHEIT) {
        return UNITS.CELSIUS;
    } else {
      throw new Error('Invalid unit');
    }
}

export { UNITS, convertTemperature, getOppositeUnit };