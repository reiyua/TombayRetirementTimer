// This file contains the ShowCounter component which is used to display the countdown timer on the website

import React from 'react';

const ShowCounter = ({ days, hours, minutes, seconds }) => (
 <div style={{ fontSize: '4rem' }}>
   {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
 </div>
);

export default ShowCounter;