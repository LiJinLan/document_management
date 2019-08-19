import React, { Component } from 'react';
import arrow from "../../images/arrow.jpg";
import { connect } from 'react-redux';
import './index.css';

class Developer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componyEvent: [
                {
                    year: "2011年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }, {
                    year: "2012年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }, {
                    year: "2013年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }, {
                    year: "2014年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }, {
                    year: "2015年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }, {
                    year: "2016年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }, {
                    year: "2019年",
                    event: "因发展需要，业务扩展,广州公司总部搬迁至东风中路515号"
                }
            ]
        }
    }

    componentDidMount() {
        this.props.dispatch({ type:"showEvent", data: this.state.componyEvent});
    }
    render() {
        return (
            <div id="develop_nav">
                <img src={arrow} />
                <div id="contentNews">
                    <h2>详细事件</h2>
                   
                    <ul>

                        { this.props.componeEvent.map((item, index) => {
                            
                            return (
                                <li key={index}> 
                                    <h3>{ item.year}</h3>
                                    <p>{ item.event}</p>
                                </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    console.log( state );
    return ({
        componeEvent: state.getComponeEvent
    });
}
export default connect( mapStateToProps )(Developer);