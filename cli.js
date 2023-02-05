import { setImportMap } from "./setImportMap.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";

const fn = Deno.args[0];
if (!fn) {
	console.log("[importmap.json]");
	Deno.exit(1);
}
const imap = await Deno.readTextFile(fn);

const base = "./";
const fns = await dir2array(base);
for (const fn of fns) {
	if (!fn.endsWith(".html")) continue;
	const fn2 = base + fn;
	const html = await Deno.readTextFile(fn2);
	const html2 = setImportMap(html, imap);
	if (html != html2) {
		await Deno.writeTextFile(fn2, html2);
		console.log(fn2);
	}
}
