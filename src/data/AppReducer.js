export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit": {
            console.log("Edit");
            const itemIndex = state.findIndex(i => i.id === action.id);
            if (itemIndex !== -1) {
                const newState = [...state];
                newState[itemIndex] = {
                    ...newState[itemIndex],
                    ...action.payload,
                };
                return newState;
            }
            return state;
        }

        case "rate": {
            console.log("Rate");
            const itemIndex = state.findIndex(i => i.id === action.id);
            if (itemIndex !== -1) {
                const newState = [...state];
                newState[itemIndex] = {
                    ...newState[itemIndex],
                    rating: Math.min(10, action.rating), // Zabezpieczenie przed przekroczeniem 10
                };
                return newState;
            }
            return state;
        }

        case "delete": {
            console.log("Delete");
            return state.filter(i => i.id !== action.id);
        }

        default:
            return state;
    }
}
