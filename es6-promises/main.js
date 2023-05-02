import takeAChance from './take-a-chance.js';

takeAChance('Bingle')
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.log(error.message);
  });

/* The takeAChance function returns a promise object that will be resolved after a random time delay or rejected after 2 seconds.In the code, we call takeAChance function with a name as an argument.If the promise resolves, the success message will be logged to the console.If the promise is rejected, the error message will be logged to the console.

  Here's a step-by-step breakdown of the code:

1) `import takeAChance from './take-a-chance.js';`
    * This imports the takeAChance function from the take - a - chance.js module.
2) `takeAChance("Your Name")`
    * This calls the takeAChance function with the string "Your Name" as an argument.The function returns a promise object.
3) `.then((successMessage) => { console.log(successMessage); })`
    * This attaches a fulfillment handler to the promise object returned   by takeAChance.If the promise is fulfilled, the success message will be logged to the console.
4) `.catch((error) => { console.log(error.message); });`
    * This attaches a rejection handler to the promise object returned by takeAChance.If the promise is rejected, the error message will be logged to the console. */
