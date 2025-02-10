import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {inc, dec} from "./slice/counterSlice";
import {useTranslation} from "react-i18next";
import {setLanguage} from "./slice/languageSlice";
import { themeReducer } from "./slice/themeSlice.js";

const App = () => {
	const count = useSelector((state) => state.counter.value);
	const theme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const lang = useSelector((state) => state.language.lang);
	
	useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
	
	return (
		<div className="mt-10 flex flex-col items-center justify-center">
			<h1 className="text-3xl mb-5">{t("main_title")}</h1>
			<div className="flex gap-4 mb-4">
        <button
          onClick={() => dispatch(setLanguage("en"))}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition"
        >
          English
        </button>
        <button
          onClick={() => dispatch(setLanguage("uk"))}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-yellow-600 transition"
        >
          Українська
        </button>
      </div>
			
			<div className="mb-5">
        <button
          onClick={() => dispatch(themeReducer())} // Переключаем тему
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-gray-600 transition"
        >
          {t("toggle_theme")}
        </button>
      </div>
			
			
			<h2 className="text-3xl mb-10">{t("counter")} {count}</h2>
			<div className="flex gap-5">
        <button
          onClick={() => dispatch(inc())}
          className="px-6 py-3 bg-green-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition"
        >
          +
        </button>
        <button
          onClick={() => dispatch(dec())}
          className="flex items-center justify-center px-6 py-3 bg-red-500 text-white text-3xl font-bold rounded-full shadow-lg hover:bg-red-600 active:scale-95 transition"
        >
          -
        </button>
      </div>
		</div>
	);
};

export default App;
