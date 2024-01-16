console.log('check')


let id = location.href
id = id.split('?')[1]
if(id){
  document.body.innerHTML = `
  <iframe width="672" height="378"
  src="https://www.youtube-nocookie.com/embed/${id}?rel=0" frameborder="0"
  allowfullscreen></iframe>
  `
  console.log(`
  <iframe width="672" height="378"
  src="https://www.youtube-nocookie.com/embed/${id}?rel=0" frameborder="0"
  allowfullscreen></iframe>
  `)

} else {
  document.body.innerHTML = `
  <h1> An error has occured. Please check that you have the correct youtube link</h1>
  `
}

