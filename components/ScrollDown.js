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
            <style jsx>{`
            a{
              margin-right:15px;
            }
          `}</style>
        </a>
      );
    }
  }

  
export default ScrollDown