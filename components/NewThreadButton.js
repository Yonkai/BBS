import React from 'react';

class NewThreadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openStatus: false};
        this.openNewThreadForm = this.openNewThreadForm.bind(this);
    }

    openNewThreadForm(e){
        e.preventDefault();
        this.setState((state, props) => ({
            openStatus: !state.openStatus
          }));
    }
    
    render(){
        var form;
        if(!this.state.openStatus){
            form=<button className="check" onClick={this.openNewThreadForm}>New Thread</button>
        }else{
            form=<button onClick={this.openNewThreadForm}>Post Form</button>
        }

        return (
            <>
                {form}
                <style jsx>{`button { margin-right:15px; }`}</style>
            </>
        );
    }
}

export default NewThreadButton