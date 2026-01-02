---
tags:
  - public
---

I usually use [[date-fns]] for working with dates. But the browser (and Node's) date manipulation options have gotten pretty robust. The APIs feel less ergonomic, but easier than installing an external dependency in some cases.

This is useful for parsing dates like "2025-01-01" from markdown frontmatter:
```js
/* Adapted from: https://ryankubik.com/blog/force-date-time-zone */
function forceDateToTimeZone(date, timeZone) {
	const [isoDate, isoTime] = new Date(date).toISOString().split("T");
	return new Date(isoDate + " (" + timeZone + ")")
}

// This time zone is a diff format from the OG URL aove, it needs parens
// around it in the function above.
const currTz = Intl.DateTimeFormat().resolvedOptions().timeZone
```

You can use INTL for date formatting too:
```js
new Intl.DateTimeFormat(
	"en-US",
	{ year: "numeric", month:"short" }
).format(
	forceDateToTimeZone(
		file.transformations.matter.publishedAt,
		currTz
	)
)
```

When parsing a frontmatter date like "2025-01-01" this lets you output it as "Jan 2025" irregardless of browser or server timezone.