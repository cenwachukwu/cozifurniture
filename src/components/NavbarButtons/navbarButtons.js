import React from 'react';
import './navbarButtons.scss';
import Pills from '../HomePagePills/pills';
import loveseat from '../../utils/pillBackground/livingRoom.jpg';

const PillBox = () => {
  return (
    <div className="PillBox">
      <div className="boxPills">
        <Pills props={loveseat} categoryName={'Sofa'} />
        <Pills props={loveseat} categoryName={'Love Seat'} />
        <Pills props={loveseat} categoryName={'Chair'} />
        <Pills props={loveseat} categoryName={'Recliners'} />
        <Pills props={loveseat} categoryName={'Sectionals'} />
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
