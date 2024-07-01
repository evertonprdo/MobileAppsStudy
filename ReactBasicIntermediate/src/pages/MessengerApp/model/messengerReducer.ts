import DATA from "./DATA";

type Messages = { [id: number]: string }
export type Action = {
    type: 'changed_selection' | 'edited_message' | 'message_sent'
    contactId: number
    message: string
    email?: string
}
type State = {
    selectedId: number
    messages: Messages
}

function getInitialMessages() {
    const initialMessages: Messages = {}
    for (const item of DATA) {
        initialMessages[item.id] = `Message to ${item.name}`
    }
    return initialMessages
}
export const initialState = {
    selectedId: 0,
    messages: getInitialMessages()
}

export default function messengerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'changed_selection': {
            return changedSelection(state, action)
        }
        case 'edited_message': {
            return editedMessage(state, action)
        }
        case 'message_sent': {
            window.alert(`"${action.message}" sent to ${action.email}`)
            return messageSent(state, action)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

function changedSelection(state: State, action: Action) {
    return {
        ...state,
        selectedId: action.contactId,
    }
}

function editedMessage(state: State, action: Action) {
    return {
        ...state,
        messages: {
            ...state.messages,
            [action.contactId]: action.message
        }
    }
}

function messageSent(state: State, action: Action) {
    return {
        ...state,
        messages: {
            ...state.messages,
            [action.contactId]: ''
        }
    }
}