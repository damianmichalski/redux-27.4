import { ADD_COMMENT } from "./actions";
import { REMOVE_COMMENT } from "./actions";
import { EDIT_COMMENT } from "./actions";
import { THUMB_UP_COMMENT } from "./actions";
import { THUMB_DOWN_COMMENT } from "./actions";

function comments(state = [], action) {
    function modifyThumbs(state, toAdd) {
        return state.map(comment => {
            if (comment.id === action.id) {
                return { ...comment, votes: comment.votes + toAdd };
            }
            return comment;
        });
    }

    switch (action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                },
                ...state
            ];

        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.text = action.text;
                }
                return comment;
            });
        case THUMB_UP_COMMENT:
            return modifyThumbs(state, +1);
        case THUMB_DOWN_COMMENT:
            return modifyThumbs(state, -1);
        default:
            return state;
    }
}

export default comments;