import React from 'react'

import Card from '../Card'

const Home = () => {
  return (
    <>
      <section>
        <form action="">
          <input type="text" name="search" />
          <button>Buscar</button>
        </form>
      </section>
      <section>
        <Card />
      </section>
    </>
  )
}

export default Home;
