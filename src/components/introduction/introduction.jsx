import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Computer Science Junior | Research Assistant | Student Government Technology Chair
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
