import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <img className='blogItem-cover' src={cover} alt='cover' />
       
        </Link>
      <Chip label={category} />
      
      
      <footer>
        
         
      </footer>
    </div>
  );
};

export default BlogItem;
