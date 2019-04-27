//CREDIT/SOURCE: http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google
import React from 'react';
import PropTypes from 'prop-types';
 
//Side note: Renders happen top-down, mounts happen down-top in component hierarchy
//TODO: Convert this to stateless function as it is not needed to be a stateful component, from docs:
//'If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.'

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}
    
const defaultProps = {
    initialPage: 1,
    pageSize: 10
}
 
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { pager: {} };
    }
 
    componentDidMount() {
        // set page if items array isn't empty
        console.log(this.props.items,this.props.items.length);
        console.log(this.props.initialPage);
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }
 
    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.pager.currentIndex !== prevProps.pager.currentIndex ) {
            this.setPage(this.props.pager.initialPage);
            // this.props.requery();
        }
    }

    setPage(page) {
        var { items, pageSize } = this.props;
        var pager = this.props.pager;
    
        
        // exit condition
        if (page < 1 || page > pager.totalPages) {
            return;
        }
 
        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);
 
        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        
        // update state
        // this.props.onChangePage(pager);
 
        // call change page function in parent component
        console.log(pager);
        this.props.onChangePage(pager);
    }
 
    getPager(totalItems, currentPage, pageSize) {


        // default to first page
        currentPage = currentPage || 1;
 
        // default page size is 10
        pageSize = pageSize || 10;
 
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
 
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
 
    render() {
        console.log(this.props.pager);
        var pager = this.props.pager;
 
        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }
 
        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
       
            <style jsx>{`
            li{
                display: inline;
                padding:3px;
                background:rgb(248,251,245,1);
            }
            li:nth-child(${this.props.pager.currentPage+2}){
                background-color:orange;
            }
            li a{
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
                -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none; /* Non-prefixed version, currently
                                            supported by Chrome and Opera */
            }
            `}</style>
        </ul>
        );
    }
}
 
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;