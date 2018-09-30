import React from 'react';

import Category from './category';
import './categories.css';
import Search from'../../widgets/containers/search';
import Playlist from '../../playlist/components/playlist.js';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      { props.search &&
        <Playlist playlist={props.search}
         handleOpenModal={props.handleOpenModal} />
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
