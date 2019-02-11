import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
        case REMOVE_COMMENT:
            return [{
                comments: state.comments.filter(comment => comment.id !== action.id)
            }];
        case EDIT_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: state.comments.find(comment => comment.id === action.id).votes
                }
                , ...state.comments];
        case THUMB_UP_COMMENT:
            return [{
                    id: action.id,
                    text: state.comments.find(comment => comment.id === action.id).text,
                    votes: action.amount++
                }
                , ...state.comments];
        case THUMB_DOWN_COMMENT:
            return [{
                    id: action.id,
                    text: state.comments.find(comment => comment.id === action.id).text,
                    votes: action.amount--
                }
                , ...state.comments];
    }
}