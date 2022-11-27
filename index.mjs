#!/usr/bin/env node
import "isomorphic-fetch";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

(async () => {
  const res = await fetch("https://type.fit/api/quotes");
  const quotes = await res.json();

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(`${randomQuote.text} - ${randomQuote.author}`);
})();
