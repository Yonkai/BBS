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
        let form;
        if(!this.state.openStatus){
            form=
            <>
                <button className="check" onClick={this.openNewThreadForm}>New Thread</button>
                <style jsx>{`button { margin-right:15px;} `}</style>
            </>
        }else{
        form=
        <>
            <form>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="name" placeholder="Subject"/>
                <input type="text" name="name" placeholder="Comments"/>
                <input type="text" name="name" placeholder="Image?"/>
                <input type="submit" value="Submit" />
            </form>
            <button className="check" onClick={this.openNewThreadForm}>Close Form</button>
            <style jsx>{`button { margin-right:15px;display:block} input{display:block}`}</style>
        </>
        }

        return (
            <div>
                {form}
                <style jsx>{`button { margin-right:15px;}div{display:inline; }`}</style>
            </div>
        );
    }
}

export default NewThreadButton