COFFEECASE
==========
UPPERCASE run with CoffeeScript!

![ScreenShot](https://raw.github.com/BTNcafe/COFFEECASE/master/COFFEECASE.png)

CONTACT: contact@btncafe.com

EXAMPLE: nodemon README.coffee

	require './COFFEECASE/BOOT.coffee'

	BOOT 
		CONFIG :
			defaultBoxName : 'WebPageExample',
			isDevMode : true,
			
			Facebook :
				appId : '663125710416253'

		SERVER_CONFIG :
			isNotUsingDB : true
