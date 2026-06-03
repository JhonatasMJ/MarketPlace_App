import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeView } from "../../../viewModels/Home/Home.view";
import { useHomeViewModel } from "../../../viewModels/Home/useHome.viewModel";

export default function Home() {
  const viewModel = useHomeViewModel();
    return (
     <>
     <HomeView {...viewModel}/>
     </>
  );
}