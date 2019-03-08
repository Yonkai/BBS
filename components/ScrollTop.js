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
        <style jsx>{
          `a{
            margin-right:15px;
          }`
        }
        </style>
        </a>
      );
    }
  }

  
export default ScrollTop