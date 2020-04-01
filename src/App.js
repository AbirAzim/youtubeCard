import React, { Component } from 'react';
import NavBarMain from './components/NavBarMain';
import Post from './components/post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  links = [
    {
      id: 1,
      linkName: 'Facebook',
      linkUrl: '',
      linkIcon: 'fa fa-facebook'
    },
    {
      id: 2,
      linkName: 'Github',
      linkUrl: '',
      linkIcon: 'fa fa-github'
    },
    {
      id: 3,
      linkName: 'Linkedin',
      linkUrl: '',
      linkIcon: 'fa fa-linkedin'
    },
    {
      id: 4,
      linkName: 'Quora',
      linkUrl: '',
      linkIcon: 'fa fa-quora'
    }
  ];

  navBarMainStyle = {
    backgroundColor: 'black',
    navBrandIconColor: 'white',
    navBrandName: 'Badhon Khan'
  };

  posts = [
    {
      title: 'This is first Post',
      description: 'This is the first post description !!',
      Author: 'Badhon',
      postDate: '20 jan , 2020',
      like: 20,
      dislike: 4,
      thumbnailImage:
        'https://www.who.int/images/default-source/health-topics/coronavirus/corona-virus-getty.jpg'
    },
    {
      title: 'This is second Post',
      description: 'This is the second post description !!',
      Author: 'Anik kanti',
      postDate: '21 nov , 2019',
      like: 50,
      dislike: 7,
      thumbnailImage:
        'https://img.medscape.com/thumbnail_library/dt_200121_coronavirus_800x450.jpg'
    },
    {
      title: 'This is  third Post',
      description: 'This is the third post description !!',
      Author: 'Samrat Khan',
      postDate: '16 april , 2019',
      like: 1,
      dislike: 400,
      thumbnailImage:
        'https://cdn2.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/bacteria-106583_1920.jpg'
    }
  ];

  render() {
    return (
      <div>
        <NavBarMain navBarMainStyle={this.navBarMainStyle} links={this.links} />
        <Post posts={this.posts} />
      </div>
    );
  }
}

export default App;
