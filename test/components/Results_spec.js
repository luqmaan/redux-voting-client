import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, Simulate} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {expect} from 'chai';

import {Results} from '../../src/components/Results';

describe('Results', () => {
  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const pair = List.of('Trainspotting', '28 Days Later');
    const component = renderIntoDocument(
      <Results pair={pair}
               tally={Map()}
               next={next}/>
    );
    Simulate.click(React.findDOMNode(component.refs.next));

    expect(nextInvoked).to.equal(true);
  });

  it('renders the winner when there is one', () => {
    const component = renderIntoDocument(
      <Results winner="Trainspotting"
               pair={["Trainspotting", "28 Days Later"]}
               tally={Map()} />
    );
    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });
});
