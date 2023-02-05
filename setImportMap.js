export const setImportMap = (html, imap) => {
	const starts = `<script type="importmap">`;
	const n = html.indexOf(starts);
	const m = html.indexOf(`</script>`, n);
	if (n < 0 || m < 0) {
		return html;
	}
	return html.substring(0, n + starts.length) + "\n" + imap.trim() + "\n" + html.substring(m);
};
