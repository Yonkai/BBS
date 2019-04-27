//Needs to keep track of current page, and the index of threads in 10 thread increments
import React from 'react';

class Pagination extends React.Component{
    constructor(props){
        super(props);
    }

    updateCurrentPage(data, specialFlag){
        switch(specialFlag){
            case 'FIRST':
                this.props.onPagerChange(1);
                break;
            case 'NEXT':
                this.props.onPagerChange('NEXT');
                break;
            case 'LAST':
                this.props.onPagerChange(10);
                break;
            case 'PREVIOUS':
                this.props.onPagerChange('PREVIOUS');
                break;
            default:
            this.props.onPagerChange(data);
        }    
}

    render(){
        return(
            <ul>
                <li>
                    <a onClick={() => this.updateCurrentPage(null,'FIRST')}>FIRST</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(null,'PREVIOUS')}>PREVIOUS</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(1)}>1</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(2)}>2</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(3)}>3</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(4)}>4</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(5)}>5</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(6)}>6</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(7)}>7</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(8)}>8</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(9)}>9</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(10)}>10</a>
                </li>
                <li>
                    <a onClick={() => this.updateCurrentPage(null,'NEXT')}>NEXT</a>
                </li>                
                <li>
                    <a onClick={() => this.updateCurrentPage(null,'LAST')}>LAST</a>
                </li>
                <style jsx>{`
                    li{
                        display: inline;
                        padding:3px;
                        background:rgb(248,251,245,1);
                    }
                    li:nth-child(${this.props.currentPage+2}){
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

        )
        }

    }

export default Pagination;