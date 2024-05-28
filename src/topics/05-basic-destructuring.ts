interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;

}
interface Details{
    author: string;
    year:number;
}


const audioPlayer:AudioPlayer={
    audioVolume:90,
    songDuration:36,
    song:"Mess",
    details:{
        author:"Ed Sheeran",
        year:2015
    }
}

//desestructuracion para poder usar directamente
const{song, songDuration:duration, details:{author},details }=audioPlayer;
const{author:autor}=details;
// const{song, songDuration:duration, details:{author}}=audioPlayer;
console.log("SONG:" ,song);
//console.log("SONG:" ,audioPlayer.song);
console.log("DURACION:" ,duration);
// console.log("DURACION:" ,audioPlayer.songDuration);
console.log("AUTOR:" ,author);
console.log("AUTOR:" ,autor);
//console.log("AUTOR:" ,audioPlayer.details.author);




//Desestructuracion de arreglos

// const dbz: string[]=["goku",'Vegeta','Trunk'];
//con vaLOR POR DEFECTO
const [p1,p2,p3 ='not found']: string[]=["goku",'Vegeta','Trunk'];


console.log('Personaje 3: ',p1);


// console.log('Personaje 3: ',dbz[2]);