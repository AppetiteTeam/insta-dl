"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReelInfo = void 0;
const puppeteer_1 = require("puppeteer");
const cheerio = require("cheerio");
async function getHTML(url) {
    // Launch a headless browser instance
    const browser = await puppeteer_1.default.launch({
        headless: "new",
        args: ["--no-sandbox"],
    });
    // Create a new page
    const page = await browser.newPage();
    // Navigate to a URL
    await page.goto(url);
    // Wait for the video tag to appear
    await page.waitForSelector("video");
    // Get the HTML content
    const html = await page.content();
    // Close the browser
    await page.close();
    await browser.close();
    // Return the HTML content
    return html;
}
async function getReelInfo(url) {
    const html = await getHTML(url);
    // calls cheerio to process the html received
    const $ = cheerio.load(html);
    // Searches the html for the video tag and get the src atttribute
    const videoDirectLink = $("video").attr("src");
    const videoCover = $('meta[property="og:image"]').attr("content");
    let videoTitle = $('meta[property="og:title"]').attr("content");

    if(videoTitle && videoTitle.trim() != null){
        if (videoTitle.endsWith('on Instagram') || videoTitle.endsWith('в Instagram')) {
            videoTitle = '';
        } else {
            const splited = videoTitle.split('"');
            if(splited.length > 2) {
                splited.shift();
                splited.pop();
                videoTitle = splited.join('"');
            }
        }
    } else {
        videoTitle = '';
    }
    
    // returns the direct video link
    return {url: videoDirectLink, text: videoTitle, cover_url: videoCover};
}
exports.getReelInfo = getReelInfo;
