import React from 'react';

class NewThreadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: {} };
        this.openNewThreadForm = this.openNewThreadForm.bind(this);
    }

    openNewThreadForm(e){
        e.preventDefault();
        console.log('open new thread form function.');
    }

    render(){
        return (
            <>
                <button onClick={this.openNewThreadForm}>
                    New Thread
                </button>
                <style jsx>{`
                    button{
                        margin-right:15px;
                        margin-bottom:5px;
                    }
                `}</style>
            </>
        );
    }
}

export default NewThreadButton