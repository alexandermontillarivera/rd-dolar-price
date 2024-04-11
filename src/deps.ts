import "https://deno.land/x/puppeteer@16.2.0/install.ts"
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"
import * as dotenv from "https://deno.land/std@0.221.0/dotenv/mod.ts"
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts"
import * as path from "https://deno.land/std@0.184.0/path/mod.ts"
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12"
// @deno-types="npm:@types/jsdom"
import jsdom from "npm:jsdom"
// @deno-types="npm:@types/cors"
import cors from 'npm:cors'
// @deno-types="npm:@types/express"
import express from "npm:express"

export { 
  dotenv, 
  express, 
  puppeteer, 
  cors,
  path,
  cheerio,
  jsdom,
  DOMParser
}
