# test-rollup-memoizee

Clone, `npm install`, `npm run build`

For memoizee it seems some of the code gets lost.

The output (also available in [dist/bundle.js](dist/bundle.js)) has the following output, right at the end of the generated file -

```js
var memoizee = function (fn/*, options*/) {
	var options = normalizeOptions(arguments[1]), length;

	if (!options.normalizer) {
		length = options.length = resolveLength(options.length, fn.length, options.async);
		if (length !== 0) {
			if (options.primitive) {
				if (length === false) {
					options.normalizer = primitive;
				} else if (length > 1) {
					options.normalizer = getPrimitiveFixed(length);
				}
			} else if (length === false) options.normalizer = get();
				else if (length === 1) options.normalizer = get1();
				else options.normalizer = getFixed(length);
		}
	}

	// Assure extensions
	if (options.async)
	if (options.promise)
	if (options.dispose)
	if (options.maxAge)
	if (options.max)
	if (options.refCounter)

	return plain(fn, options);
};
```

The "Assure extensions" is problematic, it is generated from this code in memoizee -

```js
	// Assure extensions
	if (options.async) require("./ext/async");
	if (options.promise) require("./ext/promise");
	if (options.dispose) require("./ext/dispose");
	if (options.maxAge) require("./ext/max-age");
	if (options.max) require("./ext/max");
	if (options.refCounter) require("./ext/ref-counter");

	return plain(fn, options);
```

So effectively what happens above is that instead of using the requires, the actual return only happens when all the options are set.
