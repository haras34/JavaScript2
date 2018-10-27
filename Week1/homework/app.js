'use strict';

const bookNames = ["b_1", "b_2", "b_3", "b_4", "b_5", "b_6", "b_7", "b_8", "b_9", "b_10"]; 

const bookInfo = {
    b_1:{
        title:'Don Quixote', language:'Spanish', author:'Miguel de Cervantes'
    },
    b_2:{
        title:'The Pilgrim\'s Progress', language:'English', author:'John Bunyan'
    },
    b_3:{
        title:'Robinson Crusoe', language:'English', author:'Daniel Defoe'
    },
    b_4:{
        title:'Gulliver\'s Travels', language:'English', author:'Jonathan Swift'
    },
    b_5:{
        title:'Clarissa', language:'English', author:'Samuel Richardson'
    },
    b_6:{
        title:'Les Liaisons dangereuses', language:'French', author:'Pierre Choderlos de Laclos'
    },
    b_7:{
        title:'Three Men in a Boat', language:'English', author:'Jerome K. Jerome'
            },
    b_8:{
        title:'The Girl with the Dragon Tattoo', language:'Swedish', author:'Stieg Larsson'
    },
    b_9:{
        title:'Der Vorleser', language:'German', author:'Bernhard Schlink'
    },
    b_10:{
        title:'Raja Gidh', language:'Urdu', author:'Bano Qudsia'
    }
};

function bookListGen(arr){

let names = document.createElement('ul');
document.body.append(names);

for (let i=0; i<arr.length; i++){
    let bli = document.createElement('ul');
    bli.setAttribute('class', bookInfo);
   // bli.innerHTML = arr[i];
    //names.append(bli);
    
    let bookImage = document.createElement( 'img' ); 
    bookImage.src = 'img/' + bookNames[ i ] + '.jpg';
    bookImage.setAttribute( 'alt' , bookNames[ i ] );
    names.append( bookImage );


    for (let property in bookInfo[bookNames[i]]){
        let li = document.createElement( 'li' ); 
        li.innerHTML = property + ' : ' + bookInfo[ bookNames [ i ] ] [property] ;
        names.append( li );
    }

  }
  
}


