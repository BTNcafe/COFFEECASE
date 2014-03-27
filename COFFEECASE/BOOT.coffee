require '../UPPERCASE/BOOT.js'

_BOOT = BOOT

global.BOOT = (params) ->
	
	compile = (require './coffee-script.js').CoffeeScript.compile

	params.MULTI_LANG_SUPPORT =
		coffee : (code) ->
			compile code, { runtime: 'inline' }
		litcoffee : (code) ->
			compile code, { literate: true, runtime: 'inline' }
		
	_BOOT params
