import React, { useState, useEffect } from 'react';
import '../App.css'
import Card from '../Components/Card';
import HedgingInputs from '../Components/HedgingInputs';
import OptimalHedgSize from '../Components/OptimalHedgSize';
import OutcomeBox from '../Components/OutcomeBox';

const HedgingCalcScreen = () => {
  const [originalOdds, setOriginalOdds] = useState(0); 
  const [originalBetAmount, setOriginalBetAmount] = useState(0); 
  const [hedgingOdds, setHedgingOdds] = useState(0);
  const [hedgingBetAmount, setHedgingBetAmount] = useState(0);
  const [guaranteedProfit, setGuaranteedProfit] = useState(0);
  const [origPotentialProfit, setOrigPotentialProfit] = useState(0);
  const [impliedOrigProbability, setOrigImpliedProbability] = useState(0);
  const [impliedHedgeProbability, setHedgeImpliedProbability] = useState(0);

  useEffect(() => {
    const calculateHedging = () => {
      if (originalOdds === 0 || originalBetAmount === 0) {
        setOrigPotentialProfit(0);
        return;
      }
      let profit = 0;
      let originalDecimalOdds = 0;
      let hedgeDecimalOdds = 0;
      if (originalOdds > 0) {
        originalDecimalOdds = originalOdds / 100 + 1;
        profit = (originalBetAmount * originalOdds) / 100;
        setOrigPotentialProfit(profit);
        setOrigImpliedProbability(((100 / (parseInt(originalOdds) + 100)) * 100).toFixed(2))
      } else {
        originalDecimalOdds = 1 - 100 / originalOdds;
        profit = (originalBetAmount * 100) / Math.abs(originalOdds);
        setOrigPotentialProfit(profit);
        setOrigImpliedProbability(((parseInt(originalOdds) / (parseInt(originalOdds) + 100)) * 100).toFixed(2))
      }
      if (hedgingOdds > 0) {
        hedgeDecimalOdds = hedgingOdds / 100 + 1;
        setHedgeImpliedProbability(((100 / (parseInt(hedgingOdds) + 100)) * 100).toFixed(2))
      } else {
        hedgeDecimalOdds = 1 - 100 / hedgingOdds;
        setHedgeImpliedProbability(((parseInt(hedgingOdds) / (parseInt(hedgingOdds) + 100)) * 100).toFixed(2))
      }
      const calculatedHedgeBetAmount = (
        (origPotentialProfit + parseInt(originalBetAmount)) / hedgeDecimalOdds
      ).toFixed(2);
      setHedgingBetAmount(parseFloat(calculatedHedgeBetAmount));
      setGuaranteedProfit(parseFloat(origPotentialProfit - calculatedHedgeBetAmount).toFixed(2));
    };

    calculateHedging();
  }, [originalOdds, originalBetAmount, hedgingOdds, origPotentialProfit, impliedOrigProbability, impliedHedgeProbability]);
  
  let originalOutcome = []
  let hedgeOutcome = []
  originalOutcome = [
    {name:'Implied Probability', value: impliedOrigProbability},
    {name:'Original Bet Profit', value: origPotentialProfit.toFixed(2)},
    {name:'Hedge Bet Profit', value: hedgingBetAmount},
    {name:'Guaranteed Profit', value: guaranteedProfit}
  ]
  hedgeOutcome = [
    {name:'Implied Probability', value: impliedHedgeProbability},
    {name:'Original Bet Profit', value: originalBetAmount},
    {name:'Hedge Bet Profit', value: hedgingBetAmount},
    {name:'Guaranteed Profit', value: guaranteedProfit}
  ]
  return (
          <div className='row centerBoth'>
            <div className='col'>
              <div className='cardContainer'>
                <Card title='Odds and Bet Size' content={<HedgingInputs 
                  originalOdds={originalOdds}
                  setOriginalOdds={setOriginalOdds}
                  originalBetAmount={originalBetAmount}
                  setOriginalBetAmount={setOriginalBetAmount}
                  hedgingOdds={hedgingOdds}
                  setHedgingOdds={setHedgingOdds}
                />} />
              </div>
            </div>
            <div className='col'>
              <div className='cardContainer'>
                <Card title='Optimal Hedge Size' content={
                  <>
                  <OptimalHedgSize 
                  hedgingBetAmount={hedgingBetAmount}
                  originalOdds={originalOdds}
                  originalBetAmount={originalBetAmount}
                  hedgingOdds={hedgingOdds}
                  guaranteedProfit={guaranteedProfit}
                  />
                  <div className='cardTitle'>Potential Outcomes</div>
                  <OutcomeBox outcomeMap={originalOutcome} title='Original Bet Wins'/>
                  <OutcomeBox outcomeMap={hedgeOutcome} title='Hedge Bet Wins'/>
                  </>
                } />
              </div>
            </div>
          </div>
        
      );
};

export default HedgingCalcScreen;
