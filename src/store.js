export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'SET_CHARACTERS':
      return { ...store, characters: action.payload };

    case 'SET_PLANETS':
      return { ...store, planets: action.payload };

    case "TOGGLE_FAVORITE":
      const { payload } = action
      const myFavorite = store.favorites.some((item) => item._id == payload._id)
      return {
        ...store, favorites: myFavorite ?
          store.favorites.filter((item) => item._id !== payload._id) :
          [...store.favorites, payload]
      }

    case "REMOVE_FAVORITE":
      return {
        ...store,
        favorites: store.favorites.filter((item) => item._id != action.payload)
      }

    default:
      throw Error("Unknown action.");
  }
}
