import React from 'react';

const PostItem = props => {
  return (
    <React.Fragment>
      <div className='row my-3'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='card' style={{ width: '28rem' }}>
            <img
              className='card-img-top'
              src={props.postItem.thumbnailImage}
              alt='Cardimageap'
            />
            <div className='card-body'>
              <h5 className='card-title'>{props.postItem.title}</h5>
              <span className='text-secondary'>
                Posted By : {props.postItem.Author} on{' '}
                <i>{props.postItem.postDate}</i>
              </span>
              <p className='card-text mt-3'>{props.postItem.description}</p>
              <div className='row'>
                <div className='col-sm-6'>
                  <ul>
                    <li className='mr-2' style={{ display: 'inline' }}>
                      <i
                        className='fa fa-thumbs-up mr-1'
                        style={{ color: 'blue' }}
                        aria-hidden='true'
                      />
                      {props.postItem.like}
                    </li>
                    <li style={{ display: 'inline' }}>
                      <i
                        className='fa fa-thumbs-down mr-1'
                        style={{ color: 'blue' }}
                        aria-hidden='true'
                      />
                      {props.postItem.dislike}
                    </li>
                  </ul>
                </div>
                <div className='col-sm-2'></div>
                <div className='col-sm-4'>
                  <a href='link' class='btn btn-success'>
                    learnMore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </React.Fragment>
  );
};

export default PostItem;
