
export const initialState = {
  selectedId: 0,
  message: '你好'
}

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection':
      return {
        ...state,
        seletedId: action.contactId,
        message: ''
      };
    case 'edited_message':
      return {
        ...state,
        message: action.message
      };
    default:
      throw new Error('未知 action：' + action.type);
  }
}
