import { memo } from "react";
import { Header } from "../Header/Header";
import { SearchInput } from "../SearchInput/SearchInput";

 export const RenderHeader = memo(
        ({
          setSearchInputText,
          searchInputText,
        }: {
          setSearchInputText: (text: string) => void;
          searchInputText: string;
        }) => {
          return (
            <>
              <Header />
              <SearchInput
                searchInputText={setSearchInputText}
                inputValue={searchInputText}
              />
            </>
          );
        },
      );