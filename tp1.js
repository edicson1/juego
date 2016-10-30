// État de la grille
// 
// Note : ne modifiez pas ces noms de variables
var width = 40, height = 40;
var cells = []; // Besoin d'un tableau 2D de 40x40 ici pour gérer la grille


var changeState = function(x, y) {
    console.log('changeState ' + x + ' ' + y);

   var voisins = 0;

    function compterVoisins(x, y) {
        
        var compter = 0;

        lignes:
        for(var i=-1; i<2; i++) {
            colonnes:
            for(var j=-1; j<2; j++) {
                
                var ligne = x+i, colonne = y+j;

                if(i == 2 && j == 2) {
                    continue colonnes;
                }
                if(ligne == -1 || ligne == width-1){
                    ligne = (i+width)%width;
                }
                if(colonne == -1 || colonne == height-1) {
                    colonne = (j+height)%height;
                }

                if (cells[ligne][colonne] == 1) {
                    compter++;
                }
            }
        }
    return compter;
    }

    for(var i=0; i<width; i++) {
        for(var j=0; j<height; j++) {
            voisins = compterVoisins(x, y);

            if (cells[x][y] === 1) {
                if(voisins >=2 && voisins <=3) {
                    // La cellule va être vivant le prochaine tour
                } else {
                    // la cellule va être morte le prochaine tour
                }
            } else {
                if (voisins === 3) {
                    // la cellule va naître le prochaine tour
                }
            }
        }
    }


};

var step = function() {
    console.log('step');
};

var randomGrid = function(percent) {
    console.log('randomGrid ' + percent);

    var creerMatrice = function (width, height) {
    	var resultat = Array(width);
    	for (var i=0; i<width; i++) {
        	resultat[i] = Array(height);
    	}
    	return resultat;
	};

	cells = creerMatrice(width, height);


	for(var i = 0; i<width*percent/100; i++){
    	for(var j = 0; j<height; j++) {
    		var x = Math.floor(width*Math.random());
    		var y = Math.floor(height*Math.random());
        	cells[x][y] = Grid.colorCell(x, y,'blue');
    	}
	}
};

var resetGrid = function() {
    console.log('resetGrid');
    for (var i = 0; i < width; i++) {
    	for (var j = 0; j < height; j++) {
    		if (cells[i][j] == Grid.colorCell(i, j, 'blue')) {
    			Grid.colorCell(i,j, 'black');
    		}
    	}
    }

};

var resizeGrid = function(newWidth, newHeight) {
    Grid.create(newHeight, newWidth);

    console.log('resizeGrid ' + newWidth + ' ' + newHeight);
};

// Crée la grille initiale
Grid.create(40,40);
