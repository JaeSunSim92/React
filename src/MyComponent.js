//import React from 'react';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';
/*
const MyComponent = ({name,favoriteNumber, children}) =>{    
    return(
         <div>
        안녕하세요, 제이름은 {name}입니다. <br />
        childern 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '유비템즈'
};

MyComponent.prototypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/
//클래스형 컴포넌트1
/* 
class MyComponent extends Component {
    render() { 
        const { name, favoriteNumber, children} = this.props;
        return (
            <div>
            안녕하세요, 제이름은{name}입니다. <br />
            children 값은 {children}입니다. <br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name : '기본이름'
};
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/
//클래스형 컴포넌트2
class MyComponent extends Component {
    static defaultProps={
        name:'기본이름'
};
static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
render() {
    const { name, favoriteNumber, children} = this.props;
    return(
        <div>
            안녕하세요, 제이름은{name}입니다. <br />
            children 값은 {children}입니다. <br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
    );
   }
}
export default MyComponent;