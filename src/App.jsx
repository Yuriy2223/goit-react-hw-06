import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  ContactList,
  SearchBox,
  ContactForm,
  Loader,
} from "./components";
import "./App.css";

import { setLoading } from "./redux/loaderSlice";

const App = () => {
  const loading = useSelector((state) => state.loader.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="wrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
