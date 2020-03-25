import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }

    }


    render() {
        if (this.state.isLoggedIn){
            return(
                <div>
                    Welcome Rezza
                </div>
            )
        }else{
            return (
                <div>Welcom Guest</div>
            )
        }
        // return (
        //     <div>
        //         <div>Welcome Rezza</div>
        //         <div>Welcom Guest</div>
        //     </div>
        // );
    }
}

export default UserGreeting;