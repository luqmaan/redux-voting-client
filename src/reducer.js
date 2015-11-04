import {Map, List} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  if (state.getIn(['vote', 'pair'], new List()).includes(entry)) {
    return state.set('hasVoted', entry);
  }
  return state;
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], new List());

  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  }
  return state;
}

export default function(state = new Map(), action) {
  console.log('reducer', action);

  switch (action.type) {
  case 'RESTART':
    return state.clear();
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'VOTE':
    return vote(state, action.entry);
  default:
    return state;
  }
}
