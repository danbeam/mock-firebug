/*
 * File:	ensureConsole.js
 * Version:	1.0.0 (Feb. 19, 2010)
 * License:	GPLv3 License: http://www.opensource.org/licenses/gpl-3.0.html
 * Requires:	(nothing other than JavaScript being enabled)
 * Description:	Allows safe use of Firebug (v 1.4.5 at the time of this script)
 *
 * @author	Dan Beam <dan@danbeam.org>
 * @param	(none)
 * @internal	Allows safe use of Firebug (v 1.4.5 at the time of this script)
 * @return	(none), though fake console object is bound to window
 *
 */

;;;;;(function (consoleExists) {

	if (consoleExists && (window.console.firebug || window.console.firebugVersion)) return;

	var	funcs =
		[ "assert"
		, "count"
		, "clear"
		, "debug"
		, "dir"
		, "dirxml"
		, "info"
		, "error"
		, "getFirebugElement"
		, "group"
		, "groupEnd"
		, "groupCollapsed"
		, "log"
		, "notifyFirebug"
		, "profile"
		, "profileEnd"
		, "time"
		, "timeEnd"
		, "trace"
		, "warn"
		],

		i	= 0,
		len	= funcs.length,
		blank	= function(){},

		obj	= {
			"element"	: {},
			"firebug"	: "fake",
			"userObjects"	: []
		};
				
		while (i < len){ obj[funcs[i++]] = blank; }

		window.console = obj;

})("undefined" !== typeof window.console);
