const shouldComponentUpdate = (nextProps, nextState) => {
  return Math.ceil(this.props.posts.length / 3 ) - nextProps.nextPage  >= 0&&
    nextProps.nextPage > 0;
}
function funky() {
  if (this.props.query.Object.keys[0]) {
    switch (this.props.query.Object.keys) {
      case 'author':
        return this.props.author;
      case 'category':
        return posts.filter((post) => {
            for(let i = 0;i < post.tags.length;i++){
              if(post.tags[i] === query.category){
                return post;
              }
            }
          }
        );
      case 'month':
        return this.props.month;
      default:
        return;
    }
  }
  return;

}
