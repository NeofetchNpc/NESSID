const chatGPT = require('./index.js');

(async () => {
  const result = await chatGPT('Hello, ChatGPT!');
  console.log(result);
})();
