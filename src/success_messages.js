const SUCCESS_MESSAGES = {
    "successful_buy": (itemName, coins) => { return `You successfully bought a ${itemName} and got ${coins} coin(s) back!`},
    "successful_dispense": (coins, price) => { return `You got ${coins} ($${price}) coins back!`},
    "successful_refill": "Machines successfully refilled."
};

export default SUCCESS_MESSAGES;
