function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      posts: [],
      isLoading: true,
      errors: null });}


  getPosts() {
    axios.
    get('https://www.reddit.com/.json').
    then((response) =>
    response.data.data.children.map(post => ({
      title: `${post.data.title}`,
      subreddit: `${post.data.subreddit}`,
      author: `${post.data.author}`,
      created: `${post.data.created}`,
      selftext_html: `${post.data.selftext_html}`,
      score: `${post.data.score}`,
      subreddit_subscribers: `${post.data.subreddit_subscribers}`,
      url: `${post.data.url}` }))).


    then(posts => {
      this.setState({
        posts,
        isLoading: false });

    }).
    catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      React.createElement(React.Fragment, null,
      React.createElement("h2", null, "Random User"),
      React.createElement("div", null,
      !isLoading ?
      posts.map(post => {
        const { title, subreddit, author, created, selftext_html, score, subreddit_subscribers, url } = post;
        return (
          React.createElement("div", null,
          React.createElement("p", null, title),
          React.createElement("p", null, subreddit),
          React.createElement("p", null, score),


          React.createElement("p", { dangerouslySetInnerHTML: { __html: _.unescape(selftext_html) } })));


      }) :

      React.createElement("p", null, "Loading..."))));




  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("root"));