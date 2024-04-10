import "https://deno.land/x/puppeteer@16.2.0/install.ts"
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"
import * as dotenv from "https://deno.land/std@0.221.0/dotenv/mod.ts"
import * as path from "https://deno.land/std@0.184.0/path/mod.ts"
// @deno-types="npm:@types/cors"
import cors from 'npm:cors'
// @deno-types="npm:@types/express"
import express from "npm:express"

export { 
  dotenv, 
  express, 
  puppeteer, 
  cors, 
  path
}
