import * as t from "https://deno.land/std/testing/asserts.ts";
import { setImportMap } from "./setImportMap.js";

Deno.test("simple", () => {
	const html = `
	<script type="importmap">
	{
		"imports": {
			"three": "../build/three.module.js",
			"three/addons/": "./jsm/"
		}
	}
	</script>
	`;
	const expect = `
	<script type="importmap">
{
	"imports": {
		"three": "https://unpkg.com/three@0.149.0/build/three.module.js",
		"three/addons/": "./jsm/"
	}
}
</script>
	`;
	const imap = `
{
	"imports": {
		"three": "https://unpkg.com/three@0.149.0/build/three.module.js",
		"three/addons/": "./jsm/"
	}
}
	`
	t.assertEquals(setImportMap(html, imap), expect);
});
