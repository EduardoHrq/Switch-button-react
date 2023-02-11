import './style.css'

function Home() {

  function switchB(){
    // document.getElementById('btS').style.left = 'inherit'
    // document.getElementById('btS').style.right = '0'

    document.documentElement.classList.toggle('light')
  }

  return (
    <div id='content' className=''>
      <div className='container'>
        <button id='btS' onClick={switchB}></button>
        <span></span>
      </div>
    </div>
  )
}

export default Home;