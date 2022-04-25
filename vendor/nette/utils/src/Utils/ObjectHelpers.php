s `false` to skip auto-linking of hashtags.\n         */\n        this.hashtag = false; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {String/Boolean} [mention=false]\n         *\n         * A string for the service name to have mentions (ex: \"@myuser\")\n         * auto-linked to. The currently supported values are:\n         *\n         * - 'twitter'\n         * - 'instagram'\n         * - 'soundcloud'\n         *\n         * Defaults to `false` to skip auto-linking of mentions.\n         */\n        this.mention = false; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {Boolean} [newWindow=true]\n         *\n         * `true` if the links should open in a new window, `false` otherwise.\n         */\n        this.newWindow = true; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {Boolean/Object} [stripPrefix=true]\n         *\n         * `true` if 'http://' (or 'https://') and/or the 'www.' should be stripped\n         * from the beginning of URL links' text, `false` otherwise. Defaults to\n         * `true`.\n         *\n         * Examples:\n         *\n         *     stripPrefix: true\n         *\n         *     // or\n         *\n         *     stripPrefix: {\n         *         scheme : true,\n         *         www    : true\n         *     }\n         *\n         * As shown above, this option also accepts an Object form with 2 properties\n         * to allow for more customization of what exactly is prevented from being\n         * displayed. Both default to `true`:\n         *\n         * @cfg {Boolean} [stripPrefix.scheme] `true` to prevent the scheme part of\n         *   a URL match from being displayed to the user. Example:\n         *   `'http://google.com'` will be displayed as `'google.com'`. `false` to\n         *   not strip the scheme. NOTE: Only an `'http://'` or `'https://'` scheme\n         *   will be removed, so as not to remove a potentially dangerous scheme\n         *   (such as `'file://'` or `'javascript:'`)\n         * @cfg {Boolean} [stripPrefix.www] www (Boolean): `true` to prevent the\n         *   `'www.'` part of a URL match from being displayed to the user. Ex:\n         *   `'www.google.com'` will be displayed as `'google.com'`. `false` to not\n         *   strip the `'www'`.\n         */\n        this.stripPrefix = { scheme: true, www: true }; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {Boolean} [stripTrailingSlash=true]\n         *\n         * `true` to remove the trailing slash from URL matches, `false` to keep\n         *  the trailing slash.\n         *\n         *  Example when `true`: `http://google.com/` will be displayed as\n         *  `http://google.com`.\n         */\n        this.stripTrailingSlash = true; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {Boolean} [decodePercentEncoding=true]\n         *\n         * `true` to decode percent-encoded characters in URL matches, `false` to keep\n         *  the percent-encoded characters.\n         *\n         *  Example when `true`: `https://en.wikipedia.org/wiki/San_Jos%C3%A9` will\n         *  be displayed as `https://en.wikipedia.org/wiki/San_José`.\n         */\n        this.decodePercentEncoding = true; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {Number/Object} [truncate=0]\n         *\n         * ## Number Form\n         *\n         * A number for how many characters matched text should be truncated to\n         * inside the text of a link. If the matched text is over this number of\n         * characters, it will be truncated to this length by adding a two period\n         * ellipsis ('..') to the end of the string.\n         *\n         * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file'\n         * truncated to 25 characters might look something like this:\n         * 'yahoo.com/some/long/pat..'\n         *\n         * Example Usage:\n         *\n         *     truncate: 25\n         *\n         *\n         *  Defaults to `0` for \"no truncation.\"\n         *\n         *\n         * ## Object Form\n         *\n         * An Object may also be provided with two properties: `length` (Number) and\n         * `location` (String). `location` may be one of the following: 'end'\n         * (default), 'middle', or 'smart'.\n         *\n         * Example Usage:\n         *\n         *     truncate: { length: 25, location: 'middle' }\n         *\n         * @cfg {Number} [truncate.length=0] How many characters to allow before\n         *   truncation will occur. Defaults to `0` for \"no truncation.\"\n         * @cfg {\"end\"/\"middle\"/\"smart\"} [truncate.location=\"end\"]\n         *\n         * - 'end' (default): will truncate up to the number of characters, and then\n         *   add an ellipsis at the end. Ex: 'yahoo.com/some/long/pat..'\n         * - 'middle': will truncate and add the ellipsis in the middle. Ex:\n         *   'yahoo.com/s..th/to/a/file'\n         * - 'smart': for URLs where the algorithm attempts to strip out unnecessary\n         *   parts first (such as the 'www.', then URL scheme, hash, etc.),\n         *   attempting to make the URL human-readable before looking for a good\n         *   point to insert the ellipsis if it is still too long. Ex:\n         *   'yahoo.com/some..to/a/file'. For more details, see\n         *   {@link Autolinker.truncate.TruncateSmart}.\n         */\n        this.truncate = { length: 0, location: 'end' }; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {String} className\n         *\n         * A CSS class name to add to the generated links. This class will be added\n         * to all links, as well as this class plus match suffixes for styling\n         * url/email/phone/hashtag/mention links differently.\n         *\n         * For example, if this config is provided as \"myLink\", then:\n         *\n         * - URL links will have the CSS classes: \"myLink myLink-url\"\n         * - Email links will have the CSS classes: \"myLink myLink-email\", and\n         * - Phone links will have the CSS classes: \"myLink myLink-phone\"\n         * - Hashtag links will have the CSS classes: \"myLink myLink-hashtag\"\n         * - Mention links will have the CSS classes: \"myLink myLink-mention myLink-[type]\"\n         *   where [type] is either \"instagram\", \"twitter\" or \"soundcloud\"\n         */\n        this.className = ''; // default value just to get the above doc comment in the ES5 output and documentation generator\n        /**\n         * @cfg {Function} replaceF