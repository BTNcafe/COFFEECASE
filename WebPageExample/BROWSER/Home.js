WebPageExample.Home = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		// div
		div,

		// close.
		close;

		div = DIV({
			style : {
				fontSize : 50
			},
			children : [A({
				children : 'JavaScript',
				onTap : function() {
					WebPageExample.GO('JavaScript');
				}
			}), BR(), A({
				children : 'CoffeeScript',
				onTap : function() {
					WebPageExample.GO('CoffeeScript');
				}
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			div.remove();
		};
	}
});
