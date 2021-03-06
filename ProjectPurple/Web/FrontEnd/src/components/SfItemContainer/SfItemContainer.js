import React from 'react';
import PropTypes from 'prop-types';
import './SfItemContainer.css'
import { MdArrowForward } from 'react-icons/lib/md';
import Moment from 'react-moment';
import SfItem from '../SfItem/SfItem';

const SfItemContainer = ({ option, data, close, children}) => {
    let apCode;
    let apName;
    let regDate;
    if(data){
        apCode=data.apCode;
        apName=data.apName;
        regDate=data.regDate;
    }
    let toggled = '';
    if (option) toggled = 'toggled'
    return (
        <div className={"SfItemContainer-wrapper " + toggled}>
            <div className="SfItemContainer-title SfItemContainer-item">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1" id="nopadding-left">
                            <button type="button" onClick={close}
                                className="SfItemContainer-btn">
                                <MdArrowForward />
                            </button>
                        </div>
                        <div className="col-11">
                            <div className="ml-1 mt-3">
                                <span className="nanum-gothic bold">
                                    <span>{apName}#{apCode}</span>
                                    에 등록된 수경재배기 목록</span><br />
                                <span className="text-muted smaller size-9">
                                    <Moment format="YYYY년 MM월 DD일 hh시">
                                        {new Date(regDate)}
                                    </Moment>
                                    에 등록됨
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"background-image " + toggled}>
                <div className="background-image-container"></div>
            </div>
            <div className="SfItemContainer-body SfItemContainer-item">
                {children}
                <div className="mt-3" id="SfItem-box" style={{height:'125px', zIndex: '9999', float:'left', border:'0'}}>
                </div>
            </div>
        </div>
    )
};

SfItemContainer.propTypes = {
    option: PropTypes.bool.isRequired,
}

export default SfItemContainer;