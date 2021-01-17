import React from 'react'
import PropTypes from 'prop-types'

const foodILike = [
  {
    id: 1, // 유일값이여야 하기 때문에 id(key) 값을 설정한다
    name:'kimchi',
    image: 
      'https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg',
    rating: 5,
  },
  {
    id: 2,
    name:'Bibibap',
    image:
      'https://www.koreanbapsang.com/wp-content/uploads/2010/02/DSC_0417-e1421376856367.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name:'Doncasu',
    image:
      'https://www.koreanbapsang.com/wp-content/uploads/2017/06/DSC_1922-1-e1496660923866.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name:'Kimbap',
    image:
      'https://www.koreanbapsang.com/wp-content/uploads/2015/11/DSC_11421-e1446775953749.jpg',
    rating: 4.7,
  },
]

function Food({name, picture, rating}) {
  return(
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        />
      )}
    </div>
  );
}

export default App;
