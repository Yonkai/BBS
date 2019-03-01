class ScrollTop extends React.Component {
    constructor(props) {
      super(props);
    }
  
    scrollToTop(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
  
    render() {
      return (
        <a href="#" onClick={this.scrollToTop}>
            Top
        </a>
      );
    }
  }

  
export default ScrollTop