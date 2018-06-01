var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    picture: 'https://i.ytimg.com/vi/pIrOAyXIjak/maxresdefault.jpg' 
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    picture: 'https://vignette.wikia.nocookie.net/tlk/images/9/98/Kr%C3%B3l_Lew_wszystkie_postacie.png/revision/latest?cb=20160722192416&path-prefix=pl' 
  },
  {
    id: 3,
    title: 'Gladiator',
    desc: 'Film o rzymskim gladiatorze',
    picture: 'https://d15v4l58k2n80w.cloudfront.net/file/1396975600/46808334754/width=1280/height=720/format=-1/fit=crop/crop=0x0+1500x844/rev=2/t=421643/e=never/k=e7932809/gLADIATOR+IN+CONCERT.jpg' 
  },
  {
    id: 4,
    title: 'Deadpool',
    desc: 'Film o nieśmiertelnym superbohaterze',
    picture: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/02/08/Pictures/_33b2ca74-0cc1-11e8-ba67-a8387f729390.jpeg'
  },
  {
    id: 5,
    title: 'Avangers',
    desc: 'Film o superbohaterach',
    picture: 'https://www.screengeek.net/wp-content/uploads/2017/04/avengers-4.png'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.picture})
    );
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));