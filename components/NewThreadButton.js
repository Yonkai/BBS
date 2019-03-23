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
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea id="story" placeholder='Comments' name="story" rows="5" cols="25"/>
                <input type="text" name="image" placeholder="Image?"/>
                <input type="text" name="captcha" placeholder="captcha"/>
                <input type="submit" value="Submit" />
            </form>
            <button className="check" onClick={this.openNewThreadForm}>Close Form</button>
            <style jsx>{`button { margin-right:15px;} input{display:block;}`}</style>
        </>
        }

        return (
            <div>
                {form}
            </div>
        );
    }
}

export default NewThreadButton