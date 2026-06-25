import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useBottomSheetStore } from "../../store/bottomSheet-store";
import { useCallback, useMemo } from "react";
import { colors } from "../../../styles/colors";

export const AppBottomSheet = () => {
  const { content, close, config } = useBottomSheetStore();

  const snapPoints = useMemo(() => config?.snapPoints || ["80%", "90%"], [config.snapPoints]);

  const handleSheetChange = useCallback((index: number) => {
    if (index === -1) {
      close();
    }
  }, [close]);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop 
      {...props} 
      appearsOnIndex={0} 
      disappearsOnIndex={-1} 
      opacity={0.7} 
      pressBehavior="close" 
      enableTouchThrough={config?.enablePanDownToClose} />
    )
  }, [config?.enablePanDownToClose]);

  if (!content) return null;

  return (
    <BottomSheet 
    backgroundStyle={{ backgroundColor: colors.background, borderTopLeftRadius: 32, 
    borderTopRightRadius: 32 }} 
    backdropComponent={renderBackdrop}
    index={0}
    snapPoints={snapPoints}
    enablePanDownToClose={config?.enablePanDownToClose ?? true}
    animateOnMount
    onChange={handleSheetChange}
    >
      <BottomSheetScrollView>{content}</BottomSheetScrollView>
    </BottomSheet>
  );
};
