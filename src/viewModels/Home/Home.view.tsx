import { FlatList, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../shared/components/Header/Header"
import { SearchInput } from "../../shared/components/SearchInput/SearchInput"

export const HomeView = () => {
    return (
            <SafeAreaView edges={['top']} className="flex-1">
            <FlatList
            data={[]}
            renderItem={() => <Text>Item</Text>}
            ListHeaderComponent={() => <>
            <Header />
            <SearchInput />
            </>}
            contentContainerClassName="px-[16px] pb-[120px]"
            />
            </SafeAreaView>
    )
}