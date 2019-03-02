class ScrollDown extends React.Component {
    constructor(props) {
      super(props);
    }
  
    scrollToTop(e) {
        e.preventDefault();
        window.scrollTo(0,document.body.scrollHeight);
    }
  
    render() {
      return (
        <a href="#" onClick={this.scrollToTop}>
            Bottom
        </a>
      );
    }
  }

  
export default ScrollDown