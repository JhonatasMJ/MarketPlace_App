import { memo } from "react";
import { Header } from "@/viewModels/Home/components/Header/Header";
import { SearchInput } from "@/viewModels/Home/components/SearchInput/SearchInput";

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