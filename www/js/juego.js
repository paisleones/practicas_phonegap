var app={
	inicio: function(){
		DIAMETRO_BOLA = 35;
		
		ancho = document.documentElement.clientWidth;
		alto = document.documentElement.clientHeight;
		
		velocidadX = 0;
		velocidadY = 0;
		puntuacion = 0;
		dificultad = 1;
		
		document.getElementById('divPhaser').innerHTML = '';

		app.vigilaSensores();
		app.iniciaJuego();
	},
	
	iniciaJuego: function(){
						
		function precarga(){
			//Aplica "Fisica.Arcade" al juego
			game.physics.startSystem(Phaser.Physics.ARCADE);
			//Color de fondo del juego
			game.stage.backgroundColor = '#000000';

			 //'#f27d0c';
			//Como se construye el elemento BOLA
			//game.load.image('bola', 'assets/bola.png');
			//Como se construye el elemento OBJETIVO
			//game.load.image('objetivo', 'assets/obj1.png');
			//Como se construye el elemento OBJETIVO2
			//game.load.image('objetivo2', 'assets/obj2.png');
			
			var pixelWidth = 3;
			var pixelHeight = 3;

			var chick = [
				'...55.......',
				'.....5......',
				'...7888887..',
				'..788888887.',
				'..888088808.',
				'..888886666.',
				'..8888644444',
				'..8888645555',
				'888888644444',
				'88788776555.',
				'78788788876.',
				'56655677776.',
				'456777777654',
				'.4........4.'
			];

			game.create.texture('chick', chick, pixelWidth, pixelHeight);

			var burd = [
			  '..E.............',
			  '.DEEEEEEDDD.....',
			  '..EEEEEEDDD.....',
			  '..EE00EE77778666',
			  '..EEEEEE77777666',
			  '..EEEE7777777666',
			  '..EEEE7655567666',
			  'EEEEEE7777757666',
			  'EEEEEEDD555.7666',
			  '..DEEEEEDDD.....',
			  '..EEEEEEDDD.....',
			  '.7EEEEEEDDD.6...',
			  '.77EEEEEDDD66...',
			  '..77......66....'
			];

			game.create.texture('burd', burd, pixelWidth, pixelHeight);

			var alien = [
			  '....44........',
			  '....44........',
			  '......5.......',
			  '......5.......',
			  '....ABBBBA....',
			  '...ABBBBBBA...',
			  '..ABB8228BBA..',
			  '..BB882288BB..',
			  '.ABB885588BBA.',
			  'BBBB885588BBBB',
			  'BBBB788887BBBB',
			  '.ABBB7777BBBA.',
			  '.ABBBBBBBBBBA.',
			  '.AABBBBBBBBAA.',
			  '.AAAAAAAAAAAA.',
			  '.5AAAAAAAAAA5.'
			];
			
			game.create.texture('alien', alien, pixelWidth-1, pixelHeight-1);

			var ufo = [
			  '....DDDDDDDD....',
			  '...DDEEDDDDDD...',
			  '..DDDEEDDDDDDD..',
			  '..DDDDDDDDDDDD..',
			  '..DDDD5555DDDD..',
			  '..DDD555555DDD..',
			  '..DDD555555DDD..',
			  '..DDD555555DDD..',
			  '..334244333333..',
			  '.33344443333333.',
			  '3333444433333333',
			  '....5...5..5....',
			  '...5....5...5...',
			  '.66....66....66.',
			  '.66....66....66.'
			];

			game.create.texture('ufo', ufo, pixelWidth, pixelHeight);

			var star = [
			  '.....828.....',
			  '....72227....',
			  '....82228....',
			  '...7222227...',
			  '2222222222222',
			  '8222222222228',
			  '.72222222227.',
			  '..787777787..',
			  '..877777778..',
			  '.78778887787.',
			  '.27887.78872.',
			  '.787.....787.'
			];
			
			game.create.texture('star', star, pixelWidth-2, pixelHeight-2);

			var ship = [
			  '.....DEEEEEED...',
			  '.....EEEEEFFE...',
			  '.....EEEDDFFE...',
			  '334..EEDDDDEE...',
			  '3333.EEDDDDEE...',
			  '33333EEDDDDEE...',
			  '.FF2222222222F..',
			  '.F222222222222F.',
			  '.22222222222222F',
			  '4443322222222222',
			  '44433FFFFFFFFFFF',
			  '.111FFFFFFFFFFF.',
			  '.11FFFFFFFFFFF..',
			  '.1FFFFFFFFFF1...',
			  '...3333.........',
			  '...333..........'
			];

			game.create.texture('ship', ship, pixelWidth, pixelHeight);

			var cat = [
			  '....443...443.',
			  '...4433..4433.',
			  '..44333.48333.',
			  '88888888244444',
			  '44444444433333',
			  '44444444433333',
			  '44044404433333',
			  '44488844433333',
			  '44400044433333',
			  '44F202F4433333',
			  '44202024433333',
			  '44F222F4433333',
			  '44444444433333',
			  '4433...4433.33',
			  '4433...4433.33'
			];
			
			game.create.texture('cat', cat, pixelWidth, pixelHeight);

			var joypad = [
			  '........65....5.',
			  '.......5..5..5..',
			  '.......5...55...',
			  '.......5........',
			  '.51FFFFFFFFFF15.',
			  '51FFFFFFFFEEFF15',
			  '1FF55FFFFFEEFFF1',
			  'FF5555FFFFFFF33F',
			  'FF0000FFAAFFF33F',
			  'FF1001FFAAFFFFFF',
			  'FFF11FFFFFF88FFF',
			  '2FFFFF2222F88FF2',
			  '1222221111222221',
			  '11FFF111111FFF11',
			  '.1FFF1....1FFF1.',
			  '..111......111..'
			];

			game.create.texture('joypad', joypad, pixelWidth-2, pixelHeight-2);

			var joystick = [
			  '..............',
			  '....533335....',
			  '....348333....',
			  '....344333....',
			  '....333533....',
			  '....533335....',
			  '......55......',
			  '......33......',
			  '......33......',
			  '......55......',
			  '....551155....',
			  '.343556655343.',
			  '61111111111116',
			  '50000000000005',
			  '50000000000005',
			  '55555555555555',
			  '.555......555.'
			];

			game.create.texture('joystick', joystick, pixelWidth, pixelHeight);

		}
		
		function crea(){
			// El orden de creacion importa, lo que se crea despues puede pasar por encima de lo que se crea antes
			
			//Crea una puntuacion, como y donde se muestra
			scoreTexture = game.add.sprite(2, 18, 'star').anchor.y = 1;
			scoreText = game.add.text(20, 2, puntuacion, { fontSize: '18px', fill: '#757676' });
			
			//Crea un indicador de dificultad, como y donde se muestra
			difficultyText = game.add.text(ancho-24, 2, dificultad, { fontSize: '18px', fill: '#757676' });
			difficultyTexture = game.add.sprite(ancho-44, 20, 'joypad').anchor.y = 1;
			
			//Crea el objetivo
				//objetivo = game.add.sprite(app.inicioX(), app.inicioY(), 'objetivo');
				//objetivo2 = game.add.sprite(app.inicioX(), app.inicioY(), 'objetivo2');
			objetivo = game.add.sprite(app.inicioX(), app.inicioY(), 'ufo');
			objetivo2 = game.add.sprite(app.inicioX(), app.inicioY(), 'alien');
			//Crea la bola
				//bola = game.add.sprite(app.inicioX(), app.inicioY(), 'bola');
			bola = game.add.sprite(app.inicioX(), app.inicioY(), 'ship');
			
			//Aplica "fisica.arcade" a los elementos
			game.physics.arcade.enable(bola);
			game.physics.arcade.enable(objetivo);
			game.physics.arcade.enable(objetivo2);
			
			//Colision con los bordes del "Mundo"
			bola.body.collideWorldBounds = true;
			//Que ocurre cuando la bola choca con los bordes
			bola.body.onWorldBounds = new Phaser.Signal();
			bola.body.onWorldBounds.add(app.decrementaPuntuacion, this);
		}
	
		function actualiza(){
			//Factor de dificultad, para ir aumentandola
			var factorDificultad = (200 + (dificultad * 100));
			//Hace que la bola se mueva
			bola.body.velocity.y = (velocidadY * factorDificultad);
			bola.body.velocity.x = (velocidadX * (-1 * factorDificultad));
			
			//Cuando la bola "monte" a objetivo --> Incrementa puntuacion + 1
			game.physics.arcade.overlap(bola, objetivo, app.incrementaPuntuacion, null, this);
			//Cuando la bola "monte" a objetivo2 --> Incrementa puntuacion + 10
			game.physics.arcade.overlap(bola, objetivo2, app.incrementaPuntuacion2, null, this);
			
			if(bola.body.checkWorldBounds() === true){
				//Si colisiona con los Bordel del Mundo --> Pinta en rojo
				game.stage.backgroundColor = '#ff3300';
			}
			else{
				//Vuelve a color original
				game.stage.backgroundColor = '#000000';
				
				switch(dificultad){
					//Cambia los colores de fondo en funcion de la dificultad, cambia cada dos puntos de dificultad
					//A partir de 13 ya no cambia más.
					case 1:
					case 2:
						game.stage.backgroundColor = '#242424';
						break;
					case 3:
					case 4:
						game.stage.backgroundColor = '#494949';
						break;
					case 5:
					case 6:
						game.stage.backgroundColor = '#6d6d6d';
						break;
					case 7:
					case 8:
						game.stage.backgroundColor = '#929292';
						break;
					case 9:
					case 10:
						game.stage.backgroundColor = '#b6b6b6';
						break;
					case 11:
					case 12:
						game.stage.backgroundColor = '#dbdbdb';
						break;
					default:
						game.stage.backgroundColor = '#ffffff';
				}
			}
		}
		
		var estados = { preload: precarga, create: crea, update: actualiza };
		var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'divPhaser', estados);
	},

	incrementaPuntuacion: function(){
		//Aumenta la puntuacion y la REpinta
		puntuacion = puntuacion + 1;
		scoreText.text = puntuacion;
		
		objetivo.body.x = app.inicioX();
		objetivo.body.y = app.inicioY();
		
		if (puntuacion > 0 && dificultad < 100){
			dificultad = dificultad + 1;
			difficultyText.text = dificultad;
		}
	},
	incrementaPuntuacion2: function(){
		//Aumenta la puntuacion y la REpinta
		puntuacion = puntuacion + 10;
		scoreText.text = puntuacion;
		
		objetivo2.body.x = app.inicioX();
		objetivo2.body.y = app.inicioY();
		
		if (puntuacion > 0 && dificultad < 100){
			dificultad = dificultad + 1;
			difficultyText.text = dificultad;
		}
	},
	decrementaPuntuacion: function(){
		//Reduce la puntuacion y la REpinta
		puntuacion = puntuacion-1;
		scoreText.text = puntuacion;
		
		//this.stage.backgroundColor = '#ed000f'; //'#f27d0c';
		//setTimeout(this.stage.backgroundColor = '#aaaaaa', 1000);
		
	},	
	
	inicioX: function(){
		return app.numeroAleatorioHasta(ancho - DIAMETRO_BOLA);
	},
	inicioY: function(){
		return app.numeroAleatorioHasta(alto - DIAMETRO_BOLA);
	},
	numeroAleatorioHasta: function(limite){
		return Math.floor(Math.random() * limite);
	},
	
	vigilaSensores: function(){
		
		function onError(){
			console.log('onERROR!');
		}
		
		function onSuccess(datosAceleracion){
			app.detectaAgitacion(datosAceleracion);
			app.registraDireccion(datosAceleracion);
		}
		
		navigator.accelerometer.watchAcceleration(onSuccess, onError, {frequency: 10});
	},
	
	detectaAgitacion: function(datosAceleracion){
		var agitacionX = datosAceleracion.x > 10;
		var agitacionY = datosAceleracion.y > 10;
		
		if (agitacionX || agitacionY){
			//Al agitar el dispositivo REINICIA el juego
			console.log('agitando');
			setTimeout(app.recomienza, 1000);
		}
	},
	
	recomienza: function(){
		document.location.reload(true);
	},
	
	registraDireccion: function(datosAceleracion){
		velocidadX = datosAceleracion.x ;
		velocidadY = datosAceleracion.y ;
	}
};



if('addEventListener' in document){
	document.addEventListener('deviceready', function(){
		app.inicio();
	}, false);
}