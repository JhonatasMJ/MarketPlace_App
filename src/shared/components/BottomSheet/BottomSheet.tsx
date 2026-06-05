import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useBottomSheetStore } from "../../store/bottomSheet-store";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { colors } from "../../../styles/colors";

export const AppBottomSheet = () => {
  const { content, close, isOpen, config } = useBottomSheetStore();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => config?.snapPoints || ["80%", "90%"], [config.snapPoints]);


  // Abre o bottom sheet quando o conteúdo é alterado, e fecha quando o conteúdo é removido
  useEffect(() => {
    if (isOpen && content) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen, content]);

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

  return (
    <BottomSheet 
    backgroundStyle={{ backgroundColor: colors.background, borderTopLeftRadius: 32, 
    borderTopRightRadius: 32 }} 
    backdropComponent={renderBackdrop}
    ref={bottomSheetRef}
    index={-1}
    snapPoints={snapPoints}
    enablePanDownToClose={config?.enablePanDownToClose ?? true}
    animateOnMount
    onChange={handleSheetChange}
    >
      <BottomSheetScrollView>{content}</BottomSheetScrollView>
    </BottomSheet>
  );
};
