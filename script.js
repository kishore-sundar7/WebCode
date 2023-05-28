let url = fetch('https://www.anapioficeandfire.com/api/books')
     async function getBooks() {
        try{
          let res= await url;
          return await res.json()
          
        }
        catch(error){
            console.log(error)
        }
    } 

    async function seeCharacters(povCharacters){
        try{
           let res = await fetch('https://www.anapioficeandfire.com/api/characters/1022')
           let data= res.json()
          }
          catch(error){
              console.log(error)
          }
    }
    async function myBooks(){
       
       let data = await getBooks();
       let parent = document.createElement('div')
       parent.setAttribute('id', 'parent')
       document.body.appendChild(parent)

      data.forEach((e) => {
        let child = document.createElement('div')
        child.setAttribute('id','child')
        parent.appendChild(child)

        let h2 = document.createElement('h2')
        h2.setAttribute('id', 'name')
        h2.innerHTML = e.name
        child.appendChild(h2)

        let h3 = document.createElement('h3')
        h3.setAttribute('id', 'authors')
        h3.innerHTML =e.authors
        child.appendChild(h3)

        let h4 = document.createElement('h4')
        h4.setAttribute('id', 'ISBN')
        h4.innerHTML = e.isbn
        child.appendChild(h4)

        let h5 = document.createElement('h5')
        h5.setAttribute('id', 'publisher')
        h5.innerHTML = e.publisher
        child.appendChild(h5)

        let h6 = document.createElement('h6')
        h6.setAttribute('id', 'releasedDate')
        h6.innerHTML = e.released
        child.appendChild(h6)

        let h7 = document.createElement('h7')
        h7.setAttribute('id', 'nop')          //nop->number of pages
        h7.innerHTML = e.numberOfPages
        child.appendChild(h7)

        let button = document.createElement('button')
        button.innerHTML = 'See Characters'
        button.addEventListener('click',()=>{
           let charac= seeCharacters(povCharacters)
        })
        child.appendChild(button)
        parent.appendChild(child)


      });

    }
 
    myBooks();

    // fetch('https://www.anapioficeandfire.com/api/books')
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error))
