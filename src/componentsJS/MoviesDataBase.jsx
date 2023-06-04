import React from 'react'

export default function MoviesDataBase() {

    fetch('https://api.themoviedb.org/3/')
    .then(function(res){
        alert('data recevied')
        var a =res.json()
        return console.log(a)
    })
    .catch(function(){
        alert('data not recivied')
    })
  return (
    <div>MoviesDataBase</div>
  )
}
