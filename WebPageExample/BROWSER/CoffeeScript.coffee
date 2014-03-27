WebPageExample.CoffeeScript = CLASS

	preset : ->
		VIEW

	init : (cls, inner, self) ->

		div = DIV(
			style :
				fontSize : 50
			children : [A({
				children : ['<-BACK']
				onTap : ->
					WebPageExample.GO ''
			}), BR(), 'IcedCoffeeScript!']
		).appendTo BODY

		#OVERRIDE: self.close
		self.close = close = (params) ->
			div.remove()
