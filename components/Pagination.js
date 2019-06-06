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
                <li onClick={() => this.updateCurrentPage(null,'FIRST')}>
                    <a>⏪</a>
                </li>
                <li onClick={() => this.updateCurrentPage(null,'PREVIOUS')}>
                    <a>◀️</a>
                </li>
                {Array.from({length: 10}, (v, k) => k+1).map((arr)=>
                    <li onClick={() => this.updateCurrentPage(arr)} key={arr}>
                        <a>{arr}</a>
                    </li>
                )}
                <li onClick={() => this.updateCurrentPage(null,'NEXT')}>
                    <a>▶️</a>
                </li>                
                <li onClick={() => this.updateCurrentPage(null,'LAST')}>
                    <a>⏩</a>
                </li>
                <style jsx>{`
                    li{
                        display: inline;
                        padding:5px;
                        background:rgb(248,251,245,1);
                    }
                    li:nth-child(${this.props.currentPage+2}){
                        background-color:skyblue;
                        border:1px solid blue;
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

                    li:hover,
                    li:focus-within {
                        background:skyblue;
                        cursor: pointer;
                    }
            `}</style>
            </ul>

        )
        }

    }

export default Pagination;