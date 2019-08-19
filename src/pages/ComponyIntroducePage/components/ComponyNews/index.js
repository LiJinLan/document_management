import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route} from 'react-router-dom';
import './index.css';
import Developer from './components/Developer';
import Structure from './components/Structure';
import Partners from './components/Partners';
import Groups from './components/Groups';



class ComponyNews extends Component {

    constructor( props ){

        super(props);
       
    }
    
    render() {
        var sHref = window.location.href;
        var args = sHref.split('/'); 
        const argLen = args.length - 1
        console.log(args[argLen])
        const path = args[argLen];
        return (
            <div>
                <div id="left-content-title">
                    <div id="introTit">公司简介</div>
                    <div id="introTag">
                        <ul>
                            
                            <li className={ (path == "" || path == "gongsijianjie" )? "active" : "" }>
                                <Link to="/pages/gongsijianjie/">发展历程</Link>
                            </li>
                            <li  className={ path == "structure" ? "active" : "" }>
                                <Link to="/pages/gongsijianjie/structure">组织架构</Link>
                            </li>
                            <li className={ path == "partners" ? "active" : "" }>
                                <Link to="/pages/gongsijianjie/partners">合作伙伴</Link>
                            </li>
                            <li className={ path == "groups" ? "active" : "" }>
                                <Link to="/pages/gongsijianjie/groups">团队介绍</Link>
                            </li>
                            
                        </ul>

                    </div>
                </div>
                
                <div id="left-content-pic">
                   
                    { 
                        this.props.childRoutes.map((value,key)=>{
                            return <Route key={key} exact path={value.path} 
                                render={(props)=>(
                                    <value.component {...props} routes={value.childRoutes} />
                                )}
                            />
                        })
                    }
                </div>


            </div>

        );
    }
}


export default ComponyNews;