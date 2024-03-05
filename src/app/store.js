import { configureStore } from "@reduxjs/toolkit";

import eldersReducer from "../features/elders/eldersSlice";
import pictureReducer from "../features/allPictres/allPicturesSlice";
import imgReducer from "../features/imgCategory/imgCategorySlice";
import articleReducer from "../features/articles/articlesSlich";
import audioReducer from "../features/audios/audioSlice";

const store = configureStore({
  reducer: {
    
    elders: eldersReducer,
    pictures:pictureReducer,
    imgCategory:imgReducer,
    articles:articleReducer,
    audio:audioReducer,

  },
});

export default store;