import React from 'react';
import './navbarButtons.scss';
import Pills from '../HomePagePills/pills';
import loveseat from '../../utils/pillBackground/livingRoom.jpg';

const PillBox = () => {
  return (
    <div className="PillBox">
      <div className="boxPills">
        <Pills props={loveseat} />
        <Pills props={loveseat} />
        <Pills props={loveseat} />
        <Pills props={loveseat} />
        <Pills props={loveseat} />
        <div className="extraPill">
          <div>
            <a href="#">Shop all Room Sofa deals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillBox;
