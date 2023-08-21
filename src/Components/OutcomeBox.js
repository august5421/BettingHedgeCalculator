import React from 'react';

const OutcomeBox = ({ outcomeMap, title, hedgingBetAmount, hedgingOdds, originalBetAmount, originalOdds, guaranteedProfit }) => {
  return (
    <div className='OutcomeBox row centerBoth'>
      <div className='outcomeTitle'>{title}</div>
      {outcomeMap && outcomeMap.map((item, index) => (
        <div key={index} className='col m5 centerBoth'>
          {item.value !== null && (
            <div className={`row centerBoth ${((title === 'Original Bet Wins' && item.name === 'Hedge Bet Profit') || (title === 'Hedge Bet Wins' && item.name === 'Original Bet Profit')) ? 'redtext' : ''}`}>
            {((title === 'Original Bet Wins' && item.name === 'Hedge Bet Profit') || (title === 'Hedge Bet Wins' && item.name === 'Original Bet Profit')) ? '-' : null}
            {item.name == 'Implied Probability' ? null : '$'}
            {item.value}
            {item.name == 'Implied Probability' ? '%' : null}
          </div>          
          )}
          {item.name !== null && (
            <div className='row outcomeSubTitle centerBoth'>{item.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OutcomeBox;
