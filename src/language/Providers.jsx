"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Providers({ children }) {
  return (
  <>
    <Provider store={store}>
          <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Provider>

    
  </>  

  )
}
